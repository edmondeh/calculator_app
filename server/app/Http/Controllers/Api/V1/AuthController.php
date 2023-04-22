<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginFormRequest;

class AuthController extends Controller
{
    public function login(LoginFormRequest $request)
    {
        return $request->validated();
    }
}
