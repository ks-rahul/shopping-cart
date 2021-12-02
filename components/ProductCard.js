import { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/actions/cart.actions";

const ProductCard = ({ item }) => {
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const addItemToCart = (cartItem) => dispatch(addToCart(cartItem));

  const { image, name, price, id, stock } = item;

  const handleAddToCart = () => {
    const product = { ...item, quantity: 1 };
    addItemToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <h4 className="product-name">{name}</h4>
      <p className="product-price">{price}</p>
      <div className="product-action">
        <button
          className={`btn btn-primary ${!isAdded ? "" : "added"}`}
          type="button"
          onClick={handleAddToCart}
        >
          {!isAdded ? "ADD TO CART" : "✔ ADDED"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
