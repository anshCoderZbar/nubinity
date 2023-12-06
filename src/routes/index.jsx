import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicRoutes } from "./public";

import { PrivacyPolicy } from "pages/privacy-policy";
import { TermsServices } from "pages/terms-services";
import Home from "pages/home";
import About from "pages/about";
import ContactUs from "pages/contact-us";
import ServicesPage from "pages/services";

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
      path: "/about",
      element: (
        <PublicRoutes>
          <About />
        </PublicRoutes>
      ),
    },
    {
      path: "/services",
      element: (
        <PublicRoutes>
          <ServicesPage />
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
    {
      path: "/terms-services",
      element: (
        <PublicRoutes>
          <TermsServices />
        </PublicRoutes>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
