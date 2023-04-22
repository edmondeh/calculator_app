<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        Passport::tokensExpireIn(now()->addHours(config('jwt_access_token_time')));
        Passport::refreshTokensExpireIn(now()->addDays(config_path('jwt_refresh_token_time')));
        Passport::personalAccessTokensExpireIn(now()->addMonths(1));
    }
}
