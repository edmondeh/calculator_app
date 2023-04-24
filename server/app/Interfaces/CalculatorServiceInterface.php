<?php

namespace App\Interfaces;

use Illuminate\Http\JsonResponse;

interface CalculatorServiceInterface
{
    public function calculate(string $numbers, string $userId): JsonResponse;

    public function allCalculations(
        string $userId,
        string $page = null,
        string $take = null,
        string $order = 'desc'
    ): JsonResponse;
}
