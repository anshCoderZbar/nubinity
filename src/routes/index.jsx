import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PublicRoutes } from "./public";
import Home from "pages/home";
import ContactUs from "pages/contact-us";
import { PrivacyPolicy } from "pages/privacy-policy";

export const AllRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoutes>
          <Home />
        </PublicRoutes>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <PublicRoutes>
          <ContactUs />
        </PublicRoutes>
      ),
    },
    {
      path: "/privacy-policy",
      element: (
        <PublicRoutes>
          <PrivacyPolicy />
        </PublicRoutes>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
