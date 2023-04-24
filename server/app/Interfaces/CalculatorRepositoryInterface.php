<?php

namespace App\Interfaces;

use Illuminate\Pagination\LengthAwarePaginator;

interface CalculatorRepositoryInterface
{
    public function allCalculations(
        string $userId,
        string $page = null,
        string $take = null,
        string $order = 'desc'
    ): LengthAwarePaginator|array;
}
