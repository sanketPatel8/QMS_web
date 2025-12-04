"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <div className="container-fluid login-container">
        <div className="row">
          <div className="col-md-8 p-0">
            <Image
              src="/assets/login-left.jpg"
              width={100}
              height={100}
              alt="loginpng"
              className="w-full h-screen min-w-full rounded-lg"
            />
          </div>
          <div className="col-md-4 flex justify-center items-center ">
            <div className="w-[80%]">
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
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput" className="font-saira">
                    Email address
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Your Password"
                  />
                  <label for="floatingPassword" className="font-saira">
                    Your Password
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Remember Me
                  </label>
                </div>
              </form>
              <button
                className="btn-blue w-full mb-3"
                onClick={() => {
                  router.push("/mr/dashboard");
                }}
              >
                Login
              </button>
              <Link href="#" className="text-center">
                <h6 className="text-black">Forgot Password ?</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
