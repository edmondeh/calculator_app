<?php

namespace App\Repositories;

use App\Interfaces\CalculatorRepositoryInterface;
use App\Models\Calculation;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class CalculatorRepository extends BaseRepository implements CalculatorRepositoryInterface
{
    /**
     * @param  Calculation  $model
     */
    public function __construct(Calculation $model)
    {
        parent::__construct($model);
    }

    public function allCalculations(
        string $userId,
        ?string $page = null,
        string $take = null,
        ?string $order = 'desc'
    ): Collection|LengthAwarePaginator {
        $queryBuilder = $this->model->toBase();

        $queryBuilder->where('user_id', $userId);

        $queryBuilder->orderBy('id', $order === 'desc' ? 'DESC' : 'ASC');

        if ($page && $take) {
            return $queryBuilder->paginate(perPage: $take, page: $page);
        }

        return $queryBuilder->get();
    }
}
