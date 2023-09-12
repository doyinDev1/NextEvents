import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router"
const EventsId = () => {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId)
    if (!event) {
        return <p>NO event Found!!!!</p>
    }
    return (
        <>
            <EventSummary />
            <EventLogistics />

            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}

export default EventsId
