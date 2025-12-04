"use client";

import Login from "@/components/common/Login";
import QMSLoader from "@/components/ui/Loader";
import SessionPopup from "@/components/ui/SessionPopup";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const { user, relogin, logout } = useAuth();
  const [loading, setloading] = useState(false);
  const [ShowPopup, setShowPopup] = useState(false);
  const [LoginClicked, setLoginClicked] = useState(false);

  useEffect(() => {
    if (user) {
      setShowPopup(true);
    }
  }, [user]);

  if (loading) {
    return <QMSLoader type="screen" />;
  }

  return (
    <>
      {!LoginClicked && (
        <SessionPopup
          open={ShowPopup}
          onContinueHere={() => {
            setShowPopup(false);
            relogin(user, setloading);
          }}
          onGoBack={() => {
            setShowPopup(false);
            logout();
          }}
        />
      )}

      <Login setLoginClicked={setLoginClicked} />
    </>
  );
}
