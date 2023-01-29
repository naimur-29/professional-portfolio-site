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
  },
  {
    context: "LinkedIn",
    icon: <FaLinkedinIn className="icon" />,
  },
  {
    context: "Youtube",
    icon: <BsYoutube className="icon" />,
  },
  {
    context: "Facebook",
    icon: <FaFacebookF className="icon" />,
  },
  {
    context: "Twitter",
    icon: <BsTwitter className="icon" />,
  },
];

export const pages = [
  {
    context: "About",
    icon: <BsPersonBoundingBox className="icon" />,
  },
  {
    context: "Projects",
    icon: <BsFillCollectionFill className="icon" />,
  },
  {
    context: "Home",
    icon: <HiHomeModern className="icon" />,
  },
  {
    context: "Blog",
    icon: <SiGooglemessages className="icon" />,
  },
  {
    context: "Contact",
    icon: <IoCall className="icon" />,
  },
];
