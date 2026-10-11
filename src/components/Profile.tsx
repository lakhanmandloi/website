import { CAREER_START, yearsSince } from '@/utils/date';

export default function Profile() {
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-200 pb-1 text-lg font-semibold print:mb-2 print:border-b print:text-sm">
        Profile
      </h3>
      <p className="prose prose-sm md:prose-base max-w-none text-gray-500 print:leading-snug">
        Co-founder of TAFT AI Technologies Private Limited. I work as a forward
        deployed engineer: I embed with a team, own the problem end-to-end, and
        ship it to production, using AI tools to move faster without dropping
        quality. {yearsSince(CAREER_START)}+ years building products across
        frontend, backend and DevOps, including leading projects as a tech lead.
        I care about building user-friendly products that work reliably in
        production and have a positive impact on people and the environment.
      </p>
    </section>
  );
}
