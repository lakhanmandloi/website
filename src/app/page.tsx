import Declaration from '@/components/Declaration';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

// Rebuild the page daily so "Present" durations and years of experience stay current.
export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl print:px-8 print:pt-0">
        <article className="space-y-5 print:space-y-4">
          <Profile />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Declaration />
        </article>
      </main>
      <footer className="mx-auto max-w-5xl px-2 pb-4 text-center text-xs text-gray-500 print:hidden">
        This site uses Google Analytics to count visits and clicks. No ads, no
        Google signals, and no personal details are collected. Questions:{' '}
        <a
          href="mailto:namaste@lakhanmandloi.in"
          className="underline hover:text-violet-600"
          data-track-event="contact_click"
          data-track-label="email_footer"
        >
          namaste@lakhanmandloi.in
        </a>
      </footer>
    </>
  );
}
