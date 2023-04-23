<?php

namespace App\Repositories;

use App\Interfaces\UserRepositoryInterface;
use App\Models\User;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    /**
     * @param  User  $model
     */
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    /**
     * @param  string  $email
     * @return User|null
     */
    public function findOneByEmail(string $email): User|null
    {
        return User::select([
            'id',
            'first_name',
            'last_name',
            'email',
            'password',
            'created_at'
        ])
            ->where('email', $email)
            ->first();
    }
}
