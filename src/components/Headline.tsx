import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
export default function Headline() {
  return (
    <div className="overflow-hidden rounded-xl shadow print:shadow-none">
      <div className="relative h-32 overflow-visible bg-[url('/images/banner.jpg')] bg-cover bg-local">
        <div className="translate-1/2 absolute -bottom-14 z-10 flex w-full items-end justify-between p-4 px-6">
          <Image
            src="/images/avatar.png"
            alt="Lakhan Mandloi"
            className="cursor-pointer rounded-2xl bg-pink-200 p-0.5 shadow-md"
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className="relative bg-white p-6 pt-14">
        <h2 className="mb-1 text-2xl font-semibold">
          Lakhan Mandloi <span className="text-sm font-light">(He/Him)</span>
        </h2>
        <div className="mb-7 text-base text-gray-400">
          Senior Software Developer
        </div>
        <div className="group flex rounded-lg bg-violet-500 font-semibold text-white transition-transform hover:scale-x-105 print:hidden">
          <button className="w-full rounded-l-lg px-4 py-3">
            Download Resume
          </button>
          <button className="rounded-r-lg bg-violet-600 px-4 py-3">
            <ArrowDownTrayIcon className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
