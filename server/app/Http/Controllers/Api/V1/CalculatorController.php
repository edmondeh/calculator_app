<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CalculateFormRequest;
use App\Interfaces\CalculatorServiceInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    public function __construct(protected CalculatorServiceInterface $calculatorService)
    {
    }

    /**
     * @param  CalculateFormRequest  $request
     * @return JsonResponse
     */
    public function __invoke(CalculateFormRequest $request): JsonResponse
    {
        $data = $request->validated();
        $userId = $request->user()->id;

        return $this->calculatorService->calculate($data['numbers'], $userId);
    }

    public function allCalculations(Request $request)
    {
        $userId = $request->user()->id;

        $page = $request->query('page');
        $take = $request->query('take');
        $order = $request->query('order');

        return $this->calculatorService->allCalculations($userId, $page, $take, $order);
    }
}
