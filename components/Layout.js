import Head from "next/head";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { toggleCartPopup } from "../redux/actions/cart.actions";
import { signOut } from "../redux/actions/auth.actions";

import CartPreview from "./Cart.Preview";

function Layout({ title, children }) {
  const [session, setSession] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();

  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    let tc = localStorage.getItem("user");
    if (tc) {
      setSession(tc);
    } else {
      setSession(null);
    }
  }, [authSelector]);

  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.length;
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const handleCartButton = (e) => {
    e.preventDefault();
    dispatch(toggleCartPopup());
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(signOut());
    router.push("/login");
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
                {session && (
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">Shop</a>
                    </Link>
                  </li>
                )}
                {session && (
                  <li className="nav-item">
                    <Link href="/checkout">
                      <a className="nav-link">Checkout</a>
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  {session ? (
                    <a
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      onClick={handleSignOut}
                    >
                      Log Out
                    </a>
                  ) : (
                    <Link href="/login">
                      <a className="nav-link">Login</a>
                    </Link>
                  )}
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
