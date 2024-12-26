import Image from "next/image";
import React from "react";
import jan16Icon from "../../../images/game-jam-2025-icons/jan16-icon.png";
import jan23Icon from "../../../images/game-jam-2025-icons/jan23-icon.png";
import jan24Icon from "../../../images/game-jam-2025-icons/jan24-icon.png";

const schedule = [
  {
    name: "Commencement Meeting",
    time: "11 AM - 12 PM",
    room: "Room TBD!",
    note: "*Attending in-person highly encouraged",
    iconUrl: jan16Icon,
  },
  {
    name: "Team Collaboration + Github Workshop",
    time: "12 PM - 1 PM",
    room: "CSI Location 1N-111 Virtual, BC TBD",
    note: "*Ideal for beginners!",
    iconUrl: jan16Icon,
  },
  {
    name: "Game Jam Begins",
    time: "2 PM",
    room: "Hybrid",
    iconUrl: jan16Icon,
  },
  {
    name: "Game Jam Ends, Judging Begins",
    time: "2 PM - 5 PM",
    room: "Hybrid",
    note: "*Present in-person or submit a video",
    iconUrl: jan23Icon,
  },
  {
    name: "Last Day of Judging",
    time: "2 PM - 5 PM",
    room: "Hybrid",
    iconUrl: jan24Icon,
  }
];

export default function Schedule() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl space-y-6 font-bold leading-10 tracking-tight text-gray-900">
          Schedule
        </h2>
        <ul role="list" className="grid py-5 grid-cols-2 md:grid-cols-3 gap-3 text-center">
          {schedule.map((session) => (
            <li key={session.name}>
              <Image
                alt={session.name}
                src={session.iconUrl}
                className="mx-auto h-24 w-24 "
                //placeholder="blur"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {session.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{session.time}</p>
              <p className="text-sm leading-6 text-gray-900">{session.room}</p>
              <p className="text-sm leading-6 text-gray-900">{session.note}</p>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
