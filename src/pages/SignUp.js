import React from "react";
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <div className="smokebg">
        <div className="container ">
          <div className="signuppage py-5">
            <div className="row d-flex justify-content-center">
              <div className="col-5 whitebg ">
                <h4 className="text-center py-3">Create Account</h4>
                
                  <form action="post" method="post" >
                    <div class="mb-3">
                      <input
                        type="text"
                        placeholder="First Name"
                        class="form-control"
                        id="FirstName"
                        aria-describedby="nameHelp"
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        type="text"
                        placeholder="Last Name"
                        class="form-control"
                        id="LastName"
                        aria-describedby="nameHelp"
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        placeholder="Email Id"
                        class="form-control"
                        id="Emailid"
                        aria-describedby="nameHelp"
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        type="password"
                        placeholder="Password"
                        class="form-control"
                        id="password"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div className="d-flex justify-content-center align-item-center gap-15 pb-3 ">
                    <button type="button" class="btn btn-outline-warning">
                      Create
                    </button>
                    <Link to="/loginpage">
                      <button type="button" class="btn btn-outline-secondary signup">
                        Cancel
                      </button>
                    </Link>
                  </div>
                  </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
