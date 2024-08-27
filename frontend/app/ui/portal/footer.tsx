import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const navigation = {
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/bc-compsci-club/',
      icon: BsLinkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/bccs.club/',
      icon: BsInstagram,
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/C77eXN8bHT',
      icon: BsDiscord,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/bc-compsci-club',
      icon: BsGithub,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="pt-16">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; Brooklyn College Computer Science Club. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
