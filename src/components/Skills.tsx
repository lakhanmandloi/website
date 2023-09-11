import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGithubactions,
  SiGit,
  SiJenkins,
  SiDocker,
  SiBootstrap,
  SiNginx,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiAmazons3,
  SiAmazonec2,
  SiAmazonrds,
  SiCircleci,
  SiGraphql,
  SiApollographql,
  SiPlaywright,
  SiPhp,
  SiJoomla,
  SiWordpress,
  SiJekyll,
  SiMysql,
  SiLinux,
  SiFigma,
  SiJira,
  SiArchlinux,
  SiGnubash,
  SiBun,
  SiElixir,
} from '@icons-pack/react-simple-icons';

const size = 20;
interface Skill {
  icon: any;
  name: string;
  tooltip?: string;
  category: 'frontend' | 'backend' | 'cms' | 'devops' | 'other';
}

const skills: Skill[] = [
  {
    icon: <SiReact color="default" size={size} />,
    name: 'React',
    category: 'frontend',
  },
  {
    icon: <SiNextdotjs color="default" size={size} />,
    name: 'Next.js',
    category: 'frontend',
  },
  {
    icon: <SiTypescript color="default" size={size} />,
    name: 'TypeScript',
    category: 'frontend',
  },

  {
    icon: <SiJavascript color="default" size={size} />,
    name: 'JavaScript',
    category: 'frontend',
  },
  {
    icon: <SiCss3 color="default" size={size} />,
    name: 'CSS',
    category: 'frontend',
  },
  {
    icon: <SiHtml5 color="default" size={size} />,
    name: 'HTML',
    category: 'frontend',
  },

  {
    icon: <SiTailwindcss color="default" size={size} />,
    name: 'Tailwind CSS',
    category: 'frontend',
  },
  {
    icon: <SiBootstrap color="default" size={size} />,
    name: 'Bootstrap',
    category: 'frontend',
  },
  {
    icon: <SiGraphql color="default" size={size} />,
    name: 'GraphQL',
    category: 'frontend',
  },
  {
    icon: <SiReactquery color="default" size={size} />,
    name: 'Tanstack Query',
    tooltip: 'Tanstack Query (FKA React Query)',
    category: 'frontend',
  },
  {
    icon: <SiApollographql color="default" size={size} />,
    name: 'Apollo Client',
    category: 'frontend',
  },
  {
    icon: <SiReacthookform color="default" size={size} />,
    name: 'React Hook Form',
    category: 'frontend',
  },
  {
    icon: <SiReactrouter color="default" size={size} />,
    name: 'React Router',
    category: 'frontend',
  },
  {
    icon: <SiPlaywright color="default" size={size} />,
    name: 'Playwright',
    category: 'other',
  },
  {
    icon: <SiPhp color="default" size={size} />,
    name: 'PHP',
    category: 'backend',
  },
  {
    icon: <SiMysql color="default" size={size} />,
    name: 'MySQL',
    category: 'backend',
  },
  {
    icon: <SiJoomla color="default" size={size} />,
    name: 'Joomla',
    category: 'cms',
  },
  {
    icon: <SiWordpress color="default" size={size} />,
    name: 'Wordpress',
    category: 'cms',
  },
  {
    icon: <SiJekyll color="default" size={size} />,
    name: 'Jekyll',
    category: 'other',
  },
  {
    icon: <SiDocker color="default" size={size} />,
    name: 'Docker',
    category: 'devops',
  },
  {
    icon: <SiGithubactions color="default" size={size} />,
    name: 'Github Actions',
    category: 'devops',
  },
  {
    icon: <SiJenkins color="default" size={size} />,
    name: 'Jenkins',
    category: 'devops',
  },
  {
    icon: <SiCircleci color="default" size={size} />,
    name: 'Circle CI',
    category: 'devops',
  },
  {
    icon: <SiGit color="default" size={size} />,
    name: 'Git',
    category: 'devops',
  },
  {
    icon: <SiNginx color="default" size={size} />,
    name: 'Nginx',
    category: 'devops',
  },
  {
    icon: <SiLinux color="default" size={size} />,
    name: 'Linux',
    category: 'devops',
  },
  {
    icon: <SiArchlinux color="default" size={size} />,
    name: 'Arch Linux',
    category: 'devops',
  },
  {
    icon: <SiGnubash color="default" size={size} />,
    name: 'Shell Scripting',
    category: 'devops',
  },
  {
    icon: <SiAmazonec2 color="default" size={size} />,
    name: 'AWS EC2',
    category: 'devops',
  },
  {
    icon: <SiAmazons3 color="default" size={size} />,
    name: 'AWS S3',
    category: 'devops',
  },
  {
    icon: <SiAmazonrds color="default" size={size} />,
    name: 'AWS RDS',
    category: 'devops',
  },
  {
    icon: <SiJira color="default" size={size} />,
    name: 'JIRA',
    category: 'other',
  },
  {
    icon: <SiFigma color="default" size={size} />,
    name: 'Figma',
    category: 'other',
  },
];
const SkillTag = ({ skill }: { skill: Skill }) => {
  return (
    <span
      className="flex cursor-pointer items-center rounded-md bg-violet-100 p-1.5 transition-colors duration-300 ease-in-out hover:bg-violet-300"
      title={skill.tooltip ?? skill.name}
    >
      <span className="mr-2">{skill.icon}</span>
      <span className="text-sm font-semibold text-violet-900">
        {skill.name}
      </span>
    </span>
  );
};
export default function Skills() {
  return (
    <section className="rounded-xl bg-white p-6 shadow print:shadow-none">
      <h3 className="mb-6 border-b-2 border-gray-100 pb-2 text-lg font-semibold">
        Skills
      </h3>
      <h4 className="mb-3 font-semibold">Frontend</h4>
      <div className="flex flex-wrap gap-2">
        {skills
          .filter((x) => x.category === 'frontend')
          .map((skill) => {
            return <SkillTag skill={skill} key={skill.name} />;
          })}
      </div>
      <h4 className="mb-3 mt-6 font-semibold">Backend</h4>
      <div className="flex flex-wrap gap-2">
        {skills
          .filter((x) => x.category === 'backend')
          .map((skill) => {
            return <SkillTag skill={skill} key={skill.name} />;
          })}
      </div>
      <h4 className="mb-3 mt-6 font-semibold">CMS</h4>
      <div className="flex flex-wrap gap-2">
        {skills
          .filter((x) => x.category === 'cms')
          .map((skill) => {
            return <SkillTag skill={skill} key={skill.name} />;
          })}
      </div>
      <h4 className="mb-3 mt-6 font-semibold">DevOps</h4>
      <div className="flex flex-wrap gap-2">
        {skills
          .filter((x) => x.category === 'devops')
          .map((skill) => {
            return <SkillTag skill={skill} key={skill.name} />;
          })}
      </div>
      <h4 className="mb-3 mt-6 font-semibold">Other</h4>
      <div className="flex flex-wrap gap-2">
        {skills
          .filter((x) => x.category === 'other')
          .map((skill) => {
            return <SkillTag skill={skill} key={skill.name} />;
          })}
      </div>
    </section>
  );
}
