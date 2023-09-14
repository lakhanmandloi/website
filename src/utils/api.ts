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
          startDate: '2019-09-30',
          endDate: '2022-03-30',
          skills: []
        },
        {
          id: 'clsa-corp',
          title: 'CLSA Corporate Website',
          url: '',
          details: '',
          rolesResponsibilities: '',
          startDate: '2019-09-30',
          endDate: '2022-03-30',
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
          startDate: '2019-09-30',
          endDate: '2022-03-30',
          skills: []
        },
        {
          id: 'tekdi-sunbird',
          title: 'Sunbird',
          url: '',
          details: '',
          rolesResponsibilities: '',
          startDate: '2019-09-30',
          endDate: '2022-03-30',
          skills: []
        },
        {
          id: 'tekdi-sunbird-docs',
          title: 'Sunbird Documentation Portal',
          url: '',
          details: '',
          rolesResponsibilities: '',
          startDate: '2019-09-30',
          endDate: '2022-03-30',
          skills: []
        },
        {
          id: 'tekdi-climathon',
          title: 'Climathon',
          url: '',
          details: '',
          rolesResponsibilities: '',
          startDate: '2019-09-30',
          endDate: '2022-03-30',
          skills: []
        },
        {
          id: 'tekdi-climate-kic-learning',
          title: 'Climate-KIC Learning Portal',
          url: '',
          details: '',
          rolesResponsibilities: '',
          startDate: '2019-09-30',
          endDate: '2022-03-30',
          skills: []
        },
        {
          id: 'tekdi-pip',
          title: 'Climate-KIC Pioneers into Practice',
          url: '',
          details: '',
          rolesResponsibilities: '',
          startDate: '2019-09-30',
          endDate: '2022-03-30',
          skills: []
        },
        {
          id: 'tekdi-tjbase',
          title: 'Tjbase template for Joomla',
          url: '',
          details: '',
          rolesResponsibilities: '',
          startDate: '2019-09-30',
          endDate: '2022-03-30',
          skills: []
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
