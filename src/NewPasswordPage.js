import React from "react";
import { Link } from "react-router-dom";

const NewPasswordPage = () => {
  return (
    <div className="container smokebg">
      <div className="newpasspage py-5 ">
          <div className="row  d-flex justify-content-center">
            <div className="col-4 whitebg">
              <h5 className="text-center py-3">Reset Password</h5>
              <form action="post" method="post">
                <div class="mb-3">
                  <label htmlFor="newpassword " className="mb-2">New Passoword</label>
                  <input
                    type="password"
                    class="form-control"
                    id="Newpassword"
                    aria-describedby="nameHelp"
                  />
                </div>

                <div class="mb-3">
                  <label htmlFor="confirmpassword " className="mb-2">Confirm Passoword</label>
                  <input
                    type="password"
                    class="form-control"
                    id="Confirmpassword"
                    aria-describedby="nameHelp"
                  />
                </div>

                <div className="d-flex justify-content-center align-item-center gap-15 pb-3 ">
                  <Link to="/loginpage">
                    <button
                      type="button"
                      class="btn btn-outline-secondary signup"
                    >
                      Change Password
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
