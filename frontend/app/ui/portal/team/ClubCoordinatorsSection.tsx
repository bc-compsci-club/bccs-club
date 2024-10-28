import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";
// import avatarPic from '../../../images/team/club-coordinators/avatar.jpg'
import ayeshaZakerPic from "../../../images/team/club-coordinators/ayesha-zaker.jpg";
import nicoleShmerkinPic from "../../../images/team/club-coordinators/nicole-shmerkin.jpg";
import axelmejiaPic from "../../../images/team/club-coordinators/axel-mejia.jpg";
import andrewLiPic from "../../../images/team/club-coordinators/andrew-li.jpg";
import wilsonLiuPic from "../../../images/team/club-coordinators/wilson-liu.jpg";

interface Member {
  name: string;
  role: string;
  photo: any;
  linkedinUrl?: string; // Optional field
  githubUrl?: string; // Optional field
  personalWebsiteUrl?: string; // Optional field
  instagramUrl?: string; // Optional field
}

const members: Member[] = [
  {
    name: "Nicole Shmerkin",
    role: "Event Coordinator",
    photo: nicoleShmerkinPic,
    linkedinUrl: "https://www.linkedin.com/in/nicole-shmerkin-36ba2a2a9/",
    instagramUrl: "https://www.instagram.com/nvcole5/",
  },
  {
    name: "Ayesha Zaker",
    role: "Full Stack Developer",
    photo: ayeshaZakerPic,
    linkedinUrl: "https://www.linkedin.com/in/ayesha-z-4321a318b",
    githubUrl: "https://github.com/AZcodes",
  },
  {
    name: "Axel Mejia",
    role: "Backend Developer",
    photo: axelmejiaPic,
    linkedinUrl: "https://www.linkedin.com/in/axel-mejia-04a69725a/",
    githubUrl: "https://github.com/Ax3lMejia",
    instagramUrl: "https://www.instagram.com/4xl_m3/",
  },
  {
    name: "Andrew Li",
    role: "Backend Developer",
    photo: andrewLiPic,
    linkedinUrl: "https://www.linkedin.com/in/andrew-li-611a34278/",
    githubUrl: "https://github.com/AndrewL05",
    instagramUrl: "https://www.instagram.com/andrew.liiiiiii",
  },
  {
    name: "Wilson Liu",
    role: "Full Stack Developer",
    photo: wilsonLiuPic,
    linkedinUrl: "https://www.linkedin.com/in/wilson-liu-780255237/",
    githubUrl: "https://github.com/wilsonliu2",
    personalWebsiteUrl: "https://wilsonliu.vercel.app/",
  },
];

export default function ClubCoordinatorsSection() {
  return (
    <div className="mt-40">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Club Coordinators
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {members.map((member) => (
            <li key={member.name}>
              <Image
                alt={member.name}
                src={member.photo}
                className="mx-auto h-56 w-56 rounded-full"
                placeholder="blur"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{member.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                {member.linkedinUrl && (
                  <li>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <BsLinkedin className="h-5 w-5" />
                    </a>
                  </li>
                )}
                {member.githubUrl && (
                  <li>
                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Github</span>
                      <BsGithub className="h-5 w-5" />
                    </a>
                  </li>
                )}
                {member.personalWebsiteUrl && (
                  <li>
                    <a
                      href={member.personalWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Personal Website</span>
                      <BsGlobe2 className="h-5 w-5" />
                    </a>
                  </li>
                )}
                {member.instagramUrl && (
                  <li>
                    <a
                      href={member.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Instagram</span>
                      <BsInstagram className="h-5 w-5" />
                    </a>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
