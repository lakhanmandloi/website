import {
  SiAngular,
  SiApollographql,
  SiBootstrap,
  SiBun,
  SiCircleci,
  SiClaude,
  SiClickhouse,
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
  SiJest,
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
  SiOllama,
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
// simple-icons dropped the OpenAI, AWS, Azure and LinkedIn logos; react-icons still ships them.
import { FaAws, FaLinkedin } from 'react-icons/fa';
import { RiOpenaiFill } from 'react-icons/ri';
import { VscAzure } from 'react-icons/vsc';

const size = 14;
interface Stack {
  name:
    | 'AI-Assisted Engineering'
    | 'AI Engineering'
    | 'Security'
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
    order: 1,
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
        name: 'Vibe Coding'
      }
    ]
  },
  {
    name: 'AI Engineering',
    order: 0,
    skills: [
      {
        icon: '',
        name: 'RAG',
        tooltip: 'Retrieval-augmented generation'
      },
      {
        icon: '',
        name: 'LLM Evals'
      },
      {
        icon: '',
        name: 'AI Agents'
      },
      {
        icon: '',
        name: 'Prompt Engineering'
      },
      {
        icon: (
          <SiOllama
            color="default"
            size={size}
          />
        ),
        name: 'Ollama'
      }
    ]
  },
  {
    name: 'Frontend Development',
    order: 2,
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
        name: 'SCSS',
        tooltip: 'SCSS / Sass',
        hide: true
      }
    ]
  },
  {
    name: 'Backend Development',
    order: 3,
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
        name: 'PHP',
        hide: true
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
          <SiClickhouse
            color="default"
            size={size}
          />
        ),
        name: 'ClickHouse'
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
    order: 9,
    hide: true,
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
    order: 10,
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
    order: 6,
    skills: [
      {
        icon: '',
        name: 'Playwright'
      },
      {
        icon: (
          <SiJest
            color="default"
            size={size}
          />
        ),
        name: 'Jest'
      }
    ]
  },
  {
    name: 'Security',
    order: 5,
    skills: [
      {
        icon: '',
        name: 'Microsoft Sentinel',
        tooltip: 'Microsoft Sentinel (SIEM)'
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
      { name: 'Full-Stack Development' },
      { name: 'Front-End Development', hide: true },
      { name: 'Software Development', hide: true },
      { name: 'Web Development', hide: true },
      { name: 'Web Applications', hide: true },
      { name: 'Software as a Service (SaaS)' },
      { name: 'User Experience (UX)' },
      { name: 'User Interface Design' },
      { name: 'Responsive Web Design', hide: true },
      { name: 'Technical Leadership' },
      { name: 'Agile Methodologies' },
      { name: 'Scrum Master' },
      { name: 'Requirements Gathering' }
    ].map((skill) => ({ icon: '', ...skill }))
  },
  {
    name: 'DevOps & Cloud',
    order: 4,
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
        name: 'Kubernetes'
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
        icon: <VscAzure size={size} />,
        name: 'Microsoft Azure'
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
        name: 'CircleCI',
        hide: true
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

// Display order within each group: most in-demand first. Unlisted skills keep
// their position after these.
const SKILL_PRIORITY = [
  // AI engineering
  'AI Agents',
  'RAG',
  'LLM Evals',
  'Ollama',
  'Prompt Engineering',
  // AI-assisted engineering
  'Claude Code',
  'Claude',
  'GitHub Copilot',
  'ChatGPT',
  'Vibe Coding',
  // Frontend
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'GraphQL',
  'JavaScript',
  'HTML',
  'CSS',
  // Backend
  'Node.js',
  'Bun',
  'PostgreSQL',
  'ClickHouse',
  'Prisma',
  'GraphQL Yoga',
  'Elysia',
  // DevOps and cloud
  'Kubernetes',
  'Docker',
  'Terraform',
  'AWS',
  'Microsoft Azure',
  'GitHub Actions',
  'Vercel',
  'Amazon EC2',
  'Amazon S3',
  'Amazon RDS',
  'Linux',
  'Nginx',
  'Shell Scripting',
  'Git',
  'DNS Management',
  // Testing
  'Playwright',
  'Jest',
  // Analytics and marketing
  'Google Analytics',
  'Metabase',
  'Google Tag Manager',
  'LinkedIn Marketing',
  // Practices
  'Full-Stack Development',
  'Technical Leadership',
  'Software as a Service (SaaS)',
  'User Experience (UX)',
  'User Interface Design',
  'Agile Methodologies',
  'Scrum Master',
  'Requirements Gathering'
];
const priority = (name: string) => {
  const index = SKILL_PRIORITY.indexOf(name);
  return index === -1 ? SKILL_PRIORITY.length : index;
};

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
      <h2 className="mb-4 border-b-2 border-gray-200 pb-1 text-lg font-semibold print:mb-2 print:border-b print:text-sm">
        Skills
      </h2>
      <div className="skillslist">
        {stacks
          .filter((x) => x?.hide !== true)
          .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
          .map((stack) => {
            return (
              <div key={stack.name}>
                <h3
                  className="mb-2 text-sm print:mb-1 print:text-xs"
                  key={stack.name}
                >
                  {stack.name}
                </h3>
                <div className="mb-4 flex flex-wrap gap-2.5 print:mb-2">
                  {stack.skills
                    .filter((x) => x?.hide !== true)
                    .toSorted((a, b) => priority(a.name) - priority(b.name))
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
