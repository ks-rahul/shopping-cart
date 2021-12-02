import { useSelector } from "react-redux";

import Layout from "../components/Layout";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);

  console.log("cartItems", cartItems);

  return (
    <Layout title="checkout">
      <h1>checkout page</h1>
      {cartItems.map((p) => p.name)}
    </Layout>
  );
}

export default Checkout;
