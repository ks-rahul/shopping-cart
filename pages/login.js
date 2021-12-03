import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

import ErrorBoundary from "../components/ErrorBoundaries";
import Layout from "../components/Layout";

import { signIn } from "../redux/actions/auth.actions";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const router = useRouter();
  const dispatch = useDispatch();

  const signInHandle = (data) => dispatch(signIn(data));

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (userData.email === "" || userData.password === "") {
      alert("please enter valid inputs!");
      return;
    }

    signInHandle(userData);
    router.push("/");
  };

  return (
    <Layout title="Login">
      <ErrorBoundary fallback={<h1>Something went wrong!</h1>}>
        <div
          className="card border-primary mb-3"
          style={{ maxWidth: "20rem", margin: "50px auto" }}
        >
          <div className="card-body">
            <h4 className="card-title">Login</h4>

            <form onSubmit={handleSubmitForm}>
              <fieldset>
                <div className="form-group">
                  <label htmlFor="emailInput" className="form-label mt-4">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Enter email"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInput" className="form-label mt-4">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Password"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </ErrorBoundary>
    </Layout>
  );
};

export default Login;
