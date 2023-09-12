import { ArrowDownTrayIcon, LinkIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons';

import Image from 'next/image';

export default function Headline() {
  const size = 20;
  interface ILink {
    displayText: string;
    printText?: string;
    tooltip?: string;
    href: string;
    icon: any;
    display: boolean;
    print: boolean;
  }
  const links: ILink[] = [
    {
      displayText: '+91 975 4945 975',
      printText: '+91 975 4945 975',
      tooltip: 'Call me',
      href: 'tel:+919754945975',
      icon: <PhoneIcon className="w-4" />,
      display: false,
      print: true
    },
    {
      displayText: 'namaste@lakhanmandloi.in',
      printText: 'namaste@lakhanmandloi.in',
      tooltip: 'Send me an email',
      href: 'mailto:namaste@lakhanmandloi.in',
      icon: <EnvelopeIcon className="w-4" />,
      display: true,
      print: true
    },
    {
      displayText: 'https://lakhanmandloi.in',
      printText: 'https://lakhanmandloi.in',
      tooltip: 'Visit my website',
      href: 'https://lakhanmandloi.in',
      icon: <LinkIcon className="w-4" />,
      display: false,
      print: true
    },
    {
      displayText: 'lakhanmandloi',
      printText: 'https://github.com/lakhanmandloi',
      href: 'https://github.com/lakhanmandloi',
      icon: <SiGithub className="w-4" />,
      tooltip: 'See my GitHub Profile',
      display: true,
      print: true
    },
    {
      displayText: 'lakhanmandloi',
      printText: 'https://www.linkedin.com/in/lakhanmandloi',
      href: 'https://www.linkedin.com/in/lakhanmandloi',
      icon: <SiLinkedin className="w-4" />,
      tooltip: 'See my LinkedIn Profile',
      display: true,
      print: true
    }
  ];

  const LinkTag = ({ link }: { link: ILink }) => {
    return (
      <a
        className={`mr-4 cursor-pointer items-center print:mb-2 ${
          !link.display ? 'hidden' : 'flex'
        } ${!link.print ? 'print:hidden' : 'print:flex'}`}
        title={link.tooltip}
        href={link.href}
      >
        <span className="mr-2">{link.icon}</span>
        <span className="text-sm font-semibold text-violet-900 print:hidden">
          {link.displayText}
        </span>
        <span className="hidden text-sm font-semibold text-violet-900 print:inline">
          {link.printText}
        </span>
      </a>
    );
  };

  return (
    <header className="mx-auto max-w-5xl space-y-5 overflow-hidden rounded-xl bg-white shadow print:rounded-none print:border-b-2 print:shadow-none">
      <div className="relative h-40 overflow-visible bg-[url('/images/banner.jpg')] bg-cover bg-fixed print:bg-local">
        <div className="translate-1/2 absolute -bottom-10 z-10 flex w-full items-end justify-between px-8">
          <Image
            src="/images/avatar.png"
            alt="Lakhan Mandloi"
            className="cursor-pointer rounded-full bg-pink-200 p-0.5 shadow-md"
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className="flex flex-col p-6 pt-8 print:p-2 print:pt-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold">
              Lakhan Mandloi
              <span className="ml-2 text-sm font-light print:hidden">
                (He/Him)
              </span>
            </h1>
            <div className="mb-7 text-base text-gray-400 print:mb-3">
              Senior Software Developer
            </div>
          </div>
          <div className="group flex rounded-lg bg-violet-500 font-semibold text-white transition-transform hover:scale-x-105 print:hidden">
            <button className="w-full rounded-l-lg px-4 py-2">
              Download Resume
            </button>
            <button className="rounded-r-lg bg-violet-600 px-4 py-2">
              <ArrowDownTrayIcon className="w-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {links.map((link) => {
            return (
              <LinkTag
                link={link}
                key={link.href}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
}
