import Image from "next/image";
import React from "react";
import gameJam2025 from "../../../images/club-event/gameJam-2025.png";
const schedules = [
  "Comencement Meeting: 1/16/2025 11AM - 12PM, at BC, room TBD, attending in person highly encouraged",
  "Game Jam: 1/16/2025 2 PM - 1/23. presentations 1/23 and 1/24 2-5 pm. @ bc, hybrid, room tbd. present in person or submit video",
  "Team Collaboration and Github Workshop: 1/16/2025, 12-1 pm, CSI location 1N-111 virtual, bc location tbd",
  "Github Workshop: 1/16/2025 right after commencement meeting 12-1 pm, CSI location 1N-111 virtual, bc location tbd. ideal for beginners, will teach how to use github",
  "resume workshop: takes place days/week after game jam, time tbd, will teach how to include your projects on your resume",
];

export default function Hero() {
  return (
    <div className="elative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-bc-red/15">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl pointer-events-none"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#454091] opacity-15"
        />
      </div>
      <div className="mx-auto max-w-2xl py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Game Jam 2025
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The Game Jam is a 1 week long, beginner-friendly competition between
            developers to create a game within a short amount of time. It is
            open to all CSI and Brooklyn College students and majors.
          </p>
          <Image className="flex justify-center w-full mt-10" src={gameJam2025} alt="game-jam-2025" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
