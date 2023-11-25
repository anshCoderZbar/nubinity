import React from "react";
import { HomeBanner } from "app/common/HomeBanner";

import "styles/Home.css";
import { Services } from "app/common/Services";
import { LAYOUT_IMG } from "app/images";

export default function Home() {
  return (
    <div className="home_page">
      <HomeBanner />
      <div className="services_abt_bg">
        <div className="container-fluid">
          <h2 className="main_head_1 text-center">Services</h2>
          <Services />
        </div>
        <div className="about_us">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about_us_content">
                  <h2 className="main_head_1">About Us</h2>
                  <p>
                    Founded in 2019 by a seasoned quartet of consulting,
                    cybersecurity, and DevOps experts Pavel Glukhikh, Nicolas
                    Pais, Josh Freedman, and Juan Cortez—Nubinity emerged from
                    the combined expertise and innovation-driven spirits of its
                    creators. As the new face of Universal Hosting, LLC, we
                    proudly stand at the forefront of web hosting and
                    professional services, offering cutting-edge design
                    thinking, consulting, and security solutions. With over a
                    decade's worth of industry experience, our mission is to
                    deliver unparalleled service and insights that empower our
                    clients to thrive in an ever-evolving digital landscape.
                    Nubinity is more than a company; it's a beacon of excellence
                    and a testament to what dedicated professionals can achieve
                    when they come together for a common goal.
                  </p>
                  <button>Learn More</button>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={LAYOUT_IMG.aboutBanner}
                  alt="about us"
                  className="abt_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
