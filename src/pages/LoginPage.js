import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-5 py-5 align-item-center ">
            <div className="login-card">
              <h4 className="text-center py-2">Login</h4>
              <form action="post" method="post">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div>
                  <Link to="/forgotpassword" className="forgotpass">Forgot Password ?</Link>
                  <div className="d-flex justify-content-center align-item-center gap-15">
                    <button type="button" class="btn btn-outline-warning">
                      Login
                    </button>
                    <Link to="/signuppage">
                      <button type="button" class="btn btn-outline-secondary signup">
                        SignUp
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
