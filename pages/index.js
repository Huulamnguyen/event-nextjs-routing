import { getFeaturedEvents } from "../dummy-data.js";
import EventList from "../components/events/event-list.js";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  //   console.log(featuredEvents);

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
export default HomePage;
