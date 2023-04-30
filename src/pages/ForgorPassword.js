import React from 'react'
import { Link } from "react-router-dom";


const ForgorPassword = () => {
  return (
    <div>
       <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-5 py-5 align-item-center ">
            <div className="forgot-card">
              <h4 className="text-center py-2">Reset Your Password</h4>
              <p className='text-center mb-3 resetmessage'>We will send an email to reset your password</p>
              <form action="post" method="post">
                <div class="mb-3">
                 
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email-Id"
                  />
                </div>
                        <div>
                  {/* <Link to="./forgotpassword" className="forgotpass">Forgot Password ?</Link> */}
                  <div className="d-flex justify-content-center align-item-center gap-15">
                    <button type="submit" class="btn btn-outline-warning">
                      Submit
                    </button>
                    <Link to="/loginpage">
                      <button type="button" class="btn btn-outline-secondary signup">
                        Cancel
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
  )
}

export default ForgorPassword
