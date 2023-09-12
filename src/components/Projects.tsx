import { Project, getExperience } from '@/utils/api';

import { CalendarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { duration } from '@/utils/date';

export default async function Projects() {
  const experiences = await getExperience();
  const projects = experiences?.reduce((list: Project[], company) => {
    return [...list, ...company.projects];
  }, []);
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-2 text-lg font-semibold">
        Projects
      </h3>
      <div className="projectslist">
        {projects.map((project) => {
          return (
            <div
              className="group mb-5 mt-6 flex"
              key={project.id}
            >
              <div className="w-full space-y-5">
                <div>
                  <h4 className="text font-medium">{project.title}</h4>
                  <div className="mb-2 flex w-full items-center text-gray-500 dark:text-gray-500">
                    <CalendarIcon className="mr-1 w-4" />
                    <time>{duration(project.startDate, project.endDate)}</time>
                  </div>
                  <div className="prose prose-sm text-gray-500 dark:prose-invert">
                    <MDXRemote source={project.details} />
                    {project.rolesResponsibilities && (
                      <>
                        <h5 className="text-md font-medium">
                          Roles & Responsibilities:
                        </h5>
                        <MDXRemote source={project.rolesResponsibilities} />
                      </>
                    )}
                  </div>
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
