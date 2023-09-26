import {
  ArrowDownTrayIcon,
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
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
      displayText: '+91-9754945975',
      printText: '+91-9754945975',
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
      displayText: 'lakhanmandloi.in',
      printText: 'lakhanmandloi.in',
      tooltip: 'Visit my website',
      href: 'https://lakhanmandloi.in',
      icon: <LinkIcon className="w-4" />,
      display: false,
      print: true
    },
    {
      displayText: 'lakhanmandloi',
      printText: 'lakhanmandloi',
      tooltip: 'See my GitHub Profile',
      href: 'https://github.com/lakhanmandloi',
      icon: <SiGithub className="w-4" />,
      display: true,
      print: true
    },
    {
      displayText: 'lakhanmandloi',
      printText: 'lakhanmandloi',
      tooltip: 'See my LinkedIn Profile',
      href: 'https://www.linkedin.com/in/lakhanmandloi',
      icon: <SiLinkedin className="w-4" />,
      display: true,
      print: true
    }
  ];

  const LinkTag = ({ link }: { link: ILink }) => {
    return (
      <a
        className={`mb-1 flex cursor-pointer items-center text-sm text-gray-500 print:mb-1 print:mr-4 print:text-xs md:mr-4 xl:ml-4 xl:mr-0 ${
          !link.display ? 'hidden' : 'flex'
        } ${!link.print ? 'print:hidden' : 'print:flex'}`}
        title={link.tooltip}
        href={link.href}
        target="_blank"
      >
        <span className="mr-2 text-gray-400 print:mr-1">{link.icon}</span>
        <span className="print:hidden">{link.displayText}</span>
        <span className="hidden print:inline">{link.printText}</span>
      </a>
    );
  };

  return (
    <header className="mx-auto w-full space-y-5 overflow-hidden rounded-xl bg-white shadow print:rounded-none print:border-b-2 print:shadow-none lg:max-w-5xl">
      <div className="relative h-28 overflow-visible bg-[url('/images/banner-1.jpg')] bg-cover bg-fixed print:bg-local md:h-40">
        <div className="translate-1/2 print:space-between absolute -bottom-10 z-10 flex w-full items-end px-8 print:justify-between">
          <Image
            src="/images/avatar.jpg"
            alt="Lakhan Mandloi"
            className="cursor-pointer rounded-full bg-pink-200 shadow-md"
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className="flex flex-col p-6 pt-8 print:p-8 print:pb-4">
        <div className="flex flex-col items-start justify-between md:mb-4 xl:flex-row xl:items-center">
          <div className="whitespace-nowrap1">
            <h1 className="text-2xl font-semibold print:text-lg">
              Lakhan Mandloi
              <span className="ml-2 text-sm font-light print:hidden">
                (He/Him)
              </span>
            </h1>
            <div className="mb-3 text-base text-gray-400 print:mb-3 print:text-sm xl:mb-0">
              Frontend Developer (8+ Years Experience)
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <nav className="flex flex-col flex-wrap print:flex-row md:flex-row">
              {links.map((link) => {
                return (
                  <LinkTag
                    link={link}
                    key={link.href}
                  />
                );
              })}
            </nav>
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <address className="flex items-center text-sm text-gray-500 print:text-xs">
            <MapPinIcon className="mr-2 w-4 text-gray-400" />
            Indore, Madhya Pradesh, India
          </address>
          <div className="group flex max-w-xs rounded-lg bg-violet-500 font-semibold text-white transition-transform hover:scale-x-105 print:hidden">
            <button className="w-full rounded-l-lg px-4 py-2">
              Download Resume
            </button>
            <button className="rounded-r-lg bg-violet-600 px-4 py-2">
              <ArrowDownTrayIcon className="w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
