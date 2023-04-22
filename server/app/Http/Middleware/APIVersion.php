<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class APIVersion
{
    /**
     * Handle an incoming request.
     *
     * @param  Request                        $request
     * @param  \Closure(Request): (Response)  $next
     * @param  string                         $guard
     * @return Response
     */
    public function handle(Request $request, Closure $next, string $guard): Response
    {
        config(['app.api.version' => $guard]);
        return $next($request);
    }
}
