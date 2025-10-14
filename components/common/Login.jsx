import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="grid grid-cols-[65%_35%] gap-2 ">
          <div className="h-screen w-full">
            <Image
              src="/assets/login.jpg"
              width={100}
              height={100}
              alt="loginpng"
              className="w-full h-screen min-w-full"
            />
          </div>
          <div className="flex justify-center items-center ">
            <div className=" w-[80%]">
              {" "}
              <div className="my-3">
                <Image
                  src="/assets/qms_logo.svg"
                  width={100}
                  height={100}
                  alt="loginpng"
                  className="mx-auto"
                />
              </div>
              <div className="my-4">
                <h2 className="heading-section-title text-center tw-text-red-500">
                  Welcome Back
                </h2>
                <p className="text-[var(--text-color)] text-center">
                  Use credential for your assigned role
                </p>
              </div>
              <form className="login-form">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Your Password"
                  />
                  <label for="floatingPassword">Your Password</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Default radio
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
