import { IProducts } from "./iproducts";

export class ProductRepository {
    private products: IProducts[];

    constructor(){
        this.products = []
     }

    getProducts(): IProducts[] { return this.products; }
}
