"use client"

import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useParams } from 'next/navigation';

const EventsId = () => {
    const params = useParams()
    const eventId = params.id;
    const event = getEventById(eventId);
    if (!event) {
        return <p>NO event Found!!!!</p>
    }
    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
 
            <EventContent>
                <p>{event.description}
                </p>
            </EventContent>
        </>
    )
}

export default EventsId

