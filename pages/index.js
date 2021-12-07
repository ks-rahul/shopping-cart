import { useRouter } from "next/router";
import { useEffect } from "react";
import { connect } from "react-redux";

import ErrorBoundary from "../components/ErrorBoundaries";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

import { getProducts } from "../redux/actions/product.actions";

function Home({ getProductsList, products }) {
  const router = useRouter();

  useEffect(() => {
    if (products.length === 0) {
      getProductsList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Home">
      <ErrorBoundary fallback={<h1>Something went wrong!</h1>}>
        {products.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <div className="products-wrapper">
            <h1>Home</h1>
            <div className="products">
              {products.map((p) => (
                <ProductCard key={p.id} item={p} />
              ))}
            </div>
          </div>
        )}
      </ErrorBoundary>
    </Layout>
  );
}

function mapState(state) {
  return {
    products: state.product.products,
  };
}

function mapDispatch(dispatch) {
  return {
    getProductsList: () => dispatch(getProducts()),
  };
}

export default connect(mapState, mapDispatch)(Home);
