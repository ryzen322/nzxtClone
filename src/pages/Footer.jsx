import FooterBody from "../components/FooterBody";
import FooterBottom from "../components/FooterBottom";
import FooterHeader from "../components/FooterHeader";

const Footer = () => {
  return (
    <div className=" py-[4rem] px-4 bg-[#1A1C1E] flex flex-col gap-[4rem] mt-[6rem]">
      <FooterHeader />
      <FooterBody />
      <FooterBottom />
    </div>
  );
};

export default Footer;
