<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

trait UUID
{
    /**
     * Generate new UUID
     * @param  Model  $model
     * @return void
     */
    protected static function generateUUID(Model $model): void {
        if ($model->getKey() === null) {
            $model->setAttribute($model->getKeyName(), Str::uuid()->toString());
        }
    }
}
