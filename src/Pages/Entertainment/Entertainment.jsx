import EventCategoriesSection from "./EventCategoriesSection";
import FeaturedEventsSection from "./FeaturedEventsSection";
import HeroSection from "./HeroSection";
import UpcomingEventsSection from "./UpcomingEventsSection";

const Entertainment = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedEventsSection></FeaturedEventsSection>
      <EventCategoriesSection></EventCategoriesSection>
      <UpcomingEventsSection></UpcomingEventsSection>
    </div>
  );
};

export default Entertainment;
