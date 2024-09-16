import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa"; // Fix imports

const socials = [
  { icon: <FaGithub />, path: "https://github.com/your-profile" }, // Use actual URLs
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/your-profile" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
