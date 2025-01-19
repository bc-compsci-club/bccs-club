import Image from "next/image";
import React from "react";
import jan16Icon from "../../../images/game-jam-2025-icons/jan16-icon.png";
import jan23Icon from "../../../images/game-jam-2025-icons/jan23-icon.png";
import jan24Icon from "../../../images/game-jam-2025-icons/jan24-icon.png";

const schedule = [
  {
    name: "Commencement Meeting",
    time: "11 AM - 12 PM",
    location: "CSI: 1N-111. BC: Amersfort Room, Student Center (2FL)",
    note: "*Theme will be announced.",
    iconUrl: jan16Icon,
  },
  {
    name: "Team Collaboration & Github Workshop",
    time: "12:15 PM - 1 PM",
    location: "CSI: 1N-111/Virtual. BC: Amersfort Room, Student Center (2FL)",
    note: "*Ideal for beginners.",
    iconUrl: jan16Icon,
  },
  {
    name: "Game Jam Begins",
    time: "2 PM",
    location: "Location: Universe",
    note: "*We don't have a physical location for the game development.",
    iconUrl: jan16Icon,
  },
  {
    name: "Game Jam Presentations",
    time: "2 PM - 5 PM",
    location: "CSI: 1N-111. BC: Bedford Lounge, Student Center (2FL)",
    note: "*You can present in person (encouraged), virtually, or submit a recorded video.",
    iconUrl: jan23Icon,
  },
  {
    name: "Game Jam Presentations",
    time: "2 PM - 5 PM",
    location: "CSI: 1N-111. BC: Bedford Lounge, Student Center (2FL)",
    note: "*You can present in person (encouraged), virtually, or submit a recorded video.",
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
              <p className="text-sm leading-6 text-gray-900">{session.location}</p>
              <p className="text-xs leading-6 text-gray-500">{session.note}</p>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
