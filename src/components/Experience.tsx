import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

import Image from 'next/image';
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
      {experiences.map((company) => {
        return (
          <div
            className="group mb-5 mt-6 flex"
            key={company.id}
          >
            <div className="mr-6">
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
            <div className="w-full space-y-5">
              <div>
                <h4 className="text-base font-medium">{company.name}</h4>
                <div className="flex w-full items-center gap-4 text-sm text-gray-400 dark:text-gray-500">
                  <div className="flex items-center">
                    <CalendarIcon className="mr-1 w-4" />
                    <time>{duration(company.startDate, company.endDate)}</time>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="mr-1 w-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="rounded-md bg-violet-100 p-1  text-xs text-violet-900">
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
                      className="mb-10 ml-4"
                      key={role.id}
                    >
                      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                      <h5 className=" font-semibold text-gray-900 dark:text-white">
                        {role.title}
                      </h5>
                      <time className="mb-1 flex items-center text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        <CalendarIcon className="mr-1 w-4" />
                        {duration(role.startDate, role.endDate)}
                      </time>
                      <div className="prose prose-sm max-w-none text-gray-500 dark:prose-invert">
                        <h5 className="text-md mt-2 font-medium">
                          Responsibilities:
                        </h5>
                        <MDXRemote source={role.responsibilities} />
                      </div>
                    </li>
                  );
                })}
              </ol>
              <div className="border-b border-gray-200 group-last:hidden"></div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
