import {ProductRepositoryInterface} from "./product-repository.type";
import {EloquentRepository} from "./eloquent-repository";

export class CachedRepository implements ProductRepositoryInterface {

    constructor(
        private eloquentRepository : EloquentRepository,
        private cache
    ) {
    }

    all(): void {
    }
}
