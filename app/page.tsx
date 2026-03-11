import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Education } from '@/components/education';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
