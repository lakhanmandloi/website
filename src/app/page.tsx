import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Summary from '@/components/Summary';
export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto  max-w-5xl  print:px-8 print:pt-0 ">
        <article className="space-y-5">
          <Summary />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </article>
      </main>
    </>
  );
}
