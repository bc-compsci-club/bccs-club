import React from "react";

export default function Contact() {
  return (
    <div className="max-w-7xl py-8 justify-center flex flex-col items-center">
      <p className="text-sm leading-8 text-gray-600">
        If you have any questions or concerns, please reach out to us at
      </p>
      <a
        className="text-sm leading-8 text-gray-600"
        href="mailto:bc.cis.club@gmail.com"
      >
        bc.cis.club&#64;gmail.com
      </a>
      <p className="text-sm leading-8 text-gray-600">
        or join the Game Jam Discord server via FAQ section above.
      </p>
    </div>
  );
}
