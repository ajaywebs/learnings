import "./product.css";
const Product = ({product}) => {
  return (
    <div className="column">
      <div className="item" key={product.id}>
      <div className="img-holder">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="item-details">
        <h4>{product.title}</h4>
        <h5>Price {product.price}</h5>
      </div>
    </div>
    </div>
  );
};

export default Product;
