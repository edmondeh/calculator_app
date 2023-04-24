<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginFormRequest;
use App\Http\Requests\RefreshTokenFormRequest;
use App\Http\Requests\RegisterFormRequest;
use App\Interfaces\AuthServiceInterface;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    /**
     * @param  AuthServiceInterface  $authService
     */
    public function __construct(
        protected AuthServiceInterface $authService
    ) {
    }

    /**
     * @param  LoginFormRequest  $request
     * @return JsonResponse
     */
    public function login(LoginFormRequest $request): JsonResponse
    {
        $loginData = $request->validated();

        return $this->authService->login($loginData);
    }

    /**
     * @param  RegisterFormRequest  $request
     * @return mixed
     */
    public function register(RegisterFormRequest $request): JsonResponse
    {
        $registerData = $request->validated();

        return $this->authService->register($registerData);
    }

    /**
     * @param  RefreshTokenFormRequest  $request
     * @return JsonResponse
     */
    public function refresh_token(RefreshTokenFormRequest $request): JsonResponse
    {
        $refreshTokenData = $request->validated();

        return $this->authService->refresh_token($refreshTokenData);
    }
}
