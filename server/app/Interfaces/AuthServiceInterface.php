<?php

namespace App\Interfaces;

use Illuminate\Http\JsonResponse;

interface AuthServiceInterface
{
    public function login(array $loginData): JsonResponse;

    public function register(array $registerData): JsonResponse;

    public function refresh_token(array $refreshTokenData): JsonResponse;
}
