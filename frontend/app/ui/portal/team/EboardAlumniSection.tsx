import { BsLinkedin } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import Image from 'next/image';
import avatarPic from '../../../images/team/eboard-alumni/avatar.jpg'
import antaraKhanPic from '../../../images/team/eboard-alumni/antara-khan.jpg';
import stephonLawrencePic from '../../../images/team/eboard-alumni/stephon-lawrence.jpg';
import shahzodaDavlatovaPic from '../../../images/team/eboard-alumni/shahzoda-davlatova.jpg';
import syedaKazmiPic from '../../../images/team/eboard-alumni/syeda-kazmi.jpg';
import dennisKlimenkovPic from '../../../images/team/eboard-alumni/dennis-klimenkov.jpg';
import anastasiaGusenkovPic from '../../../images/team/eboard-alumni/anastasia-gusenkov.jpg';
import oleksandraKurbanovaPic from '../../../images/team/eboard-alumni/oleksandra-kurbanova.jpg';
import gilmanHuangPic from '../../../images/team/eboard-alumni/gilman-huang.jpg';
import neissaDorsinvillePic from '../../../images/team/eboard-alumni/neissa-dorsinville.jpg';
import kevinTamPic from '../../../images/team/eboard-alumni/kevin-tam.jpg';
import vincentXiePic from '../../../images/team/eboard-alumni/vincent-xie.jpg';
import junninhoThomasPic from '../../../images/team/eboard-alumni/junninho-thomas.jpg';
import evelynVelezPic from '../../../images/team/eboard-alumni/evelyn-velez.jpg';
import dianaHungPic from '../../../images/team/eboard-alumni/diana-hung.jpg';
import mariiaOnokhinaPic from '../../../images/team/eboard-alumni/mariia-onokhina.jpg';
import qingquanLiPic from '../../../images/team/eboard-alumni/qingquan-li.jpg';
import megiMuratiPic from '../../../images/team/eboard-alumni/megi-murati.jpg';
import kevinLiuPic from '../../../images/team/eboard-alumni/kevin-liu.jpg';

interface Member {
  photo: any;
  name: string;
  role: string; // club role
  title?: string; // job title
  linkedinUrl?: string; // Optional field
  personalWebsiteUrl?: string; // Optional field
}

const members: Member[] = [
  {
    photo: kevinLiuPic,
    name: 'Kevin Liu',
    role: 'Club Connector ~ 2024',
    title: 'SWE Intern @ 10Clear',
    linkedinUrl: 'https://www.linkedin.com/in/kevin-liu10252003/',
  },
  {
    photo: qingquanLiPic,
    name: 'Qingquan Li',
    role: 'Club President ~ 2024',
    title: 'SWE Intern @ MTA',
    linkedinUrl: 'https://www.linkedin.com/in/qingquan-li/',
  },
  {
    photo: megiMuratiPic,
    name: 'Megi Murati',
    role: 'Club Vice President ~ 2024',
    title: 'SWE Intern @ Con Edison',
    linkedinUrl: 'https://www.linkedin.com/in/megi-murati/',
  },
  {
    photo: antaraKhanPic,
    name: 'Antara Khan',
    role: 'Club President ~ 2016',
    title: 'SWE @ JPMorgan Chase',
    linkedinUrl: 'https://www.linkedin.com/in/antarakhan/',
  },
  {
    photo: stephonLawrencePic,
    name: 'Stephon Lawrence',
    role: 'Club President ~ 2018',
    title: 'SWE @ Bloomberg',
    linkedinUrl: 'https://www.linkedin.com/in/stephonlawrence/',
  },
  {
    photo: shahzodaDavlatovaPic,
    name: 'Shahzoda Davlatova',
    role: 'Club President ~ 2019',
    title: 'Startup Co-founder, Ex-SWE @ Facebook',
    linkedinUrl: 'https://www.linkedin.com/in/shahzodadavlatova/',
  },
  {
    photo: vincentXiePic,
    name: 'Vincent Xie',
    role: 'Club Vice President ~ 2019',
    title: 'Full Stack Developer @ TD Securities',
    linkedinUrl: 'https://www.linkedin.com/in/vinxie/',
  },
  {
    photo: syedaKazmiPic,
    name: 'Syeda Kazmi',
    role: 'Club President ~ 2020',
    title: 'Global Mentor @ Apple',
    linkedinUrl: 'https://www.linkedin.com/in/-syedakazmi/',
  },
  {
    photo: junninhoThomasPic,
    name: 'Junninho Thomas',
    role: 'Club Vice President ~ 2020',
    title: 'Cloud Security @ Orca Security, Ex-SWE @ Google',
    linkedinUrl: '',
    personalWebsiteUrl: ''
  },
  {
    photo: kevinTamPic,
    name: 'Kevin Tam',
    role: 'Club Secretary ~ 2020',
    title: 'SWE @ Provenir',
    linkedinUrl: 'https://www.linkedin.com/in/kevintamcs/',
    personalWebsiteUrl: 'https://kevintamcs.com/'
  },
  {
    photo: neissaDorsinvillePic,
    name: 'Neissa Dorsinville',
    role: 'Clun Secretary ~ 2020',
    title: 'SWE @ JPMorgan Chase',
    linkedinUrl: 'https://www.linkedin.com/in/neissado/',
  },
  {
    photo: dennisKlimenkovPic,
    name: 'Dennis Klimenkov',
    role: 'Club President ~ 2021',
    title: 'SWE @ The Washington Post',
    linkedinUrl: 'https://www.linkedin.com/in/dennis-klimenkov/',
  },
  {
    photo: anastasiaGusenkovPic,
    name: 'Anastasia Gusenkov',
    role: 'Club President ~ 2022',
    title: 'Product Owner Analyst @ Accenture',
    linkedinUrl: 'https://www.linkedin.com/in/anastasia-gusenkov/',
  },
  {
    photo: oleksandraKurbanovaPic,
    name: 'Oleksandra Kurbanova',
    role: 'Club President ~ 2022',
    title: 'SWE @ Capital One',
    linkedinUrl: 'https://www.linkedin.com/in/oleksandra-kurbanova/',
  },
  {
    photo: evelynVelezPic,
    name: 'Evelyn Velez',
    role: 'Club Treasurer ~ 2022',
    title: 'Application Developer @ Healthfirst',
    linkedinUrl: 'https://www.linkedin.com/in/evelyn-velez-nyc/',
  },
  {
    photo: gilmanHuangPic,
    name: 'Gilman Huang',
    role: 'Club Secretary ~ 2022',
    title: 'SWE @ American Express',
    linkedinUrl: 'https://www.linkedin.com/in/gilmanhuang/',
  },
  {
    photo: dianaHungPic,
    name: 'Diana Hung',
    role: 'Club President ~ 2023',
    title: 'Ex-SWE Intern @ The New York Times',
    linkedinUrl: 'https://www.linkedin.com/in/dianahungnyc/',
  },
  {
    photo: mariiaOnokhinaPic,
    name: 'Mariia Onokhina',
    role: 'Club Secretary ~ 2023',
    title: 'Graduate Student @ NYU',
    linkedinUrl: 'https://www.linkedin.com/in/mariia-onokhina/',
  },
]

export default function EboardAlumniSection() {
  return (
    <div className="mt-40">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
      <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Eboard Alumni
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {members.map((member) => (
            <li key={member.name}>
              <Image
                alt={member.name}
                src={member.photo}
                className="mx-auto h-24 w-24 rounded-full"
                placeholder="blur"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{member.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{member.role}</p>
              {member.title && <p className="text-sm leading-6 text-gray-900">{member.title}</p>}
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
                {member.personalWebsiteUrl && (
                  <li>
                    <a
                      href={member.personalWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Personal Website</span>
                      <BsGlobe2 className="h-5 w-5"/>
                    </a>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
