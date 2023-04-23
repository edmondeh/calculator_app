<?php

namespace App\Interfaces;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

interface EloquentRepositoryInterface
{
    /**
     * @return Collection
     */
    public function all(): Collection;

    /**
     * @param $id
     * @return Model
     */
    public function find($id): ?Model;

    /**
     * @param  array  $attributes
     * @return Model
     */
    public function store(array $attributes): ?Model;

    /**
     * @param         $id
     * @param  array  $attributes
     * @return Bool
     */
    public function update($id, array $attributes): bool;

    /**
     * @param $id
     * @return int
     */
    public function destroy($id): int;
}
