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
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-1 text-lg font-semibold print:border-b print:text-sm">
        Projects
      </h3>
      <div className="projectslist">
        {sortedProjects.map((project) => {
          return (
            <div
              className="group mb-5 mt-6 flex"
              key={project.id}
              id={project.id}
            >
              <div className="w-full space-y-4">
                <div>
                  <h4 className="text-sm font-medium print:text-xs">
                    {project.title}
                  </h4>
                  <div className="mt-1 flex flex-col gap-1.5 text-sm text-gray-500 dark:text-gray-500 md:flex-row">
                    <div className="mb-2 flex items-center">
                      <CalendarIcon className="mr-1 w-4 text-gray-400" />
                      <time>
                        {duration(project.startDate, project.endDate)}
                      </time>
                    </div>
                    <div className="mb-2 flex items-center">
                      <BriefcaseIcon className="mr-1 w-4 text-gray-400" />
                      <Link href={`#${project.companyId}`}>
                        {project?.companyName}
                      </Link>
                    </div>
                  </div>
                  <div className="prose prose-sm max-w-none text-gray-500 dark:prose-invert">
                    <MDXRemote source={project.details} />
                    {project.rolesResponsibilities && (
                      <>
                        <h5 className="md:text-md mt-4 text-sm font-medium text-gray-500">
                          Roles & Responsibilities:
                        </h5>
                        <MDXRemote source={project.rolesResponsibilities} />
                      </>
                    )}
                    {project.keyAchievements && (
                      <>
                        <h5 className="md:text-md mt-4 text-sm font-medium text-gray-500">
                          Key Achievements:
                        </h5>
                        <MDXRemote source={project.keyAchievements} />
                      </>
                    )}
                  </div>
                  {project?.skills?.length > 0 && (
                    <div className="project-skills mt-6 flex flex-wrap gap-1.5">
                      {project?.skills.map((skill) => {
                        return (
                          <span
                            key={skill}
                            className="inline-block rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-500"
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="border-b border-gray-200 group-last:hidden"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
