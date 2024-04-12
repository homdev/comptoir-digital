import logo from "@/public/assets/img/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlGraduation } from "react-icons/sl";
import {
  FaRegFileAlt,
  FaRegEnvelope,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { LiaBlogSolid } from "react-icons/lia";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { MdFormatListBulleted } from "react-icons/md";

export const siteSettings = {
  logo: {
    image: logo?.src,
    alt: "CMDA",
    url: "/",
    text: "CMDA",
  },
  headersMenu: [
    {
      id: 1,
      title: "Home",
      selector: "#home",
      url: "/",
      Icon: <IoHomeOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 2,
      title: "About",
      selector: "#about",
      url: "/",
      Icon: <FaRegUser />,
      notVisibleRoutes: [],
    },
    {
      id: 3,
      title: "Service",
      selector: "#service",
      url: "/",
      Icon: <IoBriefcaseOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 4,
      title: "Project",
      selector: "#Project",
      url: "/",
      Icon: <IoBriefcaseOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 9,
      title: "Contact",
      selector: "#contact",
      url: "/",
      Icon: <FaRegEnvelope />,
      notVisibleRoutes: [],
    },
  ],
  socialMedias: [
    {
      id: 1,
      name: "Facebook",
      tooltip: "Share with Facebook",
      Icon: <FaFacebook />,
      url: "#",
    },
    {
      id: 2,
      name: "Linkedin",
      tooltip: "Share with Linkedin",
      Icon: <FaLinkedin />,
      url: "#",
    },
    {
      id: 3,
      name: "X",
      tooltip: "Share with X",
      Icon: <FaTwitter />,
      url: "#",
    },
    {
      id: 4,
      name: "Instagram",
      tooltip: "Share with Instagram",
      Icon: <FaInstagram />,
      url: "#",
    },
  ],
  preloader: {
    image: logo?.src,
  },
};
