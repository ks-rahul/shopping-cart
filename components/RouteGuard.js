import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function RouteGuard({ children }) {
  const router = useRouter();

  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {
    const publicPaths = ["/login", "/about"];

    const path = url.split("?")[0];
    if (!localStorage.getItem("user") && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/login",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }

    if (localStorage.getItem("user") && path === "/login") {
      router.push("/");
    }
  }

  return authorized && children;
}

export default RouteGuard;
