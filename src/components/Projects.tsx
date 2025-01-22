import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { Project, getExperience } from '@/utils/api';

import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { duration } from '@/utils/date';

export default async function Projects() {
  const experiences = await getExperience();
  const projects = experiences?.reduce((list: Project[], company) => {
    return [
      ...list,
      ...company.projects.map((project) => ({
        ...project,
        companyId: company.id,
        companyName: company.name
      }))
    ];
  }, []);
  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
  });
  const showDetails = true;
  const showResponsibilities = true;
  const showKeyAchievements = true;
  const showSkills = true;
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-1 text-lg font-semibold print:mb-2 print:border-b print:text-sm">
        Projects
      </h3>
      <div className="projectslist">
        {sortedProjects.map((project) => {
          const roles =
            project.roles?.length > 0 ? project.roles.join(', ') : '';
          return (
            <div
              className="mb-4 flex border-b border-gray-200 pb-4 last:mb-0 last:border-b-0 print:mb-2 print:border-b-0 print:pb-2 md:mt-6 md:pb-6"
              key={project.id}
              id={project.id}
            >
              <div className="w-full space-y-2">
                <div>
                  <h4 className="text-sm font-medium print:text-xs">
                    {project.title}
                  </h4>
                  <div className="mt-1 flex w-full flex-col items-start gap-1 text-sm text-gray-500 print:flex-row md:flex-row md:items-center md:gap-4 md:text-sm">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-1 w-4 print:w-3" />
                      <time>
                        {duration(project.startDate, project.endDate)}
                      </time>
                    </div>
                    <div className="flex items-center">
                      <BriefcaseIcon className="mr-1 w-4 print:w-3" />
                      <Link href={`#${project.companyId}`}>
                        {project?.companyName}
                      </Link>
                    </div>
                  </div>
                  <div className="prose prose-sm mt-2 max-w-none space-y-1.5 text-gray-500 print:space-y-0.5">
                    {project.details && showDetails && (
                      <div className="project-details prose prose-sm max-w-none leading-snug text-gray-500 print:text-sm print:leading-tight">
                        <MDXRemote source={project.details} />
                      </div>
                    )}
                    {roles && (
                      <div className="project-roles flex items-center">
                        <h5 className="md:text-md mr-1 text-sm font-medium">
                          Role:
                        </h5>
                        <div>{roles}</div>
                      </div>
                    )}
                    {project.responsibilities && showResponsibilities && (
                      <div className="project-responsibilites">
                        <h5 className="md:text-md text-sm font-medium">
                          Responsibilities:
                        </h5>
                        <div className="prose prose-sm max-w-none leading-snug text-gray-500 print:text-sm print:leading-tight">
                          <MDXRemote source={project.responsibilities} />
                        </div>
                      </div>
                    )}
                    {project.keyAchievements && showKeyAchievements && (
                      <div className="project-keyAchievements">
                        <h5 className="md:text-md text-sm font-medium">
                          Key Achievements:
                        </h5>
                        <div className="prose prose-sm max-w-none leading-snug text-gray-500 prose-a:font-normal prose-a:text-gray-500 print:text-sm print:leading-tight">
                          <MDXRemote source={project.keyAchievements} />
                        </div>
                      </div>
                    )}
                    {project?.skills?.length > 0 && showSkills && (
                      <div className="project-skills mt-2 flex pt-2">
                        <h5 className="md:text-md mr-1 text-sm font-medium">
                          Skills:
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {project?.skills.map((skill) => {
                            return (
                              <span
                                key={skill}
                                className="inline-block rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
                              >
                                {skill}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
