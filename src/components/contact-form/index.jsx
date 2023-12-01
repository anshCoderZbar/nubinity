import { LAYOUT_IMG } from "app/images";
import { FormInput } from "components/ui/FormInput";
import { Textarea } from "components/ui/Textarea";
import {
  Facebook,
  Instagram,
  Linkedin,
  LocateFixedIcon,
  Mail,
  PhoneCall,
  Send,
} from "lucide-react";
import React from "react";

import "styles/Contact.css";
export const ContactForm = () => {
  return (
    <div className="contactus_form">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-6">
            <div className="contact-form-outer">
              <h2 className="contact_heading_h2" data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">Get in Touch</h2>
              <form data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                <div className="mt-3">
                  <FormInput placeholder="name" type="text" />
                </div>
                <div className="mt-3">
                  <FormInput placeholder="email" type="text" />
                </div>
                <div className="mt-3">
                  <FormInput placeholder="phone number" type="text" />
                </div>
                <div className="mt-3">
                  <FormInput placeholder="type of service" type="text" />
                </div>
                <div className="mt-3">
                  <Textarea placeholder="Message" type="text" />
                </div>
                <div className="mt-3">
                  <input type="submit" className="submit" value="submit" />
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact_deta">
              <h2 className="main_head_1" data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">Contact Us</h2>
              <div className="contact_details" data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer">
                      <span>
                        <LocateFixedIcon />
                      </span>
                      <p> New Orleans, LA</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <PhoneCall />
                      </span>
                      <p> +1 (833) 792-5683, (504) 533-4678</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <Mail />
                      </span>
                      <p> hello@nubinity.com</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social_icons">
                <h2 className="contact_heading_h2" data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">Social Media</h2>
                <ul>
                  <li data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                    <a href="#">
                      <img src={LAYOUT_IMG.facebookImg} alt="social images" />
                    </a>
                  </li>
                  <li data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                    <a href="#">
                      <img src={LAYOUT_IMG.twitterX} alt="social images" />
                    </a>
                  </li>
                  <li data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                    <a href="#">
                      <img src={LAYOUT_IMG.telegram} alt="social images" />
                    </a>
                  </li>
                  <li data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                    <a href="#">
                      <img src={LAYOUT_IMG.linkedin} alt="social images" />
                    </a>
                  </li>
                  <li data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                    <a href="#">
                      <img src={LAYOUT_IMG.instagram} alt="social images" />
                    </a>
                  </li>
                  <li data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                    <a href="#">
                      <img src={LAYOUT_IMG.discord} alt="social images" />
                    </a>
                  </li>
                  <li data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
                    <a href="#">
                      <img src={LAYOUT_IMG.teamspeak} alt="social images" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
