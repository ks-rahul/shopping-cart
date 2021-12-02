import { wrapper } from "../redux";

import "../styles/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
