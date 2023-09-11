import {
  SiMaildotru,
  SiGithub,
  SiLinkedin,
} from '@icons-pack/react-simple-icons';
import Link from 'next/link';
export default function AboutMe() {
  const size = 20;
  interface ILink {
    name: string;
    href: string;
    icon: any;
    tooltip?: string;
  }
  const links: ILink[] = [
    {
      name: 'namaste@lakhanmandloi.in',
      href: 'mailto:namaste@lakhanmandloi.in',
      icon: <SiMaildotru color="default" size={size} />,
      tooltip: 'Email',
    },
    {
      name: 'lakhanmandloi',
      href: 'https://github.com/lakhanmandloi',
      icon: <SiGithub color="default" size={size} />,
      tooltip: 'Github',
    },
    {
      name: 'lakhanmandloi',
      href: 'https://www.linkedin.com/in/lakhanmandloi/',
      icon: <SiLinkedin color="default" size={size} />,
      tooltip: 'LinkedIn',
    },
  ];
  const LinkTag = ({ link }: { link: ILink }) => {
    return (
      <Link
        className="m-1 flex cursor-pointer items-center rounded-md bg-violet-100 px-3 py-1 transition-colors duration-300 ease-in-out hover:bg-violet-300"
        title={link.tooltip ?? link.name}
        href={link.href}
      >
        <span className="mr-2">{link.icon}</span>
        <span className="font-semibold text-violet-900">{link.name}</span>
      </Link>
    );
  };
  return (
    <section className="rounded-xl bg-white p-6 shadow print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-2 text-lg font-semibold print:hidden">
        About Me
      </h3>
      <h3 className="mb-4 hidden border-b-2 border-gray-100 pb-2 text-lg font-semibold print:visible">
        Summary
      </h3>
      <div className="prose prose-stone max-w-none text-gray-500">
        <p>
          I&apos;m a seasoned Senior Software Engineer at CLSA Technology &
          Services LLP, specializing in the dynamic intersection of frontend
          development and DevOps. I thrive on crafting cutting-edge solutions
          for a diverse range of clients and industries.
        </p>
        <p>
          With over eight years of experience, I&apos;ve successfully delivered
          60+ projects across financial services, e-commerce, learning
          management, event management, and marketing domains.
        </p>
        <p>
          Beyond my technical expertise, I&apos;ve assumed leadership roles as a
          Scrum master and tech lead, guiding teams to success, fostering
          seamless client/stakeholder communication, and surmounting complex
          technical challenges.
        </p>
        <p>
          I&apos;m fueled by a passion for exploring new technologies, creating
          user-friendly, top-tier products, and making a positive impact on
          society and the environment through innovative solutions.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap">
        {links.map((link) => {
          return <LinkTag link={link} key={link.name} />;
        })}
      </div>
    </section>
  );
}
