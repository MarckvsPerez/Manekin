import { transition } from "../components/Transitions";
import { Footer } from "../components/Footer";

function Events() {
  return <div>Events</div>;
}

const eventsComponent = () => {
  return (
    <div>
      <Events />
      <Footer />
    </div>
  );
};
export const EventsPage = transition(eventsComponent);
