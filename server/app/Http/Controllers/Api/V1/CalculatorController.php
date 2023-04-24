<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CalculateFormRequest;
use App\Interfaces\CalculatorServiceInterface;
use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    public function __construct(protected CalculatorServiceInterface $calculatorService)
    {
    }

    public function __invoke(CalculateFormRequest $request)
    {
        $data = $request->validated();

        return $this->calculatorService->calculate($data['numbers']);
    }
}
