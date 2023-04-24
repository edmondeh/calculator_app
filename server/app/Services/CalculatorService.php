<?php

namespace App\Services;

use App\Interfaces\CalculatorServiceInterface;
use App\Utility\Calculator;

class CalculatorService implements CalculatorServiceInterface
{

    public function calculate(string $numbers): string
    {
        return Calculator::calculate($numbers);
    }
}
