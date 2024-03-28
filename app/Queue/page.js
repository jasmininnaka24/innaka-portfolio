"use client";

import React, { useState } from "react";

function TicketQueue() {
  const startingData = {
    importance: "",
    urgency: "",
    timestamp: Date.now().toString(),
  };

  const [tickets, setTickets] = useState([]);
  const [onHoldTicket, setOnHoldTicket] = useState(startingData);

  const handleChangeForTicket = (e) => {
    const { name, value } = e.target;
    setOnHoldTicket((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to add a ticket to the queue
  const addTicket = (e) => {
    e.preventDefault();
    setTickets([...tickets, onHoldTicket]);
    setOnHoldTicket(startingData);
  };

  // Function to process tickets from the queue
  const processTickets = () => {
    // Sort tickets based on priority
    const sortedTickets = [...tickets].sort((a, b) => {
      // Calculate priority based on importance and urgency
      const priorityA = Number(a.importance) + Number(a.urgency);
      const priorityB = Number(b.importance) + Number(b.urgency);

      // If priorities are equal, sort based on urgency and timestamp
      if (priorityA === priorityB) {
        if (a.urgency === b.urgency) {
          return a.timestamp - b.timestamp;
        }
        return b.urgency - a.urgency; // Higher urgency first
      }

      return priorityB - priorityA; // Higher priority first
    });

    // Update state with sorted tickets
    setTickets(sortedTickets);

    console.log("Processing tickets:", sortedTickets);
  };

  return (
    <div className="p-10 w-full">
      <h2>Ticket Form</h2>

      <form>
        <input
          type="number"
          placeholder="Importance"
          name="importance"
          value={onHoldTicket.importance}
          onChange={handleChangeForTicket}
        />
        <input
          type="number"
          placeholder="Urgency"
          name="urgency"
          value={onHoldTicket.urgency}
          onChange={handleChangeForTicket}
        />
        <input
          type="datetime-local"
          placeholder="Timestamp"
          name="timestamp"
          value={onHoldTicket.timestamp}
          onChange={handleChangeForTicket}
        />
        <button onClick={addTicket}>Add Ticket</button>
      </form>
      <br />

      <br />
      <br />
      <button
        className="py-2 px-5 rounded bg-primary text-white"
        onClick={processTickets}
      >
        Process Tickets
      </button>

      <br />
      <br />
      <h3>Tickets:</h3>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            Ticket {index + 1}: Importance {ticket.importance}, Urgency{" "}
            {ticket.urgency}, Timestamp {ticket.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketQueue;
