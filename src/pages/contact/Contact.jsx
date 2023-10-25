import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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
  // states:
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sendMessageButton, setSendMessageButton] = useState("Send Message");

  // refs:
  const timeoutRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (
      form.name &&
      form.email &&
      form.message &&
      form.email.includes("@") &&
      form.email.includes(".")
    ) {
      setSendMessageButton("Sending...");

      const serviceID = "service_qwx4pnv";
      const templateID = "template_rykivom";
      const publicKey = "LYYQUNW8GKdhl3jV0";

      emailjs.send(serviceID, templateID, form, publicKey).then(
        (res) => {
          setSendMessageButton("Message Sent!");
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          timeoutRef.current = setTimeout(() => {
            setSendMessageButton("Send Message");
          }, 5000);
        },
        (err) => {
          setSendMessageButton("Failed To Send!");

          timeoutRef.current = setTimeout(() => {
            setSendMessageButton("Send Message");
          }, 5000);
        }
      );
    } else {
      setSendMessageButton("Invalid Info!");
      timeoutRef.current = setTimeout(() => {
        setSendMessageButton("Send Message");
      }, 5000);
    }
  };

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
              placeholder="Name*"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <motion.input
              className="contact-input"
              type="email"
              placeholder="Email*"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <motion.input
              className="contact-input"
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, subject: e.target.value }))
              }
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
              placeholder="Message*"
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
            ></textarea>
          </motion.div>

          <motion.div
            variants={zoomIn(3)}
            initial="hidden"
            animate="visible"
            className="btn-container"
          >
            {/* submit button */}
            <button
              className="btn"
              disabled={sendMessageButton !== "Send Message"}
              onClick={sendMessage}
            >
              <span>{sendMessageButton}</span>
              <div className="icon-container">
                {sendMessageButton === "Send Message" ? (
                  <FaRegPaperPlane className="icon" />
                ) : (
                  <></>
                )}
              </div>
            </button>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
