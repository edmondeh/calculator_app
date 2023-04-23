<?php

namespace App\Interfaces;

use Laravel\Passport\Client as OClient;

interface OAuthClinetRepositoryInterface
{
    /**
     * @return OClient|null
     */
    public function getOAuthClient(): ?OClient;
}
