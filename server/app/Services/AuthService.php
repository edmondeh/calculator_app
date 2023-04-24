<?php

namespace App\Services;

use App\Interfaces\AuthServiceInterface;
use App\Interfaces\OAuthClinetRepositoryInterface;
use App\Interfaces\UserRepositoryInterface;
use App\Traits\PasswordHasher;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Laravel\Passport\Client as OClient;
use Illuminate\Support\Facades\Http;

class AuthService implements AuthServiceInterface
{
    use PasswordHasher;

    /**
     * @param  UserRepositoryInterface         $userRepository
     * @param  OAuthClinetRepositoryInterface  $oAuthClinetRepository
     */
    public function __construct(
        protected UserRepositoryInterface $userRepository,
        protected OAuthClinetRepositoryInterface $oAuthClinetRepository
    ) {
    }

    /**
     * Login
     *
     * @param  array  $loginData
     * @return JsonResponse
     */
    public function login(array $loginData): JsonResponse
    {
        $user = $this->userRepository->findOneByEmail($loginData['email']);

        if (!$user || !$this->checkHashedPasswordIfIsValid($loginData['password'], $user->password)) {
            throw new UnauthorizedHttpException(
                'User Authentication', 'Email or password is wrong'
            );
        }

        $oClient = $this->oAuthClinetRepository->getOAuthClient();
        if (!$oClient) {
            throw new UnauthorizedHttpException('Authentication failed', 'Server error');
        }

        $tokenData = $this->getTokenAndRefreshToken($oClient, $loginData['email'], $loginData['password']);

        return response()->json($tokenData, Response::HTTP_OK);
    }

    /**
     * @param  array  $registerData
     * @return JsonResponse
     */
    public function register(array $registerData): JsonResponse
    {
        $user = $this->userRepository->findOneByEmail($registerData['email']);
        if ($user) {
            throw new BadRequestHttpException('This email is taken');
        }

        $registerData['email_verified_at'] = \Carbon\Carbon::now()->toDateString();

        $user = $this->userRepository->store($registerData);
        if (!$user) {
            throw new BadRequestHttpException('User is not registred');
        }

        return response()->json($user);
    }

    /**
     * @param  array  $refreshTokenData
     * @return JsonResponse
     */
    public function refresh_token(array $refreshTokenData): JsonResponse
    {
        $oClient = $this->oAuthClinetRepository->getOAuthClient();
        if (!$oClient) {
            throw new UnauthorizedHttpException('Authentication failed', 'Server error');
        }

        $tokenData = $this->getNewTokenAndRefreshToken($oClient, $refreshTokenData['refresh_token']);

        return response()->json($tokenData, Response::HTTP_OK);
    }

    /**
     * @param  OClient  $oClient
     * @param  string   $email
     * @param  string   $password
     * @return array
     */
    private function getTokenAndRefreshToken(OClient $oClient, string $email, string $password): array
    {
        $response = Http::asForm()->post(config('app.url') . '/oauth/token', [
            'grant_type'    => 'password',
            'client_id'     => $oClient->id,
            'client_secret' => $oClient->secret,
            'username'      => $email,
            'password'      => $password,
            'scope'         => '*',
        ]);

        return $response->json();
    }

    /**
     * @param  OClient  $oClient
     * @param  string   $refresh_token
     * @return array
     */
    private function getNewTokenAndRefreshToken(OClient $oClient, string $refresh_token): array
    {
        $response = Http::asForm()->post(config('app.url') . '/oauth/token', [
            'grant_type'    => 'refresh_token',
            'client_id'     => $oClient->id,
            'client_secret' => $oClient->secret,
            'refresh_token' => $refresh_token,
        ]);

        return $response->json();
    }
}
