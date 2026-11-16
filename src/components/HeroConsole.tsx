import { ArrowRight, Check, Copy, ShieldCheck, Terminal } from 'lucide-react';
import { useState } from 'react';
import { KEY_METRICS, PROFILE, TRACE_PREVIEW_ROWS } from '../data/resumeData';

type PreviewTab = 'trace' | 'roles' | 'iag' | 'ffid';

const PREVIEW_TABS: { id: PreviewTab; label: string }[] = [
  { id: 'trace', label: 'SU53 Trace' },
  { id: 'roles', label: 'Role Build' },
  { id: 'iag', label: 'SAP IAG SoD' },
  { id: 'ffid', label: 'FFID & PAM' },
];

export default function HeroConsole() {
  const [activeTab, setActiveTab] = useState<PreviewTab>('trace');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <section id="overview" className="relative border-b border-[#38bdf8]/10 bg-[#070b14] sentinel-grid">
      <div className="mx-auto max-w-[1320px] px-4 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Executive Narrative */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-[0.08em] uppercase text-[#8ed5ff]">
                <span>{PROFILE.role}</span>
                <span aria-hidden="true" className="text-[#3e484f]">·</span>
                <span>{PROFILE.company}</span>
                <span aria-hidden="true" className="text-[#3e484f]">·</span>
                <span>{PROFILE.location}</span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-bold tracking-[-0.02em] text-[#f8fafc] sm:text-[42px] sm:leading-[50px]">
                Enterprise SAP Security, Role Engineering &amp; GRC Governance
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-[#bdc8d1]">
                {PROFILE.about}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 rounded bg-[#38bdf8] px-5 py-2.5 text-sm font-semibold text-[#070b14] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-150 hover:bg-[#7bd0ff] hover:shadow-[0_0_18px_rgba(56,189,248,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ed5ff] whitespace-nowrap shrink-0"
              >
                <span>Explore SAP Architecture</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded border border-[#38bdf8]/30 bg-[#0d1527] px-4 py-2.5 text-sm font-medium text-[#f8fafc] transition-colors duration-150 hover:border-[#38bdf8] hover:bg-[#38bdf8]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-4 w-4 text-[#00f5d4]" />
                    <span className="font-mono text-xs text-[#00f5d4]">Copied {PROFILE.email}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-[#8ed5ff]" />
                    <span className="font-mono text-xs">{PROFILE.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Obsidian Sentinel Security Console */}
          <div className="lg:col-span-6 flex">
            <div className="sentinel-panel flex w-full flex-col justify-between rounded-lg overflow-hidden">
              <div className="sentinel-top-accent w-full" />

              {/* Console Header + Segmented View Tabs */}
              <div className="flex flex-col gap-3 border-b border-[#38bdf8]/10 bg-[#0b1325]/90 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="flex items-center gap-2.5">
                  <Terminal className="h-4 w-4 text-[#38bdf8] shrink-0" />
                  <span className="font-mono text-xs font-medium tracking-[0.04em] text-[#dbe2fb] whitespace-nowrap">
                    SAP Security &amp; GRC Workbench
                  </span>
                </div>

                <div
                  role="tablist"
                  aria-label="SAP Security workflow previews"
                  className="flex flex-wrap items-center gap-1 rounded bg-[#070b14] p-1 border border-[#38bdf8]/15"
                >
                  {PREVIEW_TABS.map((tab) => {
                    const selected = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => setActiveTab(tab.id)}
                        className={`rounded px-2.5 py-1 font-mono text-[11px] font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                          selected
                            ? 'bg-[#131f37] text-[#8ed5ff] border border-[#38bdf8]/35'
                            : 'text-[#87929a] hover:text-[#dbe2fb] border border-transparent'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Console Body */}
              <div className="flex-1 p-4 sm:p-5">
                {activeTab === 'trace' && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h2 className="font-display text-sm font-semibold text-[#f8fafc]">
                          SU53 / ST01 / STAUTHTRACE Authorization Matrix
                        </h2>
                        <p className="mt-0.5 text-xs text-[#94a3b8]">
                          Diagnosing missing authorization objects and validating least-privilege access across landscapes.
                        </p>
                      </div>
                      <span className="font-mono text-[11px] text-[#00f5d4]">
                        QAS → PRD Verified
                      </span>
                    </div>

                    <div className="overflow-x-auto rounded border border-[#38bdf8]/12 bg-[#070b14]">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-[#38bdf8]/12 font-mono text-[11px] uppercase tracking-[0.08em] text-[#64748b]">
                            <th className="px-3 py-2 font-semibold">Object</th>
                            <th className="px-3 py-2 font-semibold">Field</th>
                            <th className="px-3 py-2 font-semibold">Value</th>
                            <th className="px-3 py-2 font-semibold">Return</th>
                            <th className="px-3 py-2 font-semibold">Outcome</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#38bdf8]/8 text-xs">
                          {TRACE_PREVIEW_ROWS.map((row) => (
                            <tr key={row.authObject} className="hover:bg-[#131f37]/60 transition-colors">
                              <td className="px-3 py-2.5 font-mono font-medium text-[#8ed5ff] whitespace-nowrap">
                                {row.authObject}
                              </td>
                              <td className="px-3 py-2.5 font-mono text-[#bdc8d1] whitespace-nowrap">
                                {row.field}
                              </td>
                              <td className="px-3 py-2.5 font-mono text-[#dbe2fb] whitespace-nowrap">
                                {row.value}
                              </td>
                              <td className="px-3 py-2.5 font-mono whitespace-nowrap">
                                <span
                                  className={
                                    row.rc === 'RC=0' ? 'text-[#00f5d4]' : 'text-[#fbbf24]'
                                  }
                                >
                                  {row.rc}
                                </span>
                              </td>
                              <td className="px-3 py-2.5 text-[#94a3b8]">
                                {row.note}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'roles' && (
                  <div className="space-y-4">
                    <div>
                      <h2 className="font-display text-sm font-semibold text-[#f8fafc]">
                        Master, Derived &amp; Single Role Architecture (250+ Roles)
                      </h2>
                      <p className="mt-0.5 text-xs text-[#94a3b8]">
                        Integrating custom T-Codes, SAP Fiori applications, OData services, and org-level restrictions.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div className="rounded border border-[#38bdf8]/15 bg-[#070b14] p-3.5">
                        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8ed5ff]">
                          01 · Master Role
                        </div>
                        <div className="mt-1.5 font-mono text-xs font-medium text-[#f8fafc]">
                          Z:FI_AP_MASTER
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-[#94a3b8]">
                          Menu T-Codes, Fiori catalogs, OData services &amp; SU24 objects maintained.
                        </p>
                      </div>

                      <div className="rounded border border-[#38bdf8]/15 bg-[#070b14] p-3.5">
                        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#00f5d4]">
                          02 · Derived Roles
                        </div>
                        <div className="mt-1.5 font-mono text-xs font-medium text-[#f8fafc]">
                          Z:FI_AP_BUKRS_1000
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-[#94a3b8]">
                          Organizational level restrictions (Company Code, Plant, Sales Org) enforced.
                        </p>
                      </div>

                      <div className="rounded border border-[#38bdf8]/15 bg-[#070b14] p-3.5">
                        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#c7c8ff]">
                          03 · Transport Flow
                        </div>
                        <div className="mt-1.5 font-mono text-xs font-medium text-[#f8fafc]">
                          DEV → QAS → PRD
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-[#94a3b8]">
                          UAT test IDs verified, cutover IDs managed, secure transport migration.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 rounded border border-[#38bdf8]/12 bg-[#131b2d] px-3.5 py-2.5 text-xs">
                      <span className="text-[#bdc8d1]">
                        Authorization checks verified via <span className="font-mono text-[#8ed5ff]">SU24</span> and{' '}
                        <span className="font-mono text-[#8ed5ff]">PFCG</span> prior to production cutover.
                      </span>
                      <span className="font-mono text-[#00f5d4] tabular-nums">250+ Roles</span>
                    </div>
                  </div>
                )}

                {activeTab === 'iag' && (
                  <div className="space-y-4">
                    <div>
                      <h2 className="font-display text-sm font-semibold text-[#f8fafc]">
                        SAP IAG Segregation of Duties (SoD) Risk Validation
                      </h2>
                      <p className="mt-0.5 text-xs text-[#94a3b8]">
                        Pre-assignment access risk checks, repository synchronization, and governance jobs.
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        {
                          step: 'Step 01 · Repository Synchronization',
                          code: 'SAP IAG Sync',
                          detail: 'Synchronize user, role, and authorization metadata before access evaluation.',
                        },
                        {
                          step: 'Step 02 · Pre-Assignment User Access Analysis',
                          code: 'SoD Simulation',
                          detail: 'Validate requested roles and modifications against active Segregation of Duties rulesets.',
                        },
                        {
                          step: 'Step 03 · Governance Jobs & Owner Reviews',
                          code: 'Audit Ready',
                          detail: 'Execute IAG governance jobs and periodic master data reviews of role owners.',
                        },
                      ].map((item) => (
                        <div
                          key={item.step}
                          className="flex flex-col gap-1 rounded border border-[#38bdf8]/15 bg-[#070b14] px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <div className="text-xs font-semibold text-[#f8fafc]">{item.step}</div>
                            <div className="mt-0.5 text-xs text-[#94a3b8]">{item.detail}</div>
                          </div>
                          <span className="font-mono text-[11px] text-[#8ed5ff] shrink-0">
                            {item.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'ffid' && (
                  <div className="space-y-4">
                    <div>
                      <h2 className="font-display text-sm font-semibold text-[#f8fafc]">
                        Firefighter ID (FFID) &amp; PAM Log Governance
                      </h2>
                      <p className="mt-0.5 text-xs text-[#94a3b8]">
                        Controlled privileged emergency access assignment, backend owner mapping, and audit extraction.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded border border-[#38bdf8]/15 bg-[#070b14] p-3.5">
                        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8ed5ff]">
                          Provisioning &amp; Master Data
                        </div>
                        <ul className="mt-2 space-y-1.5 text-xs text-[#bdc8d1]">
                          <li>• FFID assignments executed strictly against approved ServiceNow requests</li>
                          <li>• Backend FFID Owners and Controllers maintained and periodically audited</li>
                        </ul>
                      </div>

                      <div className="rounded border border-[#38bdf8]/15 bg-[#070b14] p-3.5">
                        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#00f5d4]">
                          PAM Log Audit &amp; Compliance
                        </div>
                        <ul className="mt-2 space-y-1.5 text-xs text-[#bdc8d1]">
                          <li>• Extracted and reviewed Privileged Access Management (PAM) session logs</li>
                          <li>• Verified controller sign-offs and transaction execution against audit controls</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded border border-[#38bdf8]/12 bg-[#131b2d] px-3.5 py-2.5 text-xs text-[#bdc8d1]">
                      <ShieldCheck className="h-4 w-4 text-[#00f5d4] shrink-0" />
                      <span>
                        Paired with <span className="font-mono text-[#8ed5ff]">BOT Automation</span> specifications for inactive user deprovisioning and access removals.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Console Footer Summary */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#38bdf8]/10 bg-[#0b1325]/80 px-4 py-2.5 text-xs text-[#87929a] sm:px-5">
                <span>Role: {PROFILE.designation}</span>
                <span className="font-mono tabular-nums text-[#bdc8d1]">{PROFILE.tenure}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Key Metrics Strip */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="sentinel-panel rounded-lg px-5 py-4 transition-colors duration-150 hover:border-[#38bdf8]/35"
            >
              <div className="font-display text-xl font-bold tracking-tight text-[#f8fafc] tabular-nums">
                {metric.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-[#8ed5ff]">
                {metric.label}
              </div>
              <div className="mt-1 text-xs text-[#94a3b8]">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
