import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface TopNavProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

export default function TopNav({ onOpenResume }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#38bdf8]/12 bg-[#070b14]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-8 px-4 py-3.5 sm:px-8">
        {/* Zone 1: Single-line Brand wordmark */}
        <a
          href="#overview"
          className="font-display text-base font-bold tracking-tight text-[#f8fafc] transition-colors hover:text-[#8ed5ff] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded"
        >
          Architha Dameruppula
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#94a3b8]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors duration-150 hover:text-[#f8fafc] whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#38bdf8] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:text-[#8ed5ff]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (+ mobile menu trigger on small screens) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center justify-center rounded bg-[#38bdf8] px-4 py-2 text-xs font-semibold text-[#070b14] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-150 hover:bg-[#7bd0ff] hover:shadow-[0_0_16px_rgba(56,189,248,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ed5ff] whitespace-nowrap shrink-0 cursor-pointer"
          >
            View Resume
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded border border-[#38bdf8]/25 text-[#dbe2fb] hover:bg-[#38bdf8]/10 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#38bdf8]/12 bg-[#0d1527] px-4 py-3"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded px-3 py-2.5 text-sm font-medium text-[#bdc8d1] hover:bg-[#131f37] hover:text-[#f8fafc] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
