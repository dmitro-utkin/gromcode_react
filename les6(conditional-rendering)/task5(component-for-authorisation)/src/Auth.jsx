import React, { useState } from "react";
import Login from "./Login.jsx";
import Spinner from "./Spinner.jsx";
import Logout from "./Logout.jsx";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleLogin = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setShowSpinner(false);
    }, 2000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Logout onLogout={handleLogout} />
      ) : showSpinner ? (
        <Spinner size="50px" />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Auth;
