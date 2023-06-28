import styles from "./eventsPage.module.css";
// import React, { useState, useEffect } from "react";
import { EventsHeader } from "./EventsHeader/EventsHeader";
import { EventsFunctional } from "./EventsFunctional/EventsFunctional";
import { EventsCard } from "./EventsCard/EventsCard";

export const EventsPage = () => {

  return (
    <section className={styles.eventsPage}>
      <EventsHeader />
      <EventsFunctional />

      <ul className={styles.eventsContent}>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
      </ul>
    </section>

  );
}
