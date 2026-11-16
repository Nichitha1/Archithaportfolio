import { Check, Copy, FileText, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { PROFILE } from '../data/resumeData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export default function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState('SAP GRC & Security Opportunity');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(
    `Hi Architha,\n\n${message}\n\nBest regards,\n${senderName} (${senderEmail})`,
  )}`;

  return (
    <section id="contact" className="bg-[#070b14] py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left 5 Columns: Direct Channels & Resume Access */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.08em] text-[#8ed5ff]">
                Contact
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#f8fafc] sm:text-[32px] sm:leading-[40px]">
                Connect with Architha
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">
                Available for SAP Security &amp; GRC Consultant roles, SAP IAG governance initiatives, and Fiori/OData authorization architecture discussions.
              </p>

              <div className="mt-6 space-y-3">
                <div className="sentinel-panel flex items-center justify-between gap-3 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="h-4 w-4 text-[#38bdf8] shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono uppercase tracking-[0.06em] text-[#64748b]">
                        Email
                      </div>
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="block truncate font-mono text-xs text-[#f8fafc] hover:text-[#8ed5ff]"
                      >
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PROFILE.email, 'email')}
                    aria-label="Copy email address"
                    className="rounded border border-[#38bdf8]/25 px-2.5 py-1.5 font-mono text-[11px] text-[#bdc8d1] hover:border-[#38bdf8] hover:text-[#f8fafc] transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedField === 'email' ? (
                      <span className="inline-flex items-center gap-1 text-[#00f5d4]">
                        <Check className="h-3 w-3" /> Copied
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Copy className="h-3 w-3" /> Copy
                      </span>
                    )}
                  </button>
                </div>

                <div className="sentinel-panel flex items-center justify-between gap-3 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <Phone className="h-4 w-4 text-[#38bdf8] shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono uppercase tracking-[0.06em] text-[#64748b]">
                        Phone
                      </div>
                      <a
                        href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                        className="block truncate font-mono text-xs text-[#f8fafc] hover:text-[#8ed5ff] tabular-nums"
                      >
                        {PROFILE.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PROFILE.phone, 'phone')}
                    aria-label="Copy phone number"
                    className="rounded border border-[#38bdf8]/25 px-2.5 py-1.5 font-mono text-[11px] text-[#bdc8d1] hover:border-[#38bdf8] hover:text-[#f8fafc] transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedField === 'phone' ? (
                      <span className="inline-flex items-center gap-1 text-[#00f5d4]">
                        <Check className="h-3 w-3" /> Copied
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Copy className="h-3 w-3" /> Copy
                      </span>
                    )}
                  </button>
                </div>

                <div className="sentinel-panel flex items-center gap-3 rounded-lg px-4 py-3">
                  <MapPin className="h-4 w-4 text-[#38bdf8] shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.06em] text-[#64748b]">
                      Location
                    </div>
                    <div className="text-xs font-medium text-[#f8fafc]">
                      {PROFILE.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sentinel-panel flex items-center justify-between gap-4 rounded-lg p-4">
              <div className="flex items-center gap-3 min-w-0">
                <FileText className="h-5 w-5 text-[#00f5d4] shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-[#f8fafc]">
                    Official Resume Document
                  </div>
                  <div className="truncate text-xs text-[#94a3b8]">
                    PDF · Architha Dameruppula — SAP GRC Consultant
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenResume}
                className="rounded border border-[#38bdf8]/35 bg-[#131f37] px-3.5 py-2 text-xs font-semibold text-[#f8fafc] hover:border-[#38bdf8] hover:bg-[#38bdf8]/15 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Open PDF
              </button>
            </div>
          </div>

          {/* Right 7 Columns: Direct Inquiry Composer */}
          <div className="lg:col-span-7">
            <div className="sentinel-panel rounded-lg overflow-hidden h-full">
              <div className="sentinel-top-accent w-full" />
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold text-[#f8fafc]">
                  Send a Direct Message
                </h3>
                <p className="mt-1 text-xs text-[#94a3b8]">
                  Compose an inquiry for hiring teams, SAP project leads, or security architecture reviews.
                </p>

                {submitted ? (
                  <div className="mt-6 rounded-lg border border-[#00f5d4]/30 bg-[#0b1325] p-6 space-y-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#00f5d4]">
                      <Check className="h-4 w-4" />
                      <span>Message Ready</span>
                    </div>
                    <p className="text-sm text-[#dbe2fb]">
                      Your note from <span className="font-semibold text-[#f8fafc]">{senderName}</span> regarding{' '}
                      <span className="font-mono text-[#8ed5ff]">{topic}</span> is prepared. Launch your mail client to deliver it directly to{' '}
                      <span className="font-mono text-[#f8fafc]">{PROFILE.email}</span>.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={mailtoHref}
                        className="inline-flex items-center gap-2 rounded bg-[#38bdf8] px-4 py-2 text-xs font-semibold text-[#070b14] hover:bg-[#7bd0ff] transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        <span>Open in Email Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setMessage('');
                        }}
                        className="rounded border border-[#38bdf8]/25 px-4 py-2 text-xs font-medium text-[#bdc8d1] hover:text-[#f8fafc] transition-colors cursor-pointer"
                      >
                        Compose Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#94a3b8]"
                        >
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          placeholder="e.g. Priya Nair"
                          className="mt-1.5 w-full rounded border border-[#94a3b8]/25 bg-[#070b14] px-3 py-2 text-sm text-[#f8fafc] placeholder-[#64748b] focus:border-[#38bdf8] focus:outline-none focus:shadow-[0_0_8px_rgba(56,189,248,0.25)]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#94a3b8]"
                        >
                          Work Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={senderEmail}
                          onChange={(e) => setSenderEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="mt-1.5 w-full rounded border border-[#94a3b8]/25 bg-[#070b14] px-3 py-2 text-sm text-[#f8fafc] placeholder-[#64748b] focus:border-[#38bdf8] focus:outline-none focus:shadow-[0_0_8px_rgba(56,189,248,0.25)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-topic"
                        className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#94a3b8]"
                      >
                        Subject
                      </label>
                      <select
                        id="contact-topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="mt-1.5 w-full rounded border border-[#94a3b8]/25 bg-[#070b14] px-3 py-2 text-sm text-[#f8fafc] focus:border-[#38bdf8] focus:outline-none focus:shadow-[0_0_8px_rgba(56,189,248,0.25)]"
                      >
                        <option value="SAP GRC & Security Opportunity">SAP GRC &amp; Security Opportunity</option>
                        <option value="SAP Fiori / Role Engineering Role">SAP Fiori / Role Engineering Role</option>
                        <option value="SAP IAG & SoD Governance Discussion">SAP IAG &amp; SoD Governance Discussion</option>
                        <option value="Interview Request">Interview Request</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#94a3b8]"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share role details, SAP landscape scope, or preferred interview times..."
                        className="mt-1.5 w-full rounded border border-[#94a3b8]/25 bg-[#070b14] px-3 py-2 text-sm text-[#f8fafc] placeholder-[#64748b] focus:border-[#38bdf8] focus:outline-none focus:shadow-[0_0_8px_rgba(56,189,248,0.25)]"
                      />
                    </div>

                    <div className="flex items-center justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded bg-[#38bdf8] px-5 py-2.5 text-sm font-semibold text-[#070b14] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-150 hover:bg-[#7bd0ff] hover:shadow-[0_0_16px_rgba(56,189,248,0.4)] cursor-pointer"
                      >
                        <Send className="h-4 w-4" />
                        <span>Prepare Message</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
