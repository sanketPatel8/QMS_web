import { useState } from "react";
import axios from "axios";
// import { showError, showSuccess } from "@/utils/toast";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "./useToast";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { showToast } = useToast();

  const request = async (
    endpoint,
    method = "GET",
    body = null,
    config = {}
  ) => {
    setLoading(true);

    try {
      const res = await axios({
        url: `${BASE_URL}${endpoint}`,
        method,
        data: body,
        headers: {
          // Authorization: user?.token || "",
          // Role: user?.role || "", // MR, AUDITOR, AUDITEE
          apikey: process.env.NEXT_PUBLIC_API_KEY,
          ...config.headers,
        },
        ...config,
      });

      console.log(res, "res in Api Hook");

      //   showSuccess(res.data.message || "Success");
      // showToast(res.data.message, "success");
      return { ok: true, data: res.data.data };
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      //   showError(msg);
      showToast(msg, "error");
      console.log(error, "error");
      return { ok: false, data: null };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    get: (endpoint, config = {}) => request(endpoint, "GET", null, config),
    post: (endpoint, body, config = {}) =>
      request(endpoint, "POST", body, config),
    put: (endpoint, body, config = {}) =>
      request(endpoint, "PUT", body, config),
    del: (endpoint, config = {}) => request(endpoint, "DELETE", null, config),
  };
};
