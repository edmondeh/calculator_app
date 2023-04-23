<?php

namespace App\Interfaces;

use Illuminate\Http\JsonResponse;

interface AuthServiceInterface
{
    public function login($loginData): JsonResponse;

    public function register($registerData): JsonResponse;

    public function refresh_token($refreshTokenData): JsonResponse;
}
