import { CAREER_START, yearsSince } from '@/utils/date';

export default function Profile() {
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-200 pb-1 text-lg font-semibold print:mb-2 print:border-b print:text-sm">
        Profile
      </h3>
      <p className="prose prose-sm max-w-none text-gray-500 md:prose-base print:leading-snug">
        I&apos;m a full stack developer and entrepreneur with{' '}
        {yearsSince(CAREER_START)}+ years of experience, currently co-founding
        TAFT AI Technologies and working as the sole DevOps engineer at REVIVE
        Healthcare Group. I work across the stack — Frontend, Backend, and
        DevOps — building user-friendly solutions that positively impact society
        and the environment, and owning everything from CI/CD and infrastructure
        to deployment. I&apos;ve led projects as a tech lead, always prioritising
        quality, reliability, and user experience.
      </p>
    </section>
  );
}
