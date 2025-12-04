"use client";

import { useAuth } from "@/context/AuthContext";
import { useApi } from "@/Hooks/useApi";
import { useToast } from "@/Hooks/useToast";
import { validatePassword } from "@/utils/passwordValidation";
import { validateForm } from "@/utils/validation";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import QMSLoader from "../ui/Loader";

const Login = ({ setLoginClicked }) => {
  const router = useRouter();

  const { showToast } = useToast();
  const { get, post } = useApi();
  const { user, login } = useAuth();

  // Single state object for all fields
  const [loginFormValue, setLoginFormValue] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setLoginFormValue((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const FatchLoginDetails = async () => {
    const RequestData = {
      email: loginFormValue.email,
      password: loginFormValue.password,
    };

    setloading(true);

    const loginres = await post("api/login_user", RequestData);

    if (loginres.ok) {
      const userObj = loginres.data.result[0]; // <-- extract first object
      const token = loginres.data.token;
      const rememberMe = loginFormValue.rememberMe;

      login(
        { ...userObj, token, rememberMe },
        loginFormValue.rememberMe,
        setloading
      );

      setLoginFormValue({
        email: "",
        password: "",
        rememberMe: false,
      });
    } else {
      setloading(false);
      showToast(loginres.data.error);
    }
  };

  const FatchLogin = () => {
    console.log("Login Data:", loginFormValue);
    const result = validatePassword(loginFormValue.password);

    if (!result.isValid) {
      showToast(result.message, "error");
      return;
    }

    const requiredState = {
      email: true,
      password: true,
      rememberMe: false,
    };

    const validation = validateForm(loginFormValue, requiredState);

    console.log(validation, "validation");

    if (!validation.isValid) {
      showToast(validation.message, "error");
      return;
    }

    setLoginClicked(true);

    FatchLoginDetails();
    // router.push("/mr/dashboard");
  };

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

          <div className="col-md-4 flex justify-center items-center">
            <div className="w-[80%]">
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
                {/* Email */}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={loginFormValue.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                  <label className="font-saira">Email address</label>
                </div>

                {/* Password */}

                <div className="form-floating mb-3 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    name="password"
                    value={loginFormValue.password}
                    onChange={handleChange}
                    placeholder="Your Password"
                  />
                  <label className="font-saira">Your Password</label>

                  {/* Toggle Icon */}
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>

                {/* Remember Me */}
                <div className="form-check mb-3">
                  <input
                    id="rememberMe"
                    className="form-check-input"
                    type="checkbox"
                    name="rememberMe"
                    checked={loginFormValue.rememberMe}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label cursor-pointer"
                    htmlFor="rememberMe"
                  >
                    Remember Me
                  </label>
                </div>
              </form>

              <button className="btn-blue w-full mb-3" onClick={FatchLogin}>
                {loading ? <QMSLoader type="button" size="lg" /> : "Login"}
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
