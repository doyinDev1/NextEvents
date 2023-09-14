"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import {getFilteredEvents} from "@/dummy-data";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/ui/button";

const EventsSlug = () => {
    const params = useParams();
    const filterMonth = params.slug[0];
    const filterYear =  params.id;

    const filteredMonth = filterMonth;
    const filteredYear = filterYear;
    console.log(filteredMonth)
    if (!filterMonth || !filteredYear) {
        return  <p>Loading....</p>
    }
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;
    if (isNaN(numYear) || isNaN(numMonth) ||
        numYear > 2030
        || numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12) {
        return <>
            <p>Invalid filter adjust your values filter </p>
            <div className="center">
            </div>
            <Button link="/events">Show All Events</Button>
        </>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
        });

    if(!filteredEvents || filteredEvents.length === 0) {
        return <>
        <p>NO event found for the chosen filter </p>
            <div className="center">
            </div>
            <Button link="/events">Show All Events</Button>
        </>
    }
const date = new Date(numYear, numMonth);
     return (
    <div>
        <ResultsTitle date={date}/>
        <EventList items={filteredEvents}/>
    </div>
  )
}

export default EventsSlug
