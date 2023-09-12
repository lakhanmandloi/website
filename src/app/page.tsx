import AboutMe from '@/components/AboutMe';
import BasicInfo from '@/components/BasicInfo';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-3">
        <article className="space-y-5 lg:col-span-2">
          <AboutMe />
          <Experience />
          <Projects />
          <Education />
        </article>
        <div className="space-y-5">
          <BasicInfo />
          <Skills />
        </div>
      </main>
    </>
  );
}
