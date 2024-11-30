import { FaDiscord, FaLinkedin, FaGithub, FaUserCircle } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://portfolio-three-psi-13.vercel.app/",
    icon: <FaUserCircle />,
  },
  { href: "https://discord.com/users/465186689896415243", icon: <FaDiscord /> },
  // { href: "https://twitter.com", icon: <FaTwitter /> },
  // { href: "https://youtube.com", icon: <FaYoutube /> },
  // { href: "https://medium.com", icon: <FaMedium /> },
  {
    href: "https://www.linkedin.com/in/akshay-chaturvedi-1b1b3b1b1/",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.github.com/Strikezor",
    icon: <FaGithub />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          Re-Created by Akshay Chaturvedi
        </p>

        <div className="flex justify-center gap-4  md:justify-start lg:mr-[105px]">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          CopyRight: Zentry
        </a>
      </div>
    </footer>
  );
};

export default Footer;
