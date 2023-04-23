<?php

namespace App\Repositories;

use App\Interfaces\EloquentRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class BaseRepository implements EloquentRepositoryInterface
{
    /**
     * @var Model
     */
    protected Model $model;

    /**
     * BaseRepository constructor.
     *
     * @param  Model  $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * @return Collection
     */
    public function all(): Collection
    {
        return $this->model
            ->orderByDesc('id')
            ->get();
    }

    /**
     * @param $id
     * @return Model
     */
    public function find($id): ?Model
    {
        return $this->model
            ->find($id);
    }

    /**
     * @param  array  $attributes
     * @return Model|null
     */
    public function store(array $attributes): ?Model
    {
        return $this->model
            ->create($attributes);
    }

    /**
     * @param         $id
     * @param  array  $attributes
     * @return bool
     */
    public function update($id, array $attributes): bool
    {
        return $this->model
            ->find($id)
            ->update($attributes);
    }

    /**
     * @param $id
     * @return int
     */
    public function destroy($id): int
    {
        return $this->model
            ->destroy($id);
    }
}
