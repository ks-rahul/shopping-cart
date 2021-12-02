import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  toggleCartPopup,
  addInExisting,
  removeFromExisting,
} from "../redux/actions/cart.actions";

const CartPreview = () => {
  const items = useSelector((state) => state.cart.items);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const dispatch = useDispatch();
  const router = useRouter();

  const toggleCart = () => dispatch(toggleCartPopup());

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddExisting = (productId) => {
    dispatch(addInExisting(productId));
  };

  const handleRemoveExisting = (productId) => {
    dispatch(removeFromExisting(productId));
  };

  const handleProceedCheckout = () => {
    toggleCart();
    router.push("/checkout");
  };

  return (
    <div className={`cart-preview ${isCartOpen ? "active" : ""}`}>
      <ul className="cart-items">
        {items.map((product) => (
          <li className="cart-item" key={product.name}>
            <img className="product-image" src={product.image} />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
            </div>
            <div className="product-total d-flex align-items-center justify-content-between">
              <p className="quantity">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={product.quantity === 1}
                  onClick={() => handleRemoveExisting(product.id)}
                >
                  -
                </button>
                <span>{`${product.quantity} ${
                  product.quantity > 1 ? "Nos." : "No."
                }`}</span>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAddExisting(product.id)}
                >
                  +
                </button>
              </p>
              <p className="amount" style={{ marginLeft: "10px" }}>
                {product.quantity * product.price}
              </p>
            </div>
            <button
              className="btn product-remove"
              onClick={() => handleRemove(product.id)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      <div className="action-block">
        <button
          type="button"
          className="btn btn-primary"
          disabled={items && items.length === 0}
          onClick={handleProceedCheckout}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPreview;
