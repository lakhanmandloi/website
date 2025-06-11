import {
  //SiAmazonec2,
  //SiAmazonrds,
  //SiAmazons3,
  SiAngular,
  SiApollographql,
  SiArchlinux,
  SiBootstrap,
  SiBun,
  SiCircleci,
  SiCss,
  SiDocker,
  SiElixir,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJekyll,
  SiJenkins,
  SiJira,
  SiJoomla,
  SiJquery,
  SiLinux,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPhoenixframework,
  SiPhp,
  //SiPlaywright,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiSass,
  SiSemanticuireact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress
} from '@icons-pack/react-simple-icons';

const size = 14;
interface Stack {
  name:
    | 'Frontend Development'
    | 'Backend Development'
    | 'CMS Development'
    | 'Static Site Generation'
    | 'DevOps'
    | 'Testing'
    | 'Other'
    | 'Currently Learning';
  skills: Skill[];
  hide?: boolean;
  order?: number;
}
interface Skill {
  icon: any;
  name: string;
  tooltip?: string;
  hide?: boolean;
  order?: number;
}

const stacks: Stack[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        icon: (
          <SiReact
            color="default"
            size={size}
          />
        ),
        name: 'React'
      },
      {
        icon: (
          <SiNextdotjs
            color="default"
            size={size}
          />
        ),
        name: 'Next.js'
      },
      {
        icon: (
          <SiTailwindcss
            color="default"
            size={size}
          />
        ),
        name: 'Tailwind CSS'
      },
      {
        icon: (
          <SiStyledcomponents
            color="default"
            size={size}
          />
        ),
        name: 'Styled Components',
        hide: true
      },
      {
        icon: (
          <SiTypescript
            color="default"
            size={size}
          />
        ),
        name: 'TypeScript'
      },
      {
        icon: (
          <SiJavascript
            color="default"
            size={size}
            className="bg-gray-600"
          />
        ),
        name: 'JavaScript'
      },
      {
        icon: (
          <SiCss
            color="default"
            size={size}
          />
        ),
        name: 'CSS'
      },
      {
        icon: (
          <SiHtml5
            color="default"
            size={size}
          />
        ),
        name: 'HTML'
      },
      {
        icon: (
          <SiGraphql
            color="default"
            size={size}
          />
        ),
        name: 'GraphQL'
      },
      {
        icon: (
          <SiReactquery
            color="default"
            size={size}
          />
        ),
        name: 'Tanstack Query',
        tooltip: 'Tanstack Query (FKA React Query)',
        hide: true
      },
      {
        icon: (
          <SiApollographql
            color="default"
            size={size}
          />
        ),
        name: 'Apollo Client',
        hide: true
      },
      {
        icon: (
          <SiReacthookform
            color="default"
            size={size}
          />
        ),
        name: 'React Hook Form',
        hide: true
      },
      {
        icon: (
          <SiAngular
            color="default"
            size={size}
          />
        ),
        name: 'Angular',
        hide: true
      },
      {
        icon: (
          <SiJquery
            color="default"
            size={size}
          />
        ),
        name: 'jQuery',
        hide: true
      },
      {
        icon: (
          <SiBootstrap
            color="default"
            size={size}
          />
        ),
        name: 'Bootstrap',
        hide: true
      },
      {
        icon: (
          <SiMui
            color="default"
            size={size}
          />
        ),
        name: 'Material UI',
        hide: true
      },
      {
        icon: (
          <SiSemanticuireact
            color="default"
            size={size}
          />
        ),
        name: 'Semantic UI',
        hide: true
      },
      {
        icon: (
          <SiSass
            color="default"
            size={size}
          />
        ),
        name: 'SASS',
        hide: true
      }
    ]
  },
  {
    name: 'Backend Development',
    hide: true,
    skills: [
      {
        icon: (
          <SiPhp
            color="default"
            size={size}
          />
        ),
        name: 'PHP'
      },
      {
        icon: (
          <SiPostgresql
            color="default"
            size={size}
          />
        ),
        name: 'Postgresql'
      },
      {
        icon: (
          <SiMysql
            color="default"
            size={size}
          />
        ),
        name: 'MySQL'
      }
    ]
  },
  {
    name: 'CMS Development',
    skills: [
      {
        icon: (
          <SiJoomla
            color="default"
            size={size}
          />
        ),
        name: 'Joomla'
      },
      {
        icon: (
          <SiWordpress
            color="default"
            size={size}
          />
        ),
        name: 'Wordpress'
      }
    ]
  },
  {
    name: 'Static Site Generation',
    hide: true,
    skills: [
      {
        icon: (
          <SiJekyll
            color="default"
            size={size}
          />
        ),
        name: 'Jekyll'
      }
    ]
  },
  {
    name: 'Testing',
    hide: true,
    skills: [
      {
        /*icon: (
          <SiPlaywright
            color="default"
            size={size}
          />
        ),*/
        icon: '',
        name: 'Playwright'
      }
    ]
  },
  {
    name: 'DevOps',
    skills: [
      {
        icon: (
          <SiDocker
            color="default"
            size={size}
          />
        ),
        name: 'Docker'
      },
      {
        icon: (
          <SiGit
            color="default"
            size={size}
          />
        ),
        name: 'Git'
      },
      {
        icon: (
          <SiNginx
            color="default"
            size={size}
          />
        ),
        name: 'Nginx'
      },
      {
        icon: (
          <SiGithubactions
            color="default"
            size={size}
          />
        ),
        name: 'Github Actions'
      },
      {
        icon: (
          <SiJenkins
            color="default"
            size={size}
          />
        ),
        name: 'Jenkins',
        hide: true
      },
      {
        icon: (
          <SiCircleci
            color="default"
            size={size}
          />
        ),
        name: 'Circle CI',
        hide: true
      },
      {
        icon: (
          <SiVercel
            color="default"
            size={size}
          />
        ),
        name: 'Vercel',
        hide: true
      },
      {
        /*icon: (
          <SiAmazonec2
            color="default"
            size={size}
          />
        ),*/
        icon: '',
        name: 'AWS EC2',
        hide: true
      },
      {
        /*icon: (
          <SiAmazons3
            color="default"
            size={size}
          />
        ),*/
        icon: '',
        name: 'AWS S3',
        hide: true
      },
      {
        /*icon: (
          <SiAmazonrds
            color="default"
            size={size}
          />
        ),*/
        icon: '',
        name: 'AWS RDS',
        hide: true
      },
      {
        icon: (
          <SiGnubash
            color="default"
            size={size}
          />
        ),
        name: 'Shell Scripting',
        hide: true
      },
      {
        icon: (
          <SiLinux
            color="default"
            size={size}
          />
        ),
        name: 'Linux',
        hide: true
      },
      {
        icon: (
          <SiArchlinux
            color="default"
            size={size}
          />
        ),
        name: 'Arch Linux',
        hide: true
      }
    ]
  },
  {
    name: 'Other',
    hide: true,
    skills: [
      {
        icon: (
          <SiJira
            color="default"
            size={size}
          />
        ),
        name: 'JIRA'
      },
      {
        icon: (
          <SiFigma
            color="default"
            size={size}
          />
        ),
        name: 'Figma'
      }
    ]
  },
  {
    name: 'Currently Learning',
    hide: true,
    skills: [
      {
        icon: (
          <SiBun
            color="default"
            size={size}
          />
        ),
        name: 'Bun'
      },
      {
        icon: (
          <SiPrisma
            color="default"
            size={size}
          />
        ),
        name: 'Prisma'
      },
      {
        icon: (
          <SiElixir
            color="default"
            size={size}
          />
        ),
        name: 'Elixir'
      },
      {
        icon: (
          <SiPhoenixframework
            color="default"
            size={size}
          />
        ),
        name: 'Phoenix Framework'
      }
    ]
  }
];

const SkillTag = ({ skill }: { skill: Skill }) => {
  return (
    <span
      className="flex cursor-pointer items-center rounded-full bg-violet-100 px-2 py-1 text-xs transition-colors duration-300 ease-in-out hover:bg-violet-200 md:text-sm print:text-xs"
      title={skill.tooltip ?? skill.name}
    >
      <span className="mr-2">{skill.icon}</span>
      <span className="text-gray-600">{skill.name}</span>
    </span>
  );
};
export default function Skills() {
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-1 text-lg font-semibold print:mb-2 print:border-b print:text-sm">
        Skills
      </h3>
      <div className="skillslist">
        {stacks
          .filter((x) => x?.hide !== true)
          .map((stack, i) => {
            return (
              <div key={stack.name}>
                <h4
                  className="mb-2 text-sm print:mb-1 print:text-xs"
                  key={stack.name}
                >
                  {stack.name}
                </h4>
                <div className="mb-4 flex flex-wrap gap-2.5 print:mb-2">
                  {stack.skills
                    .filter((x) => x?.hide !== true)
                    .map((skill) => {
                      return (
                        <SkillTag
                          skill={skill}
                          key={skill.name}
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
