import Image from "next/image";
import React from "react";
import image from "../../../images/team/club-coordinators/avatar.jpg";
const judges = [
  {
    name: "Olti Gjoni",
    title: "Incoming Software Engineer",
    company: "Roblox",
    iconUrl: image,
  },
  {
    name: "Jonathan Yashayev",
    title: "Full Software Engineer",
    company: "GoBeyond",
    iconUrl: image,
  },
  {
    name: "Eli Sultanov",
    title: "Software Engineer",
    company: "Valley IT Solutions",
    iconUrl: image,
  },
  {
    name: "Richard Weir",
    title: "Chairperson of Computer Science",
    company: "Monsignor Farrell High School",
    iconUrl: image,
  },
  {
    name: "Tatiana Anderson",
    title: "CUNY 2X Lecturer",
    iconUrl: image,
    company: " City University of New York",
  }
];

export default function Judges() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl space-y-6 font-bold leading-10 tracking-tight text-gray-900">
          Judges
        </h2>
        <ul role="list" className="grid py-3  grid-cols-2 md:grid-cols-3 gap-3 text-center">
          {judges.map((judge) => (
            <li key={judge.name}>
              <Image
                alt={judge.name}
                src={judge.iconUrl}
                className="mx-auto h-24 w-24 rounded-full"
                placeholder="blur"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {judge.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{judge.title}</p>
              <p className="text-sm leading-6 text-gray-900">{judge.company}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
