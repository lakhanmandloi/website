import { cache } from 'react';

export const revalidate = 3600;

export interface Company {
  id: string;
  name: string;
  logo: string;
  url: string;
  location: string;
  type: 'Full Time' | 'Part Time';
  startDate: string;
  endDate?: string;
  roles: {
    id: string;
    title: string;
    responsibilities: string;
    startDate: string;
    endDate?: string;
  }[];
  projects: Project[];
  hide?: boolean;
}
export interface Project {
  id: string;
  title: string;
  url: string;
  github?: string;
  details: string;
  roles: string[];
  responsibilities?: string;
  keyAchievements?: string;
  startDate: string;
  endDate?: string;
  skills: string[];
  companyId?: string;
  companyName?: string;
  hide?: boolean;
}

export const getExperience = cache(async () => {
  const experience: Company[] = [
    {
      id: 'clsa',
      name: 'CLSA Technology & Services LLP',
      logo: '/images/logo-clsa.png',
      url: 'https://www.clsa.com',
      location: 'Pune, Maharashtra, India',
      type: 'Full Time',
      startDate: '2019-09-30',
      endDate: undefined,
      roles: [
        {
          id: 'clsa-sse',
          title: 'Senior Software Engineer',
          responsibilities: `
          - Design and development of visual elements of web app, GraphQL API integration, and thoroughly testing and debugging the system.
          - Ensure website responsiveness, cross-browser compatibility, security, and performance optimization, and uphold the code quality while adhering to the coding standards.
          - Provide guidance and support to junior team members wherever needed.
          - Screening and interviewing candidates for frontend development roles.
          `,
          startDate: '2022-04-01',
          endDate: undefined
        },
        {
          id: 'clsa-se',
          title: 'Software Engineer',
          responsibilities: `
          - Design and development of visual elements of web app, GraphQL API integration, and thoroughly testing and debugging the system.
          - Ensure website responsiveness, cross-browser compatibility, security, and performance optimization, and uphold the code quality while adhering to the coding standards.
          - Assist the business team in tracking user engagement on the website and campaigns and help them with technical aspects related to social media handles.
          `,
          startDate: '2019-09-30',
          endDate: '2022-03-30'
        }
      ],
      projects: [
        {
          id: 'clsa-forums',
          title: 'CITIC CLSA Forums Web App',
          url: 'https://forums.clsa.com/',
          details: `
          CLSA Forums: Premier Asia events in Hong Kong, Tokyo, Singapore, and Mumbai. Connects global leaders, industry specialists, and investors to explore market trends and engage with top executives from leading Asian and US companies. The Forum portal is central hub for investor and corporate registration, event details, and CLSA forum management
          `,
          roles: ['Frontend Developer'],
          responsibilities: `
          - Design and development of visual elements of web app, GraphQL API integration, and thoroughly testing and debugging the system.
          - Ensure website responsiveness, cross-browser compatibility, security, and performance optimization, and uphold the code quality while adhering to the coding standards.
          `,
          startDate: '2020-05-05',
          endDate: undefined,
          skills: ['React', 'GraphQL', 'Docker', 'Git', 'Github Actions']
        },
        {
          id: 'clsa-corp',
          title: 'CLSA Corporate Website',
          url: 'https://www.clsa.com/',
          details: 'Corporate website of CLSA.',
          roles: ['Frontend Developer'],
          responsibilities: `
          - Administer the website, with a focus on meeting both business needs and security standards.
          - Assist the business team in tracking user engagement on the website and campaigns and help them with technical aspects related to social media handles.`,
          startDate: '2019-09-30',
          endDate: '2022-09-30',
          skills: [
            'WordPress',
            'HTML',
            'CSS',
            'JavaScript',
            'jQuery',
            'Docker',
            'Git'
          ]
        }
      ]
    },
    {
      id: 'tekdi',
      name: 'Tekdi Technologies Pvt Ltd',
      logo: '/images/icon-tekdi.jpeg',
      url: 'https://www.tekdi.net',
      location: 'Pune, Maharashtra, India',
      type: 'Full Time',
      startDate: '2015-01-21',
      endDate: '2019-09-20',
      roles: [
        {
          id: 'tekdi-ssd',
          title: 'Senior Frontend Developer',
          responsibilities: `
          - Led a UI development team both within the company and across multiple companies, promoting innovation through R&D and proof-of-concept (POC) projects. Established development standards, crafted standard operating procedures (SOPs), conducted thorough code reviews, and provided mentorship to the team, while also offering guidance on expanding tech stack knowledge.
          - As the primary client contact, I assessed project requirements, devised effective solutions, created project roadmaps, optimized resource allocation, and maintained transparent communication with regular updates to ensure client satisfaction.
          - Design, develop, and rigorously test websites while ensuring responsiveness, cross-browser compatibility, security, performance optimization, and code quality in adherence to coding standards.
          - Screening and interviewing candidates for frontend development roles.
          `,
          startDate: '2017-05-01',
          endDate: '2019-09-20'
        },
        {
          id: 'tekdi-webmaster',
          title: 'Webmaster',
          responsibilities: `
          - Design, develop, and rigorously test websites while ensuring responsiveness, cross-browser compatibility, security, performance optimization, and code quality in adherence to coding standards.
          - In numerous projects, I served as the main point of contact for clients, where I evaluated project requirements, formulated efficient solutions, developed project roadmaps, and upheld transparent communication by providing regular updates to ensure client contentment.
          `,
          startDate: '2015-01-21',
          endDate: '2017-05-01'
        }
      ],
      projects: [
        {
          id: 'tekdi-sunbird',
          title: 'Sunbird',
          url: 'https://diksha.gov.in/explore',
          github: 'https://github.com/Sunbird-Ed/SunbirdEd-portal',
          details: `Sunbird is an open source learning management platform developed by EkStep Foundation. EkStep Foundation is a not for profit foundation registered in India and co-founded by Nandan Nilekani.`,
          roles: ['Frontend Developer', 'UI Technical Lead'],
          responsibilities: `
          - Led UI development team comprised of individuals from different companies, promoting innovation through R&D and proof-of-concept (POC) projects. Established development standards, crafted standard operating procedures (SOPs), conducted thorough code reviews, and provided mentorship to the team, while also offering guidance on expanding tech stack knowledge.
          - Design, develop, and rigorously test websites while ensuring responsiveness, cross-browser compatibility, security, performance optimization, and code quality in adherence to coding standards.
          `,
          keyAchievements: `
          - Designed a unique multilingual UI, fulfilling project specific requirements. Read about the implementation blog at <a href="https://techjoomla.com/blog/beyond-joomla/a-multilingual-website-in-8-languages-diksha" target="_blank" >https://techjoomla.com/blog/beyond-joomla/a-multilingual-website-in-8-languages-diksha</a>.
          - Implemented Design System available at <a href="https://sunbird-ed.github.io/sunbird-style-guide/dist/#/" target="_blank">https://sunbird-ed.github.io/sunbird-style-guide/dist/#/</a>.
          `,
          startDate: '2017-10-05',
          endDate: '2019-09-20',
          skills: ['Angular', 'Semantic UI', 'SASS', 'Bourbon', 'Gulp', 'Git']
        },
        {
          id: 'tekdi-dikhsa',
          title: 'DIKSHA',
          url: 'https://diksha.gov.in/',
          details: `
          DIKSHA: Indian government initiative, digital platform for teachers and students, offers resources like textbooks, courses, and interactive content to improve education accessibility and quality through web and mobile apps. DIKSHA is available in 18 languages and has over 35 million users. DIKSHA is built on top of Sunbird, an open source learning management platform developed by EkStep Foundation.
          `,
          roles: ['Frontend Developer'],
          responsibilities: `
          - Design, develop, and rigorously test websites while ensuring responsiveness, cross-browser compatibility, security, performance optimization, and code quality in adherence to coding standards.
          `,
          startDate: '2017-09-01',
          endDate: '2019-09-20',
          skills: [
            'Jekyll',
            'Docker',
            'CircleCI',
            'Nginx',
            'Shell scripting',
            'ReDoc'
          ]
        },
        {
          id: 'tekdi-sunbird-docs',
          title: 'Sunbird Documentation Portal',
          url: 'https://sunbird.org/',
          github: 'https://github.com/project-sunbird/sunbird.org-docs',
          details: `A multi-version documentation website for open source learning management platform Sunbird.`,
          roles: ['Frontend Developer', 'Scrum Master'],
          responsibilities: `
          - Full stack development - DevOps, Frontend and Jekyll plugin development
          - Do estimations, planning and help the team whenever required.
          - Do R&D and prepare POC.
          `,
          keyAchievements: `
          - Established a novel and efficient documentation contribution build pipeline to promote open-source contributions.`,
          startDate: '2017-05-15',
          endDate: '2019-09-20',
          skills: [
            'Jekyll',
            'Docker',
            'CircleCI',
            'Nginx',
            'Shell scripting',
            'ReDoc'
          ]
        },
        {
          id: 'tekdi-artificiers',
          title: 'Artificiers CSS Library',
          url: 'https://github.com/lakhanmandloi/artificers',
          details: `It is a utility-first CSS library that followed a similar approach to Tailwind CSS, built when Tailwind CSS didn't existed.`,
          roles: ['Frontend Developer', 'Technical Lead'],
          keyAchievements: `
          - Recognizing its capabilities, it gained widespread adoption at the company level and became a staple in numerous products & projects.
          - It also played a significant role in facilitating the smooth migration of Joomla components from Bootstrap 3 to Bootstrap 4.`,
          startDate: '2017-05-15',
          endDate: '2019-09-20',
          skills: ['SCSS', 'CSS', 'Gulp']
        },
        {
          id: 'tekdi-tjbase',
          title: 'Tjbase Joomla Template',
          url: '',
          details: `A no-bloat, ultra-lightweight Joomla CMS template with a minimalistic design, prioritizing performance optimization, SEO enhancements, and code reusability.`,
          roles: ['Frontend Developer', 'Technical Lead'],
          keyAchievements: `
          - It is used in UIDAI's Aadhaar website, a high-traffic platform.
          - Its remarkable capabilities led to widespread adoption within the company, making it an indispensable component in numerous projects.`,
          startDate: '2016-04-15',
          endDate: '2019-09-20',
          skills: [
            'Joomla',
            'PHP',
            'HTML',
            'SCSS',
            'JavaScript',
            'jQuery',
            'Gulp'
          ]
        },
        {
          id: 'tekdi-pip',
          title: 'EIT Climate-KIC : Pioneers into Practice',
          url: 'https://pioneers.climate-kic.org/',
          details: `Pioneers into Practice is a professional mobility programme for climate change professionals. It is a learning journey that takes place in different European countries.`,
          roles: ['Frontend Developer', 'UI Technical Lead', 'Scrum Master'],
          responsibilities: `
          - Design, develop, and rigorously test websites while ensuring responsiveness, cross-browser compatibility, security, performance optimization, and code quality in adherence to coding standards.`,
          startDate: '2016-06-07',
          endDate: '2017-08-30',
          skills: [
            'Joomla',
            'PHP',
            'HTML',
            'SCSS',
            'CSS',
            'JavaScript',
            'jQuery',
            'Git',
            'Bootstrap'
          ]
        },
        {
          id: 'tekdi-climathon',
          title: 'EIT Climate-KIC : Climathon',
          url: 'https://climathon.climate-kic.org/',
          details: `Climathon is an annual global event that brings together the challenges of the world's cities with people who have the passion and ability to solve them.`,
          roles: ['Frontend Developer', 'UI Technical Lead', 'Scrum Master'],
          responsibilities: `
          - As the primary client contact, I assessed project requirements, devised effective solutions, created project roadmaps, optimized resource allocation, and maintained transparent communication with regular updates to ensure client satisfaction.
          - Design, develop, and rigorously test website while ensuring responsiveness, cross-browser compatibility, security, performance optimization, and code quality in adherence to coding standards.
          `,
          startDate: '2016-06-07',
          endDate: '2017-08-30',
          skills: [
            'Joomla',
            'PHP',
            'HTML',
            'SCSS',
            'CSS',
            'JavaScript',
            'jQuery',
            'Git',
            'Bootstrap'
          ]
        },
        {
          id: 'tekdi-climate-kic-learning',
          title: 'EIT Climate-KIC : Learning Portal',
          url: 'https://learning.climate-kic.org/',
          details: `EIT Climate-KIC is a European knowledge and innovation community focused on addressing climate change challenges. It aims to drive innovation, support startups, and promote sustainable solutions to mitigate and adapt to climate change. Learning Portal is a platform for EIT Climate-KIC's learning and development programmes.
          `,
          roles: ['Frontend Developer', 'UI Technical Lead', 'Scrum Master'],
          responsibilities: `
          - Served as Scrum Master and Technical Lead Dec 2016 till Aug 2017, I've been the primary client contact, responsible for assessing project requirements, devising effective solutions, creating project roadmaps, optimizing resource allocation, and maintaining transparent communication with regular updates to ensure client satisfaction.
          - Design, develop, and rigorously test website while ensuring responsiveness, cross-browser compatibility, security, performance optimization, and code quality in adherence to coding standards.
          `,
          startDate: '2015-04-15',
          endDate: '2017-08-30',
          skills: [
            'Joomla',
            'PHP',
            'HTML',
            'SCSS',
            'CSS',
            'JavaScript',
            'jQuery',
            'Git',
            'Bootstrap'
          ]
        }
      ]
    }
  ];
  return experience;
});
export interface Education {
  id: number;
  name: string;
  logo: string;
  location: string;
  school: string;
  affiliation: string;
  startDate: string;
  endDate?: string;
}
export const getEducation = cache(async () => {
  const education: Education[] = [
    {
      id: 2,
      name: 'BE - Electronics & Communication',
      logo: '/images/icon-rgpv.jpeg',
      location: 'Indore, Madhya Pradesh, India',
      school: 'Malwa Institute of Technology',
      affiliation: 'RGPV, Bhopal',
      startDate: '2007-09-10',
      endDate: '2011-12-30'
    },
    {
      id: 1,
      name: 'Higher Secondary School Certificate (HSC)',
      logo: '/images/icon-cbse.jpeg',
      location: 'Nimrani, Madhya Pradesh, India',
      school: 'Vivekanand Vidya Vihar, Maral Sarovar',
      affiliation: 'CBSE, Delhi',
      startDate: '1993-07-01',
      endDate: '2004-03-30'
    }
  ];
  return education;
});
