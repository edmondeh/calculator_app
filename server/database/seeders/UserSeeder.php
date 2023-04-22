<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'first_name' => 'Edmond',
            'last_name' => 'Hashani',
            'email' => 'admin@gmail.com',
            'password' => 'Password1.',
            'email_verified_at' => \Carbon\Carbon::now()->toDateString()
        ]);
    }
}
