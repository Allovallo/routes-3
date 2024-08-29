import { ProductList } from "../components/ProductList";
import { getProducts } from '../fakeAPI';

export const Products = () => {
    const products = getProducts();
    return (
        <main>
            <ProductList product={products} />
        </main>
    )
}