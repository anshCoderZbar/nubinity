import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LAYOUT_IMG } from "app/images";
import { FooterLayout } from "mock/Layout";

import { Facebook, InstagramIcon, TwitterIcon } from "lucide-react";

export const Footer = () => {
  const [cookieNoti, showCookieNoti] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      showCookieNoti(true);
    }, 2500);
  }, []);

  useEffect(() => {
    const BASE_URL = "https://app.chatwoot.com";
    const script = document.createElement("script");

    const initializeChatwoot = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: process.env.REACT_APP_CHAT_WIDGET_WEBSITETOKEN,
          baseUrl: BASE_URL,
        });
      } else {
        console.error("Chatwoot SDK not loaded.");
      }
    };

    script.src = BASE_URL + "/packs/js/sdk.js";
    script.defer = true;
    script.async = true;

    script.onload = initializeChatwoot;
    script.onerror = () => {
      console.error("Error loading Chatwoot SDK.");
    };

    document.body.appendChild(script);
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
              <a href="tel:+18337925683">+1 (833) 792-5683</a>
            </span>
            <div className="d-flex gap-2 align-items-center card_icons Ftr_icns">
              <a
                className="text-white"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=61553977341391"
              >
                <Facebook />
              </a>
              {/* <a
                className="text-white"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/nubinity_offical/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
              >
                <InstagramIcon />
              </a> */}
              {/* <a className="text-white" href="#">
                <TwitterIcon />
              </a> */}
            </div>
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
