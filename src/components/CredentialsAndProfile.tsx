import { Award, BookOpen, CheckCircle2, Globe2, GraduationCap } from 'lucide-react';
import {
  CERTIFICATIONS,
  EDUCATION,
  HOBBIES,
  KEY_SKILLS,
  LANGUAGES,
} from '../data/resumeData';

export default function CredentialsAndProfile() {
  return (
    <section id="credentials" className="border-b border-[#38bdf8]/10 bg-[#0b1325]/60 py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.08em] text-[#8ed5ff]">
            Credentials &amp; Profile
          </div>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#f8fafc] sm:text-[32px] sm:leading-[40px]">
            Certifications, Education &amp; Core Strengths
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left 7 Columns: Certifications & Education */}
          <div className="lg:col-span-7 space-y-6">
            <div className="sentinel-panel rounded-lg overflow-hidden">
              <div className="sentinel-top-accent w-full" />
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#8ed5ff]">
                  <Award className="h-4 w-4" />
                  <span>Verified Certifications</span>
                </div>

                <div className="mt-4 divide-y divide-[#38bdf8]/10">
                  {CERTIFICATIONS.map((cert) => (
                    <div
                      key={cert.code}
                      className="flex flex-col gap-2 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded border border-[#38bdf8]/25 bg-[#070b14] px-2 py-0.5 font-mono text-xs font-semibold text-[#00f5d4]">
                            {cert.code}
                          </span>
                          <h3 className="font-display text-sm font-semibold text-[#f8fafc]">
                            {cert.title}
                          </h3>
                        </div>
                        <p className="mt-1.5 text-xs text-[#94a3b8]">
                          {cert.focus}
                        </p>
                      </div>
                      <span className="font-mono text-[11px] text-[#87929a] shrink-0">
                        {cert.issuer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="sentinel-panel rounded-lg p-5 sm:p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#8ed5ff]">
                <GraduationCap className="h-4 w-4" />
                <span>Education</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-[#f8fafc]">
                {EDUCATION.degree}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#bdc8d1]">
                <span>{EDUCATION.institution}</span>
                <span aria-hidden="true" className="text-[#3e484f]">·</span>
                <span className="text-[#94a3b8]">{EDUCATION.location}</span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Key Skills, Languages & Interests */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sentinel-panel rounded-lg p-5 sm:p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#8ed5ff]">
                <CheckCircle2 className="h-4 w-4" />
                <span>Key Skills</span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {KEY_SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2.5 text-sm text-[#dbe2fb]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#38bdf8] shrink-0" aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sentinel-panel rounded-lg p-5 sm:p-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#8ed5ff]">
                  <Globe2 className="h-4 w-4" />
                  <span>Languages Known</span>
                </div>
                <div className="mt-3 divide-y divide-[#38bdf8]/10">
                  {LANGUAGES.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center justify-between py-2 first:pt-0 last:pb-0 text-sm"
                    >
                      <span className="font-medium text-[#f8fafc]">{lang.name}</span>
                      <span className="font-mono text-xs text-[#94a3b8]">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#38bdf8]/10 pt-4">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#8ed5ff]">
                  <BookOpen className="h-4 w-4" />
                  <span>Hobbies &amp; Interests</span>
                </div>
                <div className="mt-2.5 flex flex-wrap items-center gap-2 text-sm text-[#bdc8d1]">
                  {HOBBIES.map((hobby, idx) => (
                    <span key={hobby} className="inline-flex items-center gap-2">
                      <span>{hobby}</span>
                      {idx < HOBBIES.length - 1 && (
                        <span aria-hidden="true" className="text-[#3e484f]">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
