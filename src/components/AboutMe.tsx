export default function AboutMe() {
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-2 text-lg font-semibold print:hidden print:border-b">
        About Me
      </h3>
      <h3 className="mb-4 hidden border-b-2 border-gray-100 pb-2 text-lg font-semibold print:block">
        Summary
      </h3>
      <div className="prose prose-stone max-w-none text-gray-500">
        <p>
          I&apos;m a seasoned Senior Software Engineer at CLSA Technology &
          Services LLP, specializing in frontend development and DevOps. With
          over eight years of experience, I&apos;ve delivered 60+ projects
          across various domains, assuming leadership roles as a Scrum master
          and tech lead. I&apos;m passionate about exploring new technologies,
          creating user-friendly products, and making a positive impact on
          society and the environment through innovative solutions.
        </p>
      </div>
    </section>
  );
}
