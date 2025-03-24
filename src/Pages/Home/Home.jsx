import { useLocation } from "react-router-dom";
import HomeBanner from "./HomeComponents/HomeBanner";
import HomeCategory from "./HomeComponents/HomeCategory";
import EventSection from "./HomeComponents/EventSection";


const Home = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className="pt-16 min-h-screen">
      <HomeBanner></HomeBanner>
      <HomeCategory></HomeCategory>
      <EventSection></EventSection>
      
    </div>
  );
};

export default Home;
