
import { products } from "../data/products";
import Product  from "./product";
import "./products.css";

const fetchProdcuts = () => {
  return products;
}

const Products = () => {
  const allProducts = fetchProdcuts();
  return(
    <div>
      <h1>All Products</h1>
      <div className="flex">
        {
          allProducts.map((product) => (
            <Product product={product}/>
        ))
        }
      </div>
    </div>
  )
}

export default Products;