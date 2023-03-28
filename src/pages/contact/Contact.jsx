import React, { useEffect } from "react";

import "./Contact.css";

// import global components
import PageHeading from "../../components/PageHeading/PageHeading";

// import react icons
import { MdOutlineContactMail, MdOutlineContactPhone } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";

const Contact = ({ setPageTitle }) => {
  // set page title when component mounts
  useEffect(() => {
    setPageTitle(["Get In", " Touch"]);
    window.scrollTo(0, 0);
  }, [setPageTitle]);

  return (
    <section className="contactPage-container">
      <PageHeading heading={["Get In ", "Touch"]} pageName={"Contact"} />

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
            {/* inputs for name, email, and subject */}
            <input className="contact-input" type="text" placeholder="Name" />
            <input className="contact-input" type="email" placeholder="Email" />
            <input
              className="contact-input"
              type="text"
              placeholder="Subject"
            />
          </div>

          <div className="textarea-container">
            {/* textarea for message */}
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="btn-container">
            {/* submit button */}
            <button className="btn">
              <span>Send Message</span>
              <div className="icon-container">
                <FaRegPaperPlane className="icon" />
              </div>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
