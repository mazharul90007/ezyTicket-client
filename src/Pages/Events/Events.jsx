import EventBanner from "./EventsComponents/EventBanner";
import EventCards from "./EventsComponents/EventCards";

const Events = () => {
    return (
        <div>
            <EventBanner></EventBanner>
            <h2>This is Event Page</h2>

            <EventCards></EventCards>
        </div>
    );
};

export default Events;