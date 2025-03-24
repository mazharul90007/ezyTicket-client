import useAuth from "../../Hooks/useAuth";
import EventBanner from "./EventsComponents/EventBanner";
import EventCards from "./EventsComponents/EventCards";
import EventInfo from "./EventsComponents/EventInfo";
import EventReview from "./EventsComponents/EventReview";

const Events = () => {
  const { darkMode } = useAuth();
  return (
    <div
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} `}
    >
      <EventBanner></EventBanner>
      <EventCards></EventCards>
      <EventInfo></EventInfo>
      <EventReview></EventReview>
    </div>
  );
};

export default Events;
