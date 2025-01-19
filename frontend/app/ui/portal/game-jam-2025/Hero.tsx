import Image from "next/image";
import React from "react";
import gameJam2025 from "../../../images/club-event/gameJam-2025.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-bc-red/15">
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
      <div
        aria-hidden="true"
        className="absolute inset-x-0 blur-2xl rotate-180 -z-10 flex transform-gpu justify-center overflow-hidden pointer-events-none"
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
            Game Jam 2025 is a week-long, beginner-friendly competition focused on creating games. It is open to all students at the College of Staten Island and Brooklyn College.
          </p>
          <Link
            className="inline-block px-6 py-3 mt-8 text-lg font-semibold leading-6 text-white bg-bc-red rounded-xl hover:bg-opacity-90"
            href="https://docs.google.com/forms/d/1gswgwDe2rWxjFrblA72jXFEErgbPQtB-yH8K6AgmcG4/viewform"
          >
            Game Jam 2025 Registration
          </Link>
          <Image
            className="flex justify-center -z-10 mx-auto mt-10 rounded"
            src={gameJam2025}
            alt="game-jam-2025"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
