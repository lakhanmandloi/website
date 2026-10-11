import {
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { FaLinkedin } from 'react-icons/fa';

import Image from 'next/image';

import { CAREER_START, yearsSince } from '@/utils/date';

export default function Headline() {
  interface ILink {
    displayText: string;
    printText?: string;
    tooltip?: string;
    href: string;
    icon: React.ReactNode;
    display: boolean;
    print: boolean;
    trackLabel: string;
  }
  const links: ILink[] = [
    {
      trackLabel: 'email',
      displayText: 'namaste@lakhanmandloi.in',
      printText: 'namaste@lakhanmandloi.in',
      tooltip: 'Send me an email',
      href: 'mailto:namaste@lakhanmandloi.in',
      icon: <EnvelopeIcon className="w-4" />,
      display: true,
      print: true
    },
    {
      trackLabel: 'website',
      displayText: 'lakhanmandloi.in',
      printText: 'lakhanmandloi.in',
      tooltip: 'Visit my website',
      href: 'https://lakhanmandloi.in',
      icon: <LinkIcon className="w-4" />,
      display: false,
      print: true
    },
    {
      trackLabel: 'github',
      displayText: 'lakhanmandloi',
      printText: 'lakhanmandloi',
      tooltip: 'See my GitHub Profile',
      href: 'https://github.com/lakhanmandloi',
      icon: <SiGithub className="w-4" />,
      display: true,
      print: true
    },
    {
      trackLabel: 'linkedin',
      displayText: 'lakhanmandloi',
      printText: 'lakhanmandloi',
      tooltip: 'See my LinkedIn Profile',
      href: 'https://www.linkedin.com/in/lakhanmandloi',
      icon: (
        <FaLinkedin
          className="w-6"
          size={16}
        />
      ),
      display: true,
      print: true
    }
  ];

  const LinkTag = ({ link }: { link: ILink }) => {
    return (
      <a
        className={`mb-1 flex cursor-pointer items-center text-sm whitespace-nowrap text-gray-500 transition-colors hover:text-violet-600 print:mb-1 print:text-xs ${
          !link.display ? 'hidden' : 'flex'
        } ${!link.print ? 'print:hidden' : 'print:flex'}`}
        title={link.tooltip}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        data-track-event="contact_click"
        data-track-label={link.trackLabel}
      >
        <span className="mr-2 text-gray-400 print:mr-1">{link.icon}</span>
        <span className="print:hidden">{link.displayText}</span>
        <span className="hidden print:inline">{link.printText}</span>
      </a>
    );
  };

  return (
    <header className="mx-auto w-full space-y-5 overflow-hidden rounded-xl bg-white shadow lg:max-w-5xl print:rounded-none print:border-b-2 print:shadow-none">
      <div className="relative h-28 overflow-visible bg-[url('/images/banner-1.jpg')] bg-cover bg-fixed md:h-40 print:bg-local">
        <div className="print:space-between absolute -bottom-1/2 z-10 flex w-full -translate-y-1/2 items-end px-8 print:justify-between">
          <Image
            src="/images/avatar.jpg"
            alt="Lakhan Mandloi"
            className="cursor-pointer rounded-full bg-violet-100 shadow-md"
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className="flex flex-col p-6 pt-8 print:p-8 print:pb-4">
        <div className="flex flex-col items-start justify-between md:mb-4 xl:flex-row xl:items-center">
          <div>
            <h1 className="text-2xl font-semibold print:text-lg">
              Lakhan Mandloi
              <span className="ml-2 text-xs font-light print:hidden">
                (He/Him)
              </span>
            </h1>
            <div className="mb-3 text-sm text-gray-500 xl:mb-0 print:mb-3 print:text-sm">
              Co-founder, TAFT AI · Forward Deployed Engineer ·{' '}
              {yearsSince(CAREER_START)}+ yrs
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-end justify-between">
            <nav className="flex flex-col md:flex-row md:flex-nowrap md:gap-x-5 print:flex-row print:gap-x-4">
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
          <a
            className="inline-flex items-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700 print:hidden"
            href="https://www.tafttech.ai/?utm_source=lakhanmandloi.in&utm_medium=referral&utm_campaign=personal_site&utm_content=header_cta"
            target="_blank"
            rel="noopener"
            data-track-event="cta_click"
            data-track-label="work_with_taft_ai"
          >
            Work with TAFT AI →
          </a>
        </div>
      </div>
    </header>
  );
}
