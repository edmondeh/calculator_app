<?php

namespace App\Interfaces;

interface CalculatorRepositoryInterface
{
    public function allCalculations(
        string $userId,
        string $page = null,
        string $take = null,
        string $order = 'desc'
    );
}
