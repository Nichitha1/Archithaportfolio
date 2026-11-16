import { useState } from 'react';
import ContactSection from './components/ContactSection';
import CredentialsAndProfile from './components/CredentialsAndProfile';
import DeliverablesMatrix from './components/DeliverablesMatrix';
import HeroConsole from './components/HeroConsole';
import ResumeModal from './components/ResumeModal';
import SecurityArchitectureConsole from './components/SecurityArchitectureConsole';
import TopNav from './components/TopNav';
import { PROFILE } from './data/resumeData';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-[#dbe2fb]">
      <TopNav onOpenResume={() => setResumeOpen(true)} />

      <main>
        <HeroConsole />
        <SecurityArchitectureConsole />
        <DeliverablesMatrix />
        <CredentialsAndProfile />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      <footer className="border-t border-[#38bdf8]/10 bg-[#060e1f] py-6">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-3 px-4 text-xs text-[#64748b] sm:flex-row sm:items-center sm:px-8">
          <div>
            {PROFILE.name} · {PROFILE.role} · {PROFILE.location}
          </div>
          <div className="flex items-center gap-5">
            <a href="#overview" className="hover:text-[#dbe2fb] transition-colors">
              Overview
            </a>
            <a href="#architecture" className="hover:text-[#dbe2fb] transition-colors">
              Architecture
            </a>
            <a href="#experience" className="hover:text-[#dbe2fb] transition-colors">
              Experience
            </a>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="hover:text-[#dbe2fb] transition-colors cursor-pointer"
            >
              Resume PDF
            </button>
          </div>
        </div>
      </footer>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
