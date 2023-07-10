import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaRedditAlien,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterIcons = () => {
  const icons = [
    {
      id: "1",
      icon: <FaFacebookF />,
    },
    {
      id: "2",
      icon: <FaTwitter />,
    },
    {
      id: "3",
      icon: <FaInstagram />,
    },
    {
      id: "4",
      icon: <FaYoutube />,
    },
    {
      id: "5",
      icon: <FaTwitch />,
    },
    {
      id: "6",
      icon: <FaRedditAlien />,
    },
    {
      id: "7",
      icon: <FaTiktok />,
    },
    {
      id: "8",
      icon: <FaDiscord />,
    },
  ];

  return (
    <div className=" flex items-center justify-center">
      {icons.map((items) => {
        return (
          <div
            key={items.id}
            className=" h-12 w-12  flex items-center justify-center"
          >
            <Link className=" bg-[#9CA3AF] hover:bg-[#7315e5]/75 rounded-full h-7 w-7 flex justify-center items-center md:text-[#1A1C1E]">
              {items.icon}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FooterIcons;
