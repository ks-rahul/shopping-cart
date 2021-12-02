import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleCartPopup } from "../redux/actions/cart.actions";

import CartPreview from "./Cart.Preview";

function Layout({ title, children, cartBounce }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.length;
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const handleCartButton = (e) => {
    e.preventDefault();
    dispatch(toggleCartPopup());
  };

  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              NextJs Cart
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigationBar"
              aria-controls="navigationBar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navigationBar"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link active">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/login">
                    <a className="nav-link">Login</a>
                  </Link>
                </li>
              </ul>

              <div className="cart">
                <div className="cart-info">
                  <table>
                    <tbody>
                      <tr>
                        <td>No. of items</td>
                        <td>:</td>
                        <td>
                          <strong>{cartQuantity}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Sub Total</td>
                        <td>:</td>
                        <td>
                          <strong>{cartTotal}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a className="cart-icon" onClick={handleCartButton} href="#">
                  <img
                    style={{ filter: "grayscale(100%)" }}
                    src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                    alt="Cart"
                  />
                  {cartQuantity ? (
                    <span className="cart-count">{cartQuantity}</span>
                  ) : (
                    ""
                  )}
                </a>
                <CartPreview />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="text-center ft">
        <div className="alert alert-dismissible alert-light">
          Copyrights &copy; 2021.
        </div>
      </footer>
    </Fragment>
  );
}

export default Layout;
