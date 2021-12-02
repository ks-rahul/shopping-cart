import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

import {
  addInExisting,
  removeFromExisting,
  removeFromCart,
  clearCart,
} from "../redux/actions/cart.actions";

import Layout from "../components/Layout";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddExisting = (productId) => {
    dispatch(addInExisting(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleRemoveExisting = (productId) => {
    dispatch(removeFromExisting(productId));
  };

  const handleMakePayment = () => {
    alert("Order PLaced Successfully!");
    dispatch(clearCart());
  };

  useEffect(() => {
    let tc = localStorage.getItem("user");
    if (!tc) {
      router.push("/login");
    }
  }, [router]);

  return (
    <Layout title="checkout">
      <div className="container">
        <br />
        <h1 className="text-primary h4 text-capitalize">checkout page</h1>
        <br />
        <table className="table table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 && (
              <tr className="table-active">
                <th scope="row" className="text-center" colSpan="4">
                  No items added...
                </th>
              </tr>
            )}
            {cartItems.map((p, idx) => (
              <tr className="table-active" key={p.id}>
                <th scope="row">{idx + 1}</th>
                <td>{p.name}</td>
                <td>
                  {p.quantity === 1 ? (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleRemove.bind(null, p.id)}
                    >
                      x
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleRemoveExisting.bind(null, p.id)}
                    >
                      -
                    </button>
                  )}
                  {p.quantity} {p.quantity > 1 ? "Nos." : "No."}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddExisting.bind(null, p.id)}
                  >
                    +
                  </button>
                </td>
                <td>{p.quantity * p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {cartItems.length !== 0 && (
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleMakePayment}
            >
              Make Payments
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Checkout;
