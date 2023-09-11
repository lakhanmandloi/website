import Image from 'next/image';
import { formatDuration } from '@/utils/date';
import {
  AcademicCapIcon,
  MapPinIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import { getEducation } from '@/utils/api';

export default async function Education() {
  const educations = await getEducation();
  return (
    <section className="rounded-xl bg-white p-6 shadow print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-2 text-lg font-semibold">
        Education
      </h3>
      {educations.map((education) => {
        return (
          <div className="group mb-5 mt-6 flex" key={education.id}>
            <div className="mr-6">
              <Image
                src={education.logo}
                alt={education.name}
                className="w-22 aspect-square cursor-pointer rounded-xl object-contain object-center p-1 shadow"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <div className="w-full space-y-5">
              <div className="">
                <h4 className="text-md font-medium">{education.name}</h4>
                <div className="flex w-full flex-col text-gray-500 dark:text-gray-500">
                  <div className="flex items-center">
                    <AcademicCapIcon className="mr-2 w-4" />
                    <span>
                      {education.school} - {education.affiliation}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CalendarDaysIcon className="mr-2 w-4" />
                    <time>
                      {formatDuration(education.startDate, education.endDate)}
                    </time>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="mr-2 w-4" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
