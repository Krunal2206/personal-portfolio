import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const socials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/krunal2206",
    icon: FaLinkedinIn,
  },
  { name: "Github", href: "https://github.com/Krunal2206", icon: FaGithub },
  {
    name: "Email",
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
    icon: IoMdMail,
  },
];
