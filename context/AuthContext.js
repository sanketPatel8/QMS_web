"use client";

import { useToast } from "@/Hooks/useToast";
import { useRouter } from "next/navigation";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // {role: "MR" | "AUDITOR" | "AUDITEE"}
  const { showToast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const local = localStorage.getItem("authUser");
    const session = sessionStorage.getItem("authUser");

    if (local) setUser(JSON.parse(local));
    else if (session) setUser(JSON.parse(session));
  }, []);

  const login = (userData, remember, loading) => {
    setUser(userData);

    console.log(userData, "userData in");

    // console.log(remember, "remember");

    if (remember) {
      // stay logged in
      localStorage.setItem("authUser", JSON.stringify(userData));
    } else {
      // remove if exists
      sessionStorage.setItem("authUser", JSON.stringify(userData));
    }

    showToast("Login Successful", "success");

    setTimeout(() => {
      // /mr/dashboard
      // /auditee/dashboard
      // /auditor/dashboard
      if (userData.role == "auditor") {
        loading(false);
        router.push("/auditor/dashboard");
      } else if (userData.role == "auditee") {
        loading(false);
        router.push("/auditee/dashboard");
      } else if (userData.role == "mr") {
        loading(false);
        router.push("/mr/dashboard");
      } else {
        loading(false);
        router.push("/");
      }
    }, 3000);
  };

  const relogin = (userData, loading) => {
    if (!userData || !userData.role) return;

    if (userData.role === "auditor") {
      loading(false);
      router.push("/auditor/dashboard");
    } else if (userData.role === "auditee") {
      loading(false);
      router.push("/auditee/dashboard");
    } else if (userData.role === "mr") {
      loading(false);
      router.push("/mr/dashboard");
    } else {
      loading(false);
      router.push("/");
    }
  };

  const logout = () => {
    setUser(null);
    // Remove from both storages
    localStorage.removeItem("authUser");
    sessionStorage.removeItem("authUser");
    showToast("Logged out successfully", "success");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, relogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
