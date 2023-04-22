<?php

namespace App\Traits;

use App\Models\User;

trait PasswordHasher
{
    /**
     * @param  User  $user
     * @return void
     */
    protected static function hashPassword(User $user): void
    {
        if ($user->password !== null) {
            $user->password = bcrypt($user->password);
        }
    }
}
