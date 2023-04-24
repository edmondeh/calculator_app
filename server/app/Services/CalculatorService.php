<?php

namespace App\Services;

use App\Interfaces\CalculatorRepositoryInterface;
use App\Interfaces\CalculatorServiceInterface;
use App\Models\Calculation;
use App\Utility\Calculator;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class CalculatorService implements CalculatorServiceInterface
{
    public function __construct(protected CalculatorRepositoryInterface $calculatorRepository)
    {
    }

    /**
     * @param  string  $numbers
     * @param  string  $userId
     * @return JsonResponse
     */
    public function calculate(string $numbers, string $userId): JsonResponse
    {
        $result = Calculator::calculate($numbers);

        $calculationData = Calculation::newCalculation($userId, $numbers, $result);

        $newCalculation = $this->calculatorRepository->store($calculationData->toArray());
        if (!$newCalculation) {
            throw new BadRequestHttpException('Calculation is not stored in database');
        }

        return response()->json([
            'expression' => $numbers,
            'result'     => $result,
            'date'       => $newCalculation->created_at,
        ]);
    }

    public function allCalculations(
        string $userId,
        string $page = null,
        string $take = null,
        ?string $order = 'desc'
    ) {
        return $this->calculatorRepository->allCalculations($userId, $page, $take, $order);
    }
}
