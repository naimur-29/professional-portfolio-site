import React, { useEffect } from "react";

import "./contact.css";

// ICONS:
import { MdOutlineContactMail, MdOutlineContactPhone } from "react-icons/md";

const About = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle(["Get In", " Touch"]);
  }, [setPageTitle]);

  return (
    <section className="contactPage-container">
      <section className="main-heading-container">
        <h1 className="page-heading">Contact</h1>
        <h2 className="title">
          {"Get In "}
          <span>Touch</span>
        </h2>
      </section>

      <main className="main-content-container">
        <div className="left">
          <h3 className="heading">Say hello!</h3>

          <p className="description">
            Feel free to get in touch with me. I'm always open to discussing new
            projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="links-container">
            <a href="mailto:prof.naimur29.gmail.com" className="link">
              <div className="icon-container">
                <MdOutlineContactMail className="icon" />
              </div>

              <div className="info">
                <p className="contact-context">Email me</p>
                <p className="contact-info">prof.naimur29.gmail.com</p>
              </div>
            </a>

            <a href="tel:+8801843024859" className="link">
              <div className="icon-container">
                <MdOutlineContactPhone className="icon" />
              </div>

              <div className="info">
                <p className="contact-context">Call me</p>
                <p className="contact-info">+8801843024859</p>
              </div>
            </a>
          </div>
        </div>

        <div className="right">
          <div className="input-fields-container">
            <input className="contact-input" type="text" placeholder="Name" />
            <input className="contact-input" type="email" placeholder="Email" />
            <input
              className="contact-input"
              type="text"
              placeholder="Subject"
            />
          </div>

          <div className="textarea-container">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="btn-container">
            <button className="btn">
              <span>Send Message</span>
              <div className="icon-container"></div>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
