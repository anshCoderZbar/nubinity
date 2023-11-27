import React from "react";
import { HomeBanner } from "app/common/HomeBanner";

import "styles/Home.css";
import { Services } from "app/common/Services";
import { LAYOUT_IMG } from "app/images";
import {
  Check,
  Facebook,
  InstagramIcon,
  Quote,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import { PlansData, TeamData } from "mock/Home";
import { ContactForm } from "components/contact-form";
import { BottomBanner } from "components/ui/BottomBanner";

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
          <div className="container-fluid pad_ri_0">
            <div className="row align-items-center ">
              <div className="col-md-6">
                <div className="about_us_content">
                  <h2 className="main_head_1">About Us</h2>
                  <p className="content_main">
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
                  <button className="btn_bg">Learn More</button>
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
        <div className="plans">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="plans_content">
                  <span>We don’t do free trials or free plans.</span>
                  <h2>Flexible and Affordable Plans</h2>
                  <p>
                    Discover the freedom of pay as you go pricing with our
                    flexible pricing plans, designed to adapt to your needs and
                    grow with your success. Everything you need, nothing you
                    don’t.
                  </p>
                  <button className="btn_bg">Get Started</button>
                </div>
              </div>
              <div className="col-md-9">
                <div className="cards_outer">
                  <div className="row">
                    {PlansData?.length >= 1 &&
                      PlansData?.map((elm) => {
                        return (
                          <div key={elm?.id} className="col-md-4">
                            <div className="price_card_bg">
                              <span className="price-discounted">
                                {elm?.discount} OFF
                              </span>
                              <h3>{elm?.heading}</h3>
                              <p className="price mb-0">
                                {elm?.price} <span>{elm?.timePeridd}</span>
                              </p>
                              <hr />
                              <ul className="plans_desc">
                                {elm?.details?.map((data, i) => {
                                  return (
                                    <li key={i}>
                                      <Check />
                                      {data?.desc}
                                    </li>
                                  );
                                })}
                              </ul>
                              <button className="checkout-btn">Checkout</button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vision ">
          <div className="container-fluid pad_lf_0">
            <div className="row align-items-center">
              <div className="col-md-6 ">
                <img src={LAYOUT_IMG.vision} alt="privacy" />
              </div>
              <div className="col-md-6">
                <div className="vision_content">
                  <h2 className="main_head_1">Corporate Vision</h2>
                  <p className="content_main">
                    At Nubinity, we steadfastly guard customer data privacy,
                    pledging to never sell your information or yield to
                    anti-privacy pressures. Our commitment to fair and
                    transparent pricing ensures that you receive value without
                    compromise, while our belief in universally exceptional
                    support means that every customer, regardless of size,
                    receives our full expertise and attention. As passionate
                    industry veterans, we don't just work in the field—we live
                    for the innovation and connections that every new day
                    brings.
                  </p>
                  <button className="btn_bg">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid pad_ri_0">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="vision_content">
                  <h2 className="main_head_1">Customer Privacy</h2>
                  <p className="content_main">
                    At Nubinity, your privacy is our priority. We strive to
                    uphold the confidentiality of your personal information,
                    ensuring that it is never sold, traded, or misused. Our
                    dedication to protecting your data is unwavering, and we
                    employ the highest standards of security to guard against
                    any intrusion. We believe in complete transparency with our
                    customers, and we commit to remain vigilant, always placing
                    your privacy at the forefront of our operations. Trust in us
                    to be your partner in privacy, where your data remains
                    exclusively yours.
                  </p>
                  <button className="btn_bg">Learn More</button>
                </div>
              </div>
              <div className="col-md-6 ">
                <img src={LAYOUT_IMG.privacyBanner} alt="privacy" />
              </div>
            </div>
            <div className="btm_content">
              <p className="mb-0">
                <span className="lower_quote">
                  <Quote />
                </span>
                As CEO of Nubinity, I stand firmly against the commoditization
                of personal data. Our clients' privacy is not for sale, at any
                price. We have built our reputation on trust and integrity, and
                we will continue to lead by example, ensuring that our clients'
                data remains secure and their dignity intact.
                <span className="upper_quote">
                  <Quote />
                </span>
              </p>
              <span className="ceo_name">Pavel Glukhikh</span>
              <span className="designaton">
                Chief Executive Officer | Nubinity
              </span>
            </div>
          </div>
        </div>
        <div className="our_team">
          <div className="container-fluid">
            <div className="teams">
              <h2 className="main_head_1">Our Team</h2>
              <div className="team_card">
                {TeamData?.map((data) => {
                  return (
                    <div key={data?.id} className="card_outer">
                      <div className="member_img">
                        <img src={data?.img} alt={data?.name} />
                      </div>
                      <div className="member_name text-center text-white">
                        {data?.name}
                      </div>
                      <div className="member_designation text-center text-white">
                        {data?.designation}
                      </div>
                      <div className="d-flex gap-2 align-items-center justify-content-center card_icons">
                        <a className="text-white" href="#">
                          <Facebook />
                        </a>
                        <a className="text-white" href="#">
                          <InstagramIcon />
                        </a>
                        <a className="text-white" href="#">
                          <TwitterIcon />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h2 className="main_head_1 text-center">Working Process</h2>
              <div className="progress-container">
                <div className="dot">
                  <div className="dot_before">Discovery</div>
                  <div className="dot_inner"></div>
                  <div className="dot_after">
                    Automated and hands on discovery
                  </div>
                </div>
                <div className="progress-step s_1"></div>
                <div className="dot">
                  <div className="dot_before">Design Thinking</div>
                  <div className="dot_inner"></div>
                  <div className="dot_after">
                    Collaboration to discover jobs, pains, and gains
                  </div>
                </div>
                <div className="progress-step s_2"></div>
                <div className="dot">
                  <div className="dot_before">Solution</div>
                  <div className="dot_inner"></div>
                  <div className="dot_after">
                    End to end solutioning to solve business problems
                  </div>
                </div>
                <div className="progress-step s_3"></div>
                <div className="dot dot_v4">
                  <div className="dot_before">Delivery</div>
                  <div className="dot_inner"></div>
                  <div className="dot_after">
                    Swift and secure delivery of solutions and application code
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <BottomBanner />
      </div>
    </div>
  );
}
