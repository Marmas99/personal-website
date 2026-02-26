import { resumeData } from "./data/resume";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const { personal, experience, skills, education } = resumeData;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header name={personal.name} />

      <main>
        <Hero personal={personal} />
        <Experience entries={experience} />
        <Skills categories={skills} />
        <Education entries={education} />
        <Contact />
      </main>

      <Footer name={personal.name} socialLinks={personal.socialLinks} />
    </div>
  );
}
