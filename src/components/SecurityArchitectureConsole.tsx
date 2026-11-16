import { ChevronRight, Layers, Shield, Workflow } from 'lucide-react';
import { useState } from 'react';
import { ARCHITECTURE_DOMAINS } from '../data/resumeData';

export default function SecurityArchitectureConsole() {
  const [selectedId, setSelectedId] = useState<string>(ARCHITECTURE_DOMAINS[0].id);
  const [selectedTcode, setSelectedTcode] = useState<string>(ARCHITECTURE_DOMAINS[0].tcodes[0].code);

  const activeDomain =
    ARCHITECTURE_DOMAINS.find((d) => d.id === selectedId) ?? ARCHITECTURE_DOMAINS[0];

  const activeTcodeInfo =
    activeDomain.tcodes.find((t) => t.code === selectedTcode) ?? activeDomain.tcodes[0];

  const handleSelectDomain = (domainId: string) => {
    const next = ARCHITECTURE_DOMAINS.find((d) => d.id === domainId);
    setSelectedId(domainId);
    if (next && next.tcodes.length > 0) {
      setSelectedTcode(next.tcodes[0].code);
    }
  };

  return (
    <section id="architecture" className="border-b border-[#38bdf8]/10 bg-[#0b1325]/60 py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.08em] text-[#8ed5ff]">
            Technical Architecture
          </div>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#f8fafc] sm:text-[32px] sm:leading-[40px]">
            SAP Security &amp; GRC Control Domains
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#94a3b8] sm:text-[15px]">
            Select any operational domain below to inspect transaction codes, authorization workflows, and audit governance controls implemented across enterprise SAP landscapes.
          </p>
        </div>

        {/* 12-Column Obsidian Sentinel 3-Pane Split */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left 3 Columns: Domain Tree */}
          <div className="lg:col-span-3">
            <div className="sentinel-panel rounded-lg p-3">
              <div className="px-2.5 pb-2.5 pt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748b] border-b border-[#38bdf8]/10">
                Security Domains
              </div>
              <div className="mt-2 space-y-1">
                {ARCHITECTURE_DOMAINS.map((domain) => {
                  const isActive = domain.id === activeDomain.id;
                  return (
                    <button
                      key={domain.id}
                      type="button"
                      onClick={() => handleSelectDomain(domain.id)}
                      className={`flex w-full items-center justify-between gap-2 rounded px-3 py-2.5 text-left text-xs transition-colors duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-[#131f37] text-[#f8fafc] border border-[#38bdf8]/40'
                          : 'text-[#bdc8d1] hover:bg-[#131b2d] hover:text-[#f8fafc] border border-transparent'
                      }`}
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`font-mono text-[11px] tabular-nums shrink-0 ${
                            isActive ? 'text-[#38bdf8]' : 'text-[#64748b]'
                          }`}
                        >
                          {domain.index}
                        </span>
                        <span className="font-medium truncate">{domain.shortLabel}</span>
                      </span>
                      <ChevronRight
                        className={`h-3.5 w-3.5 shrink-0 transition-transform ${
                          isActive ? 'text-[#38bdf8] translate-x-0.5' : 'text-[#64748b]'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Center 6 Columns: Forensic Workflow Inspection */}
          <div className="lg:col-span-6">
            <div className="sentinel-panel h-full rounded-lg overflow-hidden">
              <div className="sentinel-top-accent w-full" />
              <div className="p-5 sm:p-6 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8ed5ff]">
                    <span>Domain {activeDomain.index}</span>
                    <span aria-hidden="true" className="text-[#3e484f]">·</span>
                    <span>{activeDomain.name}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[#f8fafc]">
                    {activeDomain.headline}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#bdc8d1]">
                    {activeDomain.overview}
                  </p>
                </div>

                {/* Interactive SAP T-Code & Parameter Chips */}
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#64748b]">
                    SAP T-Codes &amp; Control Surfaces (Click to Inspect)
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {activeDomain.tcodes.map((item) => {
                      const selected = activeTcodeInfo.code === item.code;
                      return (
                        <button
                          key={item.code}
                          type="button"
                          onClick={() => setSelectedTcode(item.code)}
                          className={`rounded px-2.5 py-1.5 font-mono text-xs font-medium transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                            selected
                              ? 'bg-[#38bdf8]/15 border border-[#38bdf8] text-[#8ed5ff] shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                              : 'bg-[#070b14] border border-[#38bdf8]/20 text-[#38bdf8] hover:border-[#38bdf8]/50'
                          }`}
                        >
                          {item.code}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-2.5 rounded border border-[#38bdf8]/12 bg-[#070b14] px-3.5 py-2.5 text-xs text-[#bdc8d1]">
                    <span className="font-mono font-semibold text-[#00f5d4]">
                      {activeTcodeInfo.code}:
                    </span>{' '}
                    {activeTcodeInfo.purpose}
                  </div>
                </div>

                {/* 3-Step Execution Flow */}
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[#64748b]">
                    <Workflow className="h-3.5 w-3.5 text-[#38bdf8]" />
                    <span>Operational Execution Flow</span>
                  </div>
                  <div className="mt-3 space-y-2.5">
                    {activeDomain.workflowSteps.map((ws, idx) => (
                      <div
                        key={ws.step}
                        className="rounded border border-[#38bdf8]/10 bg-[#070b14]/80 p-3.5"
                      >
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-mono text-xs font-semibold text-[#38bdf8] tabular-nums">
                            0{idx + 1}.
                          </span>
                          <span className="text-sm font-semibold text-[#f8fafc]">
                            {ws.step}
                          </span>
                        </div>
                        <p className="mt-1 pl-6 text-xs leading-relaxed text-[#94a3b8]">
                          {ws.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right 3 Columns: Contextual Compliance & Landscape Scope */}
          <div className="lg:col-span-3 space-y-4">
            <div className="sentinel-panel rounded-lg p-5">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[#00f5d4]">
                <Shield className="h-3.5 w-3.5" />
                <span>Audit &amp; Compliance Impact</span>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-[#dbe2fb]">
                {activeDomain.auditOutcome}
              </p>
            </div>

            <div className="sentinel-panel rounded-lg p-5">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8ed5ff]">
                <Layers className="h-3.5 w-3.5" />
                <span>Landscape Scope</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeDomain.environments.map((env) => (
                  <span
                    key={env}
                    className="rounded border border-[#38bdf8]/20 bg-[#070b14] px-2.5 py-1 font-mono text-xs text-[#dbe2fb]"
                  >
                    {env}
                  </span>
                ))}
              </div>
              <div className="mt-4 border-t border-[#38bdf8]/10 pt-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#64748b]">
                  Linked Deliverables
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1.5 font-mono text-xs text-[#94a3b8]">
                  {activeDomain.relatedDeliverables.map((code, i) => (
                    <span key={code}>
                      {code}
                      {i < activeDomain.relatedDeliverables.length - 1 ? ' · ' : ''}
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
