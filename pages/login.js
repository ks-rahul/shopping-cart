import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Layout from "../components/Layout";

import { signIn } from "../redux/actions/auth.actions";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const router = useRouter();
  const dispatch = useDispatch();

  const signInHandle = (data) => dispatch(signIn());

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/");
    }
  }, [router]);

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
                    setUserData((prev) => ({ ...prev, email: e.target.value }))
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
    </Layout>
  );
};

export default Login;
