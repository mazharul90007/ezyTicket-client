import EventBanner from "./EventsComponents/EventBanner";
import EventCards from "./EventsComponents/EventCards";

const Events = () => {
    return (
        <div className="pt-16">
            <EventBanner></EventBanner>
            <EventCards></EventCards>
        </div>
    );
};

export default Events;