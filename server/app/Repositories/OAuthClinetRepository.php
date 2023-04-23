<?php

namespace App\Repositories;

use App\Interfaces\OAuthClinetRepositoryInterface;
use Laravel\Passport\Client as OClient;

class OAuthClinetRepository implements OAuthClinetRepositoryInterface
{
    /**
     * @return OClient|null
     */
    public function getOAuthClient(): ?OClient
    {
        return OClient::where('password_client', 1)->first();
    }
}
