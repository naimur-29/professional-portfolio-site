// icons:
import {
  BsGithub,
  BsYoutube,
  BsTwitter,
  BsPersonBoundingBox,
  BsFillCollectionFill,
} from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { SiGooglemessages } from "react-icons/si";
import { IoCall } from "react-icons/io5";

export const socials = [
  {
    context: "GitHub",
    icon: <BsGithub className="icon" />,
    link: "https://github.com/naimur-29/",
  },
  {
    context: "LinkedIn",
    icon: <FaLinkedinIn className="icon" />,
    link: "https://www.linkedin.com/in/naimur-rahman-799769202/",
  },
  {
    context: "YouTube",
    icon: <BsYoutube className="icon" />,
    link: "https://www.youtube.com/@naimur29/",
  },
  {
    context: "Facebook",
    icon: <FaFacebookF className="icon" />,
    link: "https://www.facebook.com/naimur29/",
  },
  {
    context: "Twitter",
    icon: <BsTwitter className="icon" />,
    link: "/",
  },
];

export const pages = [
  {
    context: "About",
    icon: <BsPersonBoundingBox className="icon" />,
    link: "about",
  },
  {
    context: "Projects",
    icon: <BsFillCollectionFill className="icon" />,
    link: "projects",
  },
  {
    context: "Home",
    icon: <HiHomeModern className="icon" />,
    link: "/",
  },
  {
    context: "Blog",
    icon: <SiGooglemessages className="icon" />,
    link: "blog",
  },
  {
    context: "Contact",
    icon: <IoCall className="icon" />,
    link: "contact",
  },
];
