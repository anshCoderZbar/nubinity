import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./public";

import { PrivacyPolicy } from "pages/privacy-policy";
import { TermsServices } from "pages/terms-services";
import Home from "pages/home";
import About from "pages/about";
import ContactUs from "pages/contact-us";
import ServicesPage from "pages/services";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
        <Route
          path="/about"
          element={
            <PublicRoutes>
              <About />
            </PublicRoutes>
          }
        />
        <Route
          path="/services"
          element={
            <PublicRoutes>
              <ServicesPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/contact-us"
          element={
            <PublicRoutes>
              <ContactUs />
            </PublicRoutes>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PublicRoutes>
              <PrivacyPolicy />
            </PublicRoutes>
          }
        />
        <Route
          path="/terms-services"
          element={
            <PublicRoutes>
              <TermsServices />
            </PublicRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
