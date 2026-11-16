import { LayoutGrid, List, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { DELIVERABLES, type DeliverableItem } from '../data/resumeData';

type CategoryFilter = 'All' | DeliverableItem['category'];
type ViewMode = 'grid' | 'table';

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Role Engineering',
  'Access & FFID',
  'GRC & Audit',
  'Operations & Automation',
];

export default function DeliverablesMatrix() {
  const [category, setCategory] = useState<CategoryFilter>('All');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DELIVERABLES.filter((item) => {
      const matchesCat = category === 'All' || item.category === category;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.landscape.toLowerCase().includes(q) ||
        item.tcodes.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [category, query]);

  const resetFilters = () => {
    setCategory('All');
    setQuery('');
  };

  return (
    <section id="experience" className="border-b border-[#38bdf8]/10 bg-[#070b14] py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        {/* Section Header + Company Lockup */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#8ed5ff]">
              <span>Experience</span>
              <span aria-hidden="true" className="text-[#3e484f]">·</span>
              <span>Accenture</span>
              <span aria-hidden="true" className="text-[#3e484f]">·</span>
              <span className="tabular-nums">Aug 2023 – Present</span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#f8fafc] sm:text-[32px] sm:leading-[40px]">
              Associate Software Engineer — SAP Deliverables
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-[#94a3b8] sm:text-[15px]">
              Full 13-point operational record across user access administration, 250+ role builds, SAP IAG SoD validation, Firefighter PAM governance, and BOT deprovisioning workflows.
            </p>
          </div>

          {/* Grid / Audit Table Switcher */}
          <div className="flex items-center gap-1 self-start rounded bg-[#0d1527] p-1 border border-[#38bdf8]/15">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#131f37] text-[#8ed5ff] border border-[#38bdf8]/35'
                  : 'text-[#94a3b8] hover:text-[#f8fafc] border border-transparent'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Cards</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-[#131f37] text-[#8ed5ff] border border-[#38bdf8]/35'
                  : 'text-[#94a3b8] hover:text-[#f8fafc] border border-transparent'
              }`}
            >
              <List className="h-3.5 w-3.5" />
              <span>Audit Table</span>
            </button>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mt-7 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filter deliverables by domain"
            className="flex flex-wrap items-center gap-1.5"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = category === cat;
              const count =
                cat === 'All'
                  ? DELIVERABLES.length
                  : DELIVERABLES.filter((d) => d.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#38bdf8] text-[#070b14] font-semibold'
                      : 'bg-[#0d1527] text-[#bdc8d1] border border-[#38bdf8]/15 hover:border-[#38bdf8]/40 hover:text-[#f8fafc]'
                  }`}
                >
                  {cat} <span className="font-mono tabular-nums opacity-80">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Monospace Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#64748b]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter T-Code, Fiori, IAG, SNOTE..."
              aria-label="Filter deliverables by keyword or SAP transaction code"
              className="w-full rounded border border-[#94a3b8]/25 bg-[#070b14] py-2 pl-9 pr-8 font-mono text-xs text-[#f8fafc] placeholder-[#64748b] transition-all focus:border-[#38bdf8] focus:outline-none focus:shadow-[0_0_8px_rgba(56,189,248,0.25)]"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear filter"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#f8fafc] cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filtered.length === 0 ? (
          <div className="mt-8 sentinel-panel rounded-lg px-6 py-12 text-center">
            <div className="font-mono text-xs uppercase tracking-[0.08em] text-[#8ed5ff]">
              No Matching Deliverables
            </div>
            <p className="mt-2 text-sm text-[#94a3b8]">
              No resume items matched &ldquo;<span className="font-mono text-[#dbe2fb]">{query}</span>&rdquo; in {category}.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 rounded border border-[#38bdf8]/30 bg-[#131f37] px-4 py-2 text-xs font-medium text-[#f8fafc] hover:border-[#38bdf8] transition-colors cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View */
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="sentinel-panel flex flex-col justify-between rounded-lg p-5 transition-colors duration-150 hover:border-[#38bdf8]/35"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#87929a]">
                    <span className="font-mono text-[#8ed5ff] tabular-nums">
                      {String(item.id).padStart(2, '0')} · {item.code}
                    </span>
                    <span className="truncate">{item.category}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-base font-semibold text-[#f8fafc]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#bdc8d1]">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#38bdf8]/10 pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tcodes.map((tcode) => (
                      <span
                        key={tcode}
                        className="rounded border border-[#38bdf8]/20 bg-[#070b14] px-2 py-0.5 font-mono text-[11px] text-[#38bdf8]"
                      >
                        {tcode}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Dense Obsidian Sentinel Audit Table View */
          <div className="mt-6 overflow-x-auto sentinel-panel rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#38bdf8]/15 bg-[#0b1325] font-mono text-[11px] uppercase tracking-[0.08em] text-[#64748b]">
                  <th className="px-4 py-3 font-semibold">#</th>
                  <th className="px-4 py-3 font-semibold">Code</th>
                  <th className="px-4 py-3 font-semibold">Deliverable</th>
                  <th className="px-4 py-3 font-semibold">Domain</th>
                  <th className="px-4 py-3 font-semibold">Technical Stack</th>
                  <th className="px-4 py-3 font-semibold">Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#38bdf8]/10 text-xs">
                {filtered.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#131f37]/60 transition-colors"
                  >
                    <td className="px-4 py-2.5 font-mono text-[#64748b] tabular-nums whitespace-nowrap">
                      {String(item.id).padStart(2, '0')}
                    </td>
                    <td className="px-4 py-2.5 font-mono font-medium text-[#8ed5ff] whitespace-nowrap">
                      {item.code}
                    </td>
                    <td className="px-4 py-2.5 min-w-[280px]">
                      <div className="font-semibold text-[#f8fafc]">{item.title}</div>
                      <div className="mt-0.5 text-[#94a3b8]">{item.summary}</div>
                    </td>
                    <td className="px-4 py-2.5 text-[#bdc8d1] whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {item.tcodes.map((tcode) => (
                          <span
                            key={tcode}
                            className="rounded border border-[#38bdf8]/20 bg-[#070b14] px-1.5 py-0.5 font-mono text-[11px] text-[#38bdf8]"
                          >
                            {tcode}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-2.5 font-mono text-[#00f5d4] whitespace-nowrap">
                      {item.landscape}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
