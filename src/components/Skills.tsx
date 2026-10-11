import {
  SiAngular,
  SiApollographql,
  SiBootstrap,
  SiBun,
  SiCircleci,
  SiClaude,
  SiCloudflare,
  SiCss,
  SiDocker,
  SiElixir,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGithubcopilot,
  SiGnubash,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJekyll,
  SiJenkins,
  SiJira,
  SiJoomla,
  SiJquery,
  SiKubernetes,
  SiLinux,
  SiMetabase,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhoenixframework,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiSass,
  SiSemanticuireact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiWordpress
} from '@icons-pack/react-simple-icons';
// simple-icons dropped the OpenAI, AWS and LinkedIn logos; react-icons still ships them.
import { FaAws, FaLinkedin } from 'react-icons/fa';
import { RiOpenaiFill } from 'react-icons/ri';

const size = 14;
interface Stack {
  name:
    | 'AI-Assisted Engineering'
    | 'Frontend Development'
    | 'Backend Development'
    | 'CMS Development'
    | 'Static Site Generation'
    | 'DevOps & Cloud'
    | 'Testing'
    | 'Analytics & Marketing'
    | 'Practices'
    | 'Other'
    | 'Currently Learning';
  skills: Skill[];
  hide?: boolean;
  order?: number;
}
interface Skill {
  icon: React.ReactNode;
  name: string;
  tooltip?: string;
  hide?: boolean;
  order?: number;
}

const stacks: Stack[] = [
  {
    name: 'AI-Assisted Engineering',
    order: 0,
    skills: [
      {
        icon: (
          <SiClaude
            color="default"
            size={size}
          />
        ),
        name: 'Claude'
      },
      {
        icon: (
          <SiClaude
            color="default"
            size={size}
          />
        ),
        name: 'Claude Code'
      },
      {
        icon: <RiOpenaiFill size={size} />,
        name: 'ChatGPT',
        tooltip: 'ChatGPT / OpenAI'
      },
      {
        icon: (
          <SiGithubcopilot
            color="default"
            size={size}
          />
        ),
        name: 'GitHub Copilot'
      },
      {
        icon: '',
        name: 'AI Agents'
      }
    ]
  },
  {
    name: 'Frontend Development',
    order: 1,
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
        name: 'Angular'
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
        name: 'Bootstrap'
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
        name: 'SCSS',
        tooltip: 'SCSS / Sass'
      }
    ]
  },
  {
    name: 'Backend Development',
    order: 2,
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
          <SiNodedotjs
            color="default"
            size={size}
          />
        ),
        name: 'Node.js'
      },
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
        name: 'PostgreSQL'
      },
      {
        icon: (
          <SiPrisma
            color="default"
            size={size}
          />
        ),
        name: 'Prisma',
        tooltip: 'Prisma ORM'
      },
      {
        icon: '',
        name: 'Elysia'
      },
      {
        icon: (
          <SiGraphql
            color="default"
            size={size}
          />
        ),
        name: 'GraphQL Yoga'
      }
    ]
  },
  {
    name: 'CMS Development',
    order: 4,
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
        name: 'WordPress'
      }
    ]
  },
  {
    name: 'Static Site Generation',
    order: 5,
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
    order: 6,
    skills: [
      {
        icon: '',
        name: 'Playwright'
      }
    ]
  },
  {
    name: 'Analytics & Marketing',
    order: 7,
    skills: [
      {
        icon: (
          <SiGoogleanalytics
            color="default"
            size={size}
          />
        ),
        name: 'Google Analytics'
      },
      {
        icon: (
          <SiGoogletagmanager
            color="default"
            size={size}
          />
        ),
        name: 'Google Tag Manager'
      },
      {
        icon: (
          <SiMetabase
            color="default"
            size={size}
          />
        ),
        name: 'Metabase'
      },
      {
        icon: <FaLinkedin size={size} />,
        name: 'LinkedIn Marketing'
      }
    ]
  },
  {
    name: 'Practices',
    order: 8,
    skills: [
      'Full-Stack Development',
      'Front-End Development',
      'Software Development',
      'Web Development',
      'Web Applications',
      'Software as a Service (SaaS)',
      'User Experience (UX)',
      'User Interface Design',
      'Responsive Web Design',
      'Technical Leadership',
      'Agile Methodologies',
      'Scrum Master',
      'Requirements Gathering'
    ].map((name) => ({ icon: '', name }))
  },
  {
    name: 'DevOps & Cloud',
    order: 3,
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
          <SiKubernetes
            color="default"
            size={size}
          />
        ),
        name: 'Kubernetes',
        hide: true
      },
      {
        icon: (
          <SiTerraform
            color="default"
            size={size}
          />
        ),
        name: 'Terraform'
      },
      {
        icon: <FaAws size={size} />,
        name: 'AWS',
        tooltip: 'Amazon Web Services'
      },
      {
        icon: <FaAws size={size} />,
        name: 'Amazon EC2'
      },
      {
        icon: <FaAws size={size} />,
        name: 'Amazon S3'
      },
      {
        icon: <FaAws size={size} />,
        name: 'Amazon RDS'
      },
      {
        icon: '',
        name: 'DNS Management'
      },
      {
        icon: (
          <SiCloudflare
            color="default"
            size={size}
          />
        ),
        name: 'Cloudflare',
        hide: true
      },
      {
        icon: (
          <SiGithubactions
            color="default"
            size={size}
          />
        ),
        name: 'GitHub Actions'
      },
      {
        icon: (
          <SiJenkins
            color="default"
            size={size}
          />
        ),
        name: 'Jenkins'
      },
      {
        icon: (
          <SiCircleci
            color="default"
            size={size}
          />
        ),
        name: 'CircleCI'
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
          <SiGnubash
            color="default"
            size={size}
          />
        ),
        name: 'Shell Scripting'
      },
      {
        icon: (
          <SiPython
            color="default"
            size={size}
          />
        ),
        name: 'Python',
        hide: true
      },
      {
        icon: (
          <SiLinux
            color="default"
            size={size}
          />
        ),
        name: 'Linux'
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
          <SiVercel
            color="default"
            size={size}
          />
        ),
        name: 'Vercel'
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
      {skill.icon && <span className="mr-2">{skill.icon}</span>}
      <span className="text-gray-600">{skill.name}</span>
    </span>
  );
};
export default function Skills() {
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-200 pb-1 text-lg font-semibold print:mb-2 print:border-b print:text-sm">
        Skills
      </h3>
      <div className="skillslist">
        {stacks
          .filter((x) => x?.hide !== true)
          .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
          .map((stack) => {
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
