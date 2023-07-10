import Footer from "../../pages/Footer";
import HomePageCTX from "./HomePageCTX";
import HomePageContent from "./HomePageContent";
import HomePageContent_2 from "./HomePageContent_2";
import HomePcParts from "./HomePcParts";
import PcDescription from "./PcDescription";
import PreBuild from "./PreBuild";
import PreBuildDesc from "./PreBuildDesc";

const HomePage = () => {
  return (
    <>
      <HomePageCTX />
      <HomePageContent />
      <HomePageContent_2 />
      <PreBuild />
      <PreBuildDesc />
      <PcDescription />
      <HomePcParts />
      <Footer />
    </>
  );
};

export default HomePage;
