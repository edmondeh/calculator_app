<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

trait PasswordHasher
{
    /**
     * Hash password with bcrypt
     *
     * @param  User  $user
     * @return void
     */
    protected static function hashPassword(User $user): void
    {
        if ($user->password !== null) {
            $user->password = Hash::make($user->password);
        }
    }

    /**
     * Check if password is valid
     *
     * @param  string  $password
     * @param  string  $hashedPassword
     * @return bool
     */
    protected function checkHashedPasswordIfIsValid(string $password, string $hashedPassword): bool
    {
        return Hash::check($password, $hashedPassword);
    }
}
