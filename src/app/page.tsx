import Headline from '@/components/Headline';
import BasicInfo from '@/components/BasicInfo';
import Skills from '@/components/Skills';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-4">
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-5">
          <Headline />
          <BasicInfo />
          <Skills />
        </div>
        <div className="space-y-5 lg:col-span-2">
          <AboutMe />
          <Experience />
          <Education />
        </div>
      </div>
    </main>
  );
}
