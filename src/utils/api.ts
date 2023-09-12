import { cache } from 'react';

export const revalidate = 3600;

export interface Project {
  id: number;
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
  id: number;
  name: string;
  logo: string;
  url: string;
  location: string;
  type: 'Full Time' | 'Part Time';
  startDate: string;
  endDate?: string;
  roles: {
    id: number;
    title: string;
    responsibilities: string;
    startDate: string;
    endDate?: string;
    skills: string[];
  }[];
  projects: Project[];
}

export const getExperience = cache(async () => {
  const experience: Company[] = [
    {
      id: 2,
      name: 'CLSA Technology & Services LLP',
      logo: '/images/logo-clsa.png',
      url: 'https://www.clsa.com',
      location: 'Pune, India',
      type: 'Full Time',
      startDate: '2019-09-30',
      endDate: undefined,
      roles: [
        {
          id: 2,
          title: 'Senior Software Engineer',
          responsibilities: `
          - Lead front-end development.
          - Mentor junior developers.
          - Ensure code quality and standards.
          - Optimize website performance.
          - Stay updated on front-end technologies.
          - Solve complex technical challenges.
          `,
          startDate: '2022-04-01',
          endDate: undefined,
          skills: []
        },
        {
          id: 1,
          title: 'Software Engineer',
          responsibilities: `
          - Lead front-end development.
          - Mentor junior developers.
          - Ensure code quality and standards.
          - Optimize website performance.
          - Stay updated on front-end technologies.
          - Solve complex technical challenges.
          `,
          startDate: '2019-09-30',
          endDate: '2022-03-30',
          skills: []
        }
      ],
      projects: [
        {
          id: 2,
          title: 'CITIC CLSA Forums Web App',
          url: '',
          details: '',
          rolesResponsibilities: '',
          startDate: '2019-09-30',
          endDate: '2022-03-30',
          skills: []
        },
        {
          id: 1,
          title: 'CITIC CLSA Corporate Website',
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
      id: 1,
      name: 'Tekdi Technologies Pvt Ltd',
      logo: '/images/icon-tekdi.jpeg',
      url: 'https://www.tekdi.net',
      location: 'Pune, India',
      type: 'Full Time',
      startDate: '2015-01-21',
      endDate: '2019-09-20',
      roles: [
        {
          id: 2,
          title: 'Senior Software Developer',
          responsibilities: `
          - **UI Leadership & Innovation:**
            - Led UI development, fostering innovation through R&D.
            - Created POCs and set development standards.
            - Conducted code reviews and mentored team.

          - **Technical Solutions Expertise:**
            - Analyzed project needs for optimal solutions.
            - Guided teams with tech stack knowledge.

          - **Client Engagement:**
            - Key client contact for transparent communication.
            - Provided regular updates, ensuring satisfaction.

          - **Strategic Planning & Resources:**
            - Developed project roadmaps and managed resources efficiently.
          `,
          startDate: '2017-05-01',
          endDate: '2019-09-20',
          skills: []
        },
        {
          id: 1,
          title: 'Webmaster',
          responsibilities: `
          - Lead front-end development.
          - Mentor junior developers.
          - Ensure code quality and standards.
          - Optimize website performance.
          - Stay updated on front-end technologies.
          - Solve complex technical challenges.
          `,
          startDate: '2015-01-21',
          endDate: '2017-05-01',
          skills: []
        }
      ],
      projects: [
        {
          id: 2,
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
          - **Leadership in UI Development and Innovation:**
            - Spearheaded UI development efforts, driving innovation through research and development (R&D)
            - Successfully created Proof of Concepts (POCs) and established standard development guidelines for enhanced productivity and quality assurance.
            - Conducted regular code reviews to maintain codebase integrity and mentored team members to foster growth and cohesion.
          - **Technical Solution Expertise:**
            - Proficiently analyzed project requirements to formulate optimal technical solutions, ensuring alignment with client objectives and project goals.
            - Leveraged in-depth understanding of technology stacks to guide project teams toward efficient development processes.
          - **Effective Client Engagement**
            - Acted as a primary point of contact with clients for requirement gathering, fostering transparent communication channels.
            - Provided regular progress updates to clients, ensuring their expectations were met and enhancing overall project satisfaction.
          - **Strategic Planning and Resource Management:**
            - Developed comprehensive project roadmaps, meticulously planning project milestones and deliveries
            - Skillfully allocated resources to optimize team performance, aligning assignments with individual strengths and project demands.
          `,
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
