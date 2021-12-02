import { useEffect } from "react";
import { connect } from "react-redux";

import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

import { getProducts } from "../redux/actions/product.actions";

function Home({ getProductsList, products }) {
  useEffect(() => {
    if (products.length === 0) {
      getProductsList();
    }
  }, []);

  return (
    <Layout title="Home">
      {products.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="products-wrapper">
          <div className="products">
            {products.map((p) => (
              <ProductCard key={p.id} item={p} />
            ))}
          </div>
        </div>
      )}
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
