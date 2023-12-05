import { LAYOUT_IMG } from "app/images";
import { FormInput } from "components/ui/FormInput";
import { Textarea } from "components/ui/Textarea";
import { LocateFixedIcon, Mail, PhoneCall } from "lucide-react";
import React, { useState } from "react";

import "styles/Contact.css";
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    typeOfService: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const config = {
      SecureToken: "9fae76f4-4fc9-4444-87f4-05de6566c22b",
      To: "tohecen234@gearstag.com",
      From: formData?.email,
      Subject: `Name:${formData?.name} Service:${formData?.typeOfService}`,
      Body: `Name:${formData?.name} Email:${formData?.email} Phone Number: ${formData?.phoneNo} Service:${formData?.typeOfService} Message:${formData?.message}`,
    };

    e.preventDefault();
    window.Email.send(config).then((res) => console.log(res));
  };

  return (
    <div className="contactus_form">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-6">
            <div className="contact-form-outer">
              <h2
                className="contact_heading_h2"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Get in Touch
              </h2>
              <form
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                onSubmit={handleSubmit}
              >
                <div className="mt-3">
                  <FormInput
                    placeholder="name"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <FormInput
                    placeholder="email"
                    type="text"
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <FormInput
                    placeholder="phone number"
                    type="text"
                    name="phoneNo"
                    value={formData?.phoneNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <FormInput
                    placeholder="type of service"
                    type="text"
                    name="typeOfService"
                    value={formData?.typeOfService}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <Textarea
                    placeholder="Message"
                    type="text"
                    name="message"
                    value={formData?.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="submit"
                    className="submit"
                    value="submit"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact_deta">
              <h2
                className="main_head_1"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Contact Us
              </h2>
              <div
                className="contact_details"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
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
                    <a href="tel:+18337925683">
                      <span>
                        <PhoneCall />
                      </span>
                      <p>+1 (833) 792-5683</p>
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
                <h2
                  className="contact_heading_h2"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  Social Media
                </h2>
                <ul>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/profile.php?id=61553977341391"
                    >
                      <img src={LAYOUT_IMG.facebookImg} alt="social images" />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a href="#">
                      <img src={LAYOUT_IMG.twitterX} alt="social images" />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a href="#">
                      <img src={LAYOUT_IMG.telegram} alt="social images" />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a href="#">
                      <img src={LAYOUT_IMG.linkedin} alt="social images" />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/nubinity_offical/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
                    >
                      <img src={LAYOUT_IMG.instagram} alt="social images" />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <a href="https://discord.gg/Xbxdwhwvsp">
                      <img src={LAYOUT_IMG.discord} alt="social images" />
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
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
