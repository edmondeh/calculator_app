<?php

namespace App\Providers;

use App\Interfaces\AuthServiceInterface;
use App\Interfaces\CalculatorServiceInterface;
use App\Interfaces\OAuthClinetRepositoryInterface;
use App\Interfaces\UserRepositoryInterface;
use App\Repositories\OAuthClinetRepository;
use App\Repositories\UserRepository;
use App\Services\AuthService;
use App\Services\CalculatorService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * All the container bindings that should be registered.
     *
     * @var array
     */
    public array $bindings = [
        AuthServiceInterface::class           => AuthService::class,
        UserRepositoryInterface::class        => UserRepository::class,
        OAuthClinetRepositoryInterface::class => OAuthClinetRepository::class,
        CalculatorServiceInterface::class     => CalculatorService::class,
    ];

    /**
     * All the container singletons that should be registered.
     *
     * @var array
     */
    public array $singletons = [
    ];

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
