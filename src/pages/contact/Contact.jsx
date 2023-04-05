import React, { useEffect } from "react";
import { motion } from "framer-motion";

import "./Contact.css";

// import global components
import PageHeading from "../../components/PageHeading/PageHeading";

// import react icons
import { MdOutlineContactMail, MdOutlineContactPhone } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";

// motion variants:
const zoomIn = (count) => ({
  hidden: { y: "-5%", scale: 0.7, opacity: 0 },
  visible: {
    y: "0%",
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 8,
      delay: count * 0.1,
    },
  },
});

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
        <motion.div
          variants={zoomIn(0)}
          initial="hidden"
          animate="visible"
          className="left"
        >
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
        </motion.div>

        <div className="right">
          <motion.div
            variants={zoomIn(1)}
            initial="hidden"
            animate="visible"
            className="input-fields-container"
          >
            {/* inputs for name, email, and subject */}
            <motion.input
              className="contact-input"
              type="text"
              placeholder="Name"
            />
            <motion.input
              className="contact-input"
              type="email"
              placeholder="Email"
            />
            <motion.input
              className="contact-input"
              type="text"
              placeholder="Subject"
            />
          </motion.div>

          <motion.div
            variants={zoomIn(2)}
            initial="hidden"
            animate="visible"
            className="textarea-container"
          >
            {/* textarea for message */}
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </motion.div>

          <motion.div
            variants={zoomIn(3)}
            initial="hidden"
            animate="visible"
            className="btn-container"
          >
            {/* submit button */}
            <button className="btn">
              <span>Send Message</span>
              <div className="icon-container">
                <FaRegPaperPlane className="icon" />
              </div>
            </button>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
