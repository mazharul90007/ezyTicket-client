import useAuth from "../../Hooks/useAuth";
import AllEvents from "./AllEvents/AllEvents";
import EventBanner from "./EventsComponents/EventBanner";
import EventCards from "./EventsComponents/EventCards";
import EventInfo from "./EventsComponents/EventInfo";
import EventReview from "./EventsComponents/EventReview";

const Events = () => {
  const { darkMode } = useAuth();
  return (
    <div
      className={`${
        darkMode
          ? "bg-dark-background text-dark-primary"
          : "bg-background text-black"
      } `}
    >
      <EventBanner></EventBanner>
      <EventCards></EventCards>
      <AllEvents></AllEvents>
      <EventInfo></EventInfo>
    </div>
  );
};

export default Events;
