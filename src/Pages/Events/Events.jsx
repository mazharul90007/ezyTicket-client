import useAuth from "../../Hooks/useAuth";
import EventBanner from "./EventsComponents/EventBanner";
import EventCards from "./EventsComponents/EventCards";

const Events = () => {
  const { darkMode } = useAuth();
  return (
    <div
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} `}
    >
      <EventBanner></EventBanner>
      <EventCards></EventCards>
    </div>
  );
};

export default Events;
