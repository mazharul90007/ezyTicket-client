import HomeBanner from "./HomeComponents/HomeBanner";
import HomeCategory from "./HomeComponents/HomeCategory";
import EventSection from "./HomeComponents/EventSection";
import TravelSection from "./HomeComponents/TravelSection";
import EntertainmentSection from "./HomeComponents/EntertainmentSection";
import Testimonials from "./HomeComponents/Testimonials";
import useAuth from "../../Hooks/useAuth";
import AboutUs from "./HomeComponents/AboutUs";

const Home = () => {
  const { darkMode } = useAuth();

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="pt-16 min-h-screen relative">
      <HomeBanner />

      {/* Reusable Home Category Component */}
      <HomeCategory scrollToSection={scrollToSection} />

      {/* Other Sections */}
      <TravelSection />
      <EventSection />
      <EntertainmentSection />
      {/* <AboutUs></AboutUs> */}
      <Testimonials />
    </div>
  );
};

export default Home;
