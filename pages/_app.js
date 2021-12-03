import { PersistGate } from "redux-persist/integration/react";

// import { wrapper } from "../redux";

import { store, persister } from "../redux";

import "../styles/bootstrap.min.css";
import "../styles/globals.css";

import RouteGuard from "../components/RouteGuard";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <RouteGuard>
      <Provider store={store}>
        <PersistGate loading={"Loading..."} persistor={persister}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </RouteGuard>
  );
}

// export default wrapper.withRedux(MyApp);
export default MyApp;
