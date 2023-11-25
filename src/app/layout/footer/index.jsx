import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LAYOUT_IMG } from "app/images";
import { FooterLayout } from "mock/Layout";

export const Footer = () => {
  const [cookieNoti, showCookieNoti] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      showCookieNoti(true);
    }, 2500);
  }, []);

  return (
    <footer className="footer">
      {cookieNoti && (
        <div className="cookies_btm">
          <p>
            We use cookies to personalize content, provide social media
            features, and to enable interactive functions on this site. By
            clicking 'Accept', you consent to consent to our use of cookies as
            described in our privacy policy.
          </p>

          <div className="cookie_btn">
            <button onClick={() => showCookieNoti(false)}>Accept</button>
            <button>Cancel</button>
          </div>
        </div>
      )}
      <div className="container-fluid">
        <div className="footer_layout">
          <div className="footer_head">
            <img src={LAYOUT_IMG.headerLogo} alt="logo" />
            <span className="mail">
              <a href="mailto:hello@nubinity.com">hello@nubinity.com</a>
            </span>
            <span className="call">
              <a href="tel:+18337925678">+1 (833) 792-5678</a>
            </span>
          </div>
          {FooterLayout?.map((links) => {
            return (
              <div key={links?.id} className="footer_links">
                <div className="links_f_head">
                  <h4>{links?.heading}</h4>
                  <ul>
                    {links?.menus?.map((elm) => {
                      return (
                        <li key={elm?.id}>
                          <Link to={elm?.slug}>{elm?.link}</Link>
                        </li>
                      );
                    })}
                  </ul>
                  {links?.paymentLinks && (
                    <div className="footer_pymnt">
                      <span>
                        <img src={LAYOUT_IMG.payment1} alt="paymenticons" />
                      </span>
                      <span>
                        <img src={LAYOUT_IMG.payment2} alt="paymenticons" />
                      </span>
                      <span>
                        <img src={LAYOUT_IMG.payment3} alt="paymenticons" />
                      </span>
                      <span>
                        <img src={LAYOUT_IMG.payment4} alt="paymenticons" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2023 Nubinity. All Rights Reserved</p>
      </div>
    </footer>
  );
};
