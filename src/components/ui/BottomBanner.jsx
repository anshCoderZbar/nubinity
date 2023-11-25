import React from "react";
import { Link } from "react-router-dom";

import "styles/ComponentsUi.css";

export const BottomBanner = () => {
  return (
    <div className="bottom_banner">
      <div className="container-fluid">
        <p>
          We do most of our consulting and implementation remotely. Reach out to
          us or join us on Discord, Telegram, or Apple Chat. We are available
          for free consultation and will create a custom plan to fit your needs.
        </p>
        <Link to="/">Get started now</Link>
      </div>
    </div>
  );
};
