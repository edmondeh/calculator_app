<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Calculation extends Model
{
    use HasFactory, HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'expression',
        'result',
    ];

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @param  string  $userId
     * @param  string  $expression
     * @param  string  $result
     * @return Calculation
     */
    public static function newCalculation(string $userId, string $expression, string $result): Calculation
    {
        $entity = new Calculation();
        $entity->user_id = $userId;
        $entity->expression = $expression;
        $entity->result = $result;

        return $entity;
    }
}
