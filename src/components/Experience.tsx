import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { duration } from '@/utils/date';
import { getExperience } from '@/utils/api';

export default async function Experience() {
  const experiences = await getExperience();
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-1 text-lg font-semibold print:border-b print:text-sm">
        Experience
      </h3>
      <div className="experienceslist">
        {experiences.map((company) => {
          return (
            <div
              className="group mb-5 mt-6 flex"
              key={company.id}
              id={company.id}
            >
              <div className="mr-6 hidden md:block">
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    className="aspect-square w-20 cursor-pointer rounded-xl object-contain object-center p-1 shadow"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="w-full space-y-4">
                <div>
                  <h4 className="text-base font-medium print:text-sm">
                    {company.name}
                  </h4>
                  <div className="mt-1 flex w-full flex-col items-start gap-1.5 text-sm text-gray-500 dark:text-gray-500 print:flex-row md:flex-row md:items-center md:gap-4">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-1 w-4 text-gray-400" />
                      <time>
                        {duration(company.startDate, company.endDate)}
                      </time>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-1 w-4 text-gray-400" />
                      <span>{company.location}</span>
                    </div>
                    <div className="rounded-md bg-violet-100 px-2 py-0.5 text-xs text-violet-500">
                      {company.type}
                    </div>
                  </div>
                </div>
                <ol
                  role="list"
                  className="relative border-l border-gray-200 dark:border-gray-700"
                >
                  {company.roles.map((role) => {
                    return (
                      <li
                        className="mb-3 ml-4"
                        key={role.id}
                      >
                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                        <h5 className="text-sm font-semibold text-gray-600 dark:text-white print:text-xs">
                          {role.title}
                        </h5>
                        <time className="mb-1 mt-1 flex items-center text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                          <CalendarIcon className="mr-1 w-4 text-gray-400" />
                          {duration(role.startDate, role.endDate)}
                        </time>
                        <div className="prose prose-sm max-w-none text-gray-500 dark:prose-invert">
                          <h5 className="mt-4 text-sm font-medium text-gray-500">
                            Responsibilities:
                          </h5>
                          <MDXRemote source={role.responsibilities} />
                        </div>
                      </li>
                    );
                  })}
                </ol>
                {company.projects.length > 0 && (
                  <div className="company-projects flex flex-col gap-1 md:flex-row">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-white">
                      Projects:
                    </h5>
                    <div className="company-projectlist flex flex-wrap gap-1.5">
                      {company.projects.map((project) => {
                        return (
                          <Link
                            href={`#${project.id}`}
                            key={project.id}
                            className="inline-block rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-500"
                          >
                            {project.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className="border-b border-gray-200 group-last:hidden"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
