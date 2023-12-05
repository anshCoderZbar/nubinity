import React, { useEffect, useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

import "styles/Layout.css";
import { useLocation } from "react-router-dom";
import { LoadingRoute } from "components/pageloading";

export const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingRoute />
      ) : (
        <React.Fragment>
          <Header />
          {children}
          <Footer />
        </React.Fragment>
      )}
    </>
  );
};
