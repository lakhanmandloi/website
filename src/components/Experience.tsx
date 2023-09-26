import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { duration } from '@/utils/date';
import { getExperience } from '@/utils/api';

export default async function Experience() {
  const experiences = await getExperience();
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-1 text-lg font-semibold print:mb-2 print:border-b print:text-sm">
        Experience
      </h3>
      <div className="experienceslist">
        {experiences.map((company) => {
          return (
            <div
              className="group mb-4 flex md:mt-6"
              key={company.id}
              id={company.id}
            >
              <div className="mr-6 hidden print:block md:block">
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    className="aspect-square w-20 cursor-pointer rounded-xl object-contain object-center p-1 shadow print:w-10"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="w-full space-y-2">
                <div>
                  <h4 className="text-sm font-medium print:text-xs">
                    {company.name}
                  </h4>
                  <div className="mt-1 flex w-full flex-col items-start gap-1 text-sm text-gray-500 print:flex-row print:text-sm md:flex-row md:items-center md:gap-4">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-1 w-4 print:w-3" />
                      <time>
                        {duration(company.startDate, company.endDate)}
                      </time>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-1 w-4 print:w-3" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="mr-1 w-4 print:w-3" />
                      {company.type}
                    </div>
                  </div>
                </div>
                <ol
                  role="list"
                  className="relative border-l border-gray-200"
                >
                  {company.roles.map((role) => {
                    return (
                      <li
                        className="mb-3 ml-4"
                        key={role.id}
                      >
                        <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full border border-white bg-gray-200"></div>
                        <h5 className="text-sm font-semibold text-gray-700">
                          {role.title}
                        </h5>
                        <time className="mb-1 mt-1 flex items-center text-sm font-normal leading-none text-gray-500 print:text-sm">
                          <CalendarIcon className="mr-1 w-4 print:w-3" />
                          {duration(role.startDate, role.endDate)}
                        </time>
                        <div className="role-responsibilities">
                          <h5 className="mt-2 hidden text-sm text-gray-500 print:mt-1">
                            Responsibilities:
                          </h5>
                          <div className="prose prose-sm mt-2 max-w-none leading-snug text-gray-500 print:text-sm print:leading-tight">
                            <MDXRemote source={role.responsibilities} />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
                {company.projects.length > 0 && (
                  <div className="company-projects flex flex-col gap-1 print:hidden md:flex-row">
                    <h5 className="text-sm font-semibold text-gray-600">
                      Projects:
                    </h5>
                    <div className="company-projectlist flex flex-wrap gap-1.5">
                      {company.projects.map((project) => {
                        return (
                          <Link
                            href={`#${project.id}`}
                            key={project.id}
                            className="inline-block rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
                          >
                            {project.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className="border-b border-gray-200 pt-4 group-last:hidden print:hidden"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
