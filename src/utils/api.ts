import { cache } from 'react';

export const revalidate = 3600;

export interface Project {
  id: string;
  title: string;
  url: string;
  details: string;
  rolesResponsibilities: string;
  startDate: string;
  endDate?: string;
  skills?: string[];
  assets?: string[];
}
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
}

export const getExperience = cache(async () => {
  const experience: Company[] = [
    {
      id: 'clsa',
      name: 'CLSA Technology & Services LLP',
      logo: '/images/logo-clsa.png',
      url: 'https://www.clsa.com',
      location: 'Pune, India',
      type: 'Full Time',
      startDate: '2019-09-30',
      endDate: undefined,
      roles: [
        {
          id: 'clsa-sse',
          title: 'Senior Software Engineer',
          responsibilities: `
          - Designing, developing, and maintaining the visual and interactive elements of web applications.
          - Integrating GraphQL API to enable both queries and mutations.
          - Ensuring website responsiveness, cross-browser compatibility, security, and performance optimization.
          - Upholding code quality and adhering to coding standards.
          - Thoroughly testing and debugging.
          - Screening and interviewing candidates for frontend development roles.
          - Provide guidance and support to junior team members wherever needed.
          `,
          startDate: '2022-04-01',
          endDate: undefined
        },
        {
          id: 'clsa-se',
          title: 'Software Engineer',
          responsibilities: `
          - Designing, developing, and maintaining the visual and interactive elements of web applications.
          - Integrating GraphQL API to enable both queries and mutations.
          - Ensuring website responsiveness, cross-browser compatibility, security, and performance optimization.
          - Upholding code quality and adhering to coding standards.
          - Thoroughly testing and debugging.
          - Assisting the business team in tracking user engagement on the website and campaigns.
          - Helping the business handle technical aspects related to social media handles.
          `,
          startDate: '2019-09-30',
          endDate: '2022-03-30'
        }
      ],
      projects: [
        {
          id: 'clsa-forums',
          title: 'CITIC CLSA Forums Web App',
          url: '',
          details: '',
          rolesResponsibilities: '',
          startDate: '2020-05-05',
          endDate: undefined,
          skills: []
        },
        {
          id: 'clsa-corp',
          title: 'CLSA Corporate Website',
          url: '',
          details: '',
          rolesResponsibilities: '',
          startDate: '2019-09-30',
          endDate: '2022-09-30',
          skills: []
        }
      ]
    },
    {
      id: 'tekdi',
      name: 'Tekdi Technologies Pvt Ltd',
      logo: '/images/icon-tekdi.jpeg',
      url: 'https://www.tekdi.net',
      location: 'Pune, India',
      type: 'Full Time',
      startDate: '2015-01-21',
      endDate: '2019-09-20',
      roles: [
        {
          id: 'tekdi-ssd',
          title: 'Senior Frontend Developer',
          responsibilities: `
          - Led UI development, fostering innovation through R&D & POCs.
          - Set development standards and created SOPs.
          - Conducted code reviews and mentored the team.
          - Guided teams with tech stack knowledge.
          - Analyzed project needs for optimal solutions.
          - Key client contact for transparent communication.
          - Developed project roadmaps and managed resources efficiently.
          - Provided regular updates, ensuring satisfaction.
          - Screening and interviewing candidates for frontend development roles.
          - Designing, developing, and maintaining the visual and interactive elements of web applications.
          - Ensuring website responsiveness, cross-browser compatibility, security, and performance optimization.
          - Upholding code quality and adhering to coding standards.
          - Thoroughly testing and debugging.
          `,
          startDate: '2017-05-01',
          endDate: '2019-09-20'
        },
        {
          id: 'tekdi-webmaster',
          title: 'Webmaster',
          responsibilities: `
          - Designing, developing, and maintaining the visual and interactive elements of web applications.
          - Ensuring website responsiveness, cross-browser compatibility, and performance optimization.
          - Thoroughly testing and debugging.
          - Analyzed project needs for optimal solutions.
          - Key client contact for transparent communication.
          - Provided regular updates, ensuring satisfaction.
          `,
          startDate: '2015-01-21',
          endDate: '2017-05-01'
        }
      ],
      projects: [
        {
          id: 'tekdi-dikhsa',
          title: 'DIKSHA',
          url: 'https://diksha.gov.in/',
          details: `
          DIKSHA is a popular Indian government learning website and app that millions of people use. The main challenge was around inclusion and diversity of users, as India has more than 38 languages. Other challenges included slow mobile networks in rural areas.
          Challenge solutions:
          - Multilingual UI with a unique and fresh approach to fulfil the requirements. Implementation blog can be found here - https://techjoomla.com/blog/beyond-joomla/a-multilingual-website-in-8-languages-diksha & Implementation can be seen here - https://diksha.gov.in/explore
          - Implemented Design System - https://sunbird-ed.github.io/sunbird-style-guide/dist/#/
          - Performance
          `,
          rolesResponsibilities: `
          `,
          startDate: '2017-08-25',
          endDate: '2019-09-20',
          skills: []
        },
        {
          id: 'tekdi-sunbird',
          title: 'Sunbird',
          url: 'https://github.com/Sunbird-Ed/SunbirdEd-portal',
          details: `Sunbird is an open source learning management platform developed by EkStep Foundation. EkStep Foundation is a not for profit foundation registered in India and co-founded by Nandan Nilekani.`,
          rolesResponsibilities: `
          - UI development, do estimations & planning and help the team whenever required.
          - Do R&D, prepare POC & standard guidelines
          `,
          startDate: '2018-06-10',
          endDate: '2019-09-20',
          skills: ['SASS', 'Bourbon', 'Semantic UI', 'Angular']
        },
        {
          id: 'tekdi-sunbird-docs',
          title: 'Sunbird Documentation Portal',
          url: 'https://sunbird.org/',
          details: ` A multi-version documentation website for Project Sunbird. A unique docs contribution build pipeline is quite interesting & is quite lengthy to write in here.`,
          rolesResponsibilities: `
          - Full stack development - DevOps, UI and Jekyll plugin development
          - Do estimations & planning and help the team whenever required.
          - Do R&D and prepare POC.
          `,
          startDate: '2017-08-15',
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
          title: 'Artificiers Library',
          url: 'https://github.com/lakhanmandloi/artificers',
          details: `A CSS Utlility library.`,
          rolesResponsibilities: '',
          startDate: '2017-05-15',
          endDate: '2019-09-20',
          skills: ['Product Owner', 'Technical Lead', 'SCSS', 'CSS']
        },
        {
          id: 'tekdi-tjbase',
          title: 'Tjbase template for Joomla',
          url: '',
          details: `An ultra lightweight template for Joomla CMS. Focused mainly on Performance optimisation, SEO, automation and Code reusability. Used on a website with traffic of 2 million visits per day.`,
          rolesResponsibilities: '',
          startDate: '2016-04-15',
          endDate: '2019-09-20',
          skills: [
            'Product Owner',
            'Technical Lead',
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
          id: 'tekdi-cp',
          title: 'EIT Climate-KIC : Certified Professionals',
          url: '',
          details: `Certified Professionals is a platform for the EIT Climate-KIC Alumni to showcase their skills and expertise to the world.`,
          rolesResponsibilities: `
          - Designing, developing, and maintaining the visual and interactive elements of web application.
          - Support & analyse the technical issue the client or end-user raised and take appropriate action.`,
          startDate: '2016-06-07',
          endDate: '2017-08-30',
          skills: [
            'Technical Lead',
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
          id: 'tekdi-pip',
          title: 'EIT Climate-KIC : Pioneers into Practice',
          url: 'https://pioneers.climate-kic.org/',
          details: `Pioneers into Practice is a professional mobility programme for climate change professionals. It is a learning journey that takes place in different European countries.`,
          rolesResponsibilities: `
          - Designing, developing, and maintaining the visual and interactive elements of web application.
          - Support & analyse the technical issue the client or end-user raised and take appropriate action.`,
          startDate: '2016-06-07',
          endDate: '2017-08-30',
          skills: [
            'Technical Lead',
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
          rolesResponsibilities: `
          - Understand the project requirement from the client, analyse it and mould it into a technical requirements with the best possible solution.
          - Plan the roadmap, deliveries and resource allocation.
          - Client communication for requirement gathering and progress updates.
          - Designing, developing, and maintaining the visual and interactive elements of web application.
          - Support & analyse the technical issue the client or end-user raised and take appropriate action.`,
          startDate: '2016-06-07',
          endDate: '2017-08-30',
          skills: [
            'Scrum Master',
            'Technical Lead',
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
          details: `EIT Climate-KIC is Europe’s largest public-private innovation partnership focused on climate innovation to mitigate and adapt to climate change.`,
          rolesResponsibilities: `
          - Understand the project requirement from the client, analyse it and mould it into a technical requirements with the best possible solution.
          - Plan the roadmap, deliveries and resource allocation.
          - Client communication for requirement gathering and progress updates.
          - Designing, developing, and maintaining the visual and interactive elements of web application.
          - Support & analyse the technical issue the client or end-user raised and take appropriate action.
          - *Scrum master and technical lead for the project: June 2016 onwards*.`,
          startDate: '2015-04-15',
          endDate: '2017-08-30',
          skills: [
            'Scrum Master',
            'Technical Lead',
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
