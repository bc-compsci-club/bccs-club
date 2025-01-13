import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="max-w-7xl h-full px-6 mt-20 mx-auto text-center">
      <p className="text-sm text-gray-600">
        If you have any questions, please reach out to us at
      </p>
      <a
        className="text-sm leading-8 text-gray-600"
        href="mailto:bc.cis.club@gmail.com"
      >
        bc.cis.club&#64;gmail.com
      </a>
      <p className="text-sm text-gray-600">
        or join the Game Jam Discord server at
      </p>
      <Link className="text-sm leading-8 text-gray-600 w-fit hover:text-bc-red/70" href="https://discord.com/invite/q4Yyx3dhJC">
        https://discord.com/invite/q4Yyx3dhJC
      </Link>
    </div>
  );
}
