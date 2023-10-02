import Declaration from '@/components/Declaration';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl print:px-8 print:pt-0 ">
        <article className="space-y-5 print:space-y-4">
          <Profile />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Declaration />
        </article>
      </main>
    </>
  );
}
