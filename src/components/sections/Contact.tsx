"use client";

import { useState, FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { Mail, ArrowUpRight, Send, CheckCircle2, AlertCircle } from "lucide-react";

const TOPICS = ["Hiring / Role", "Collaboration", "General"] as const;

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 5.8a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}

export function Contact() {
  const emailAddress = "srikantacvr@gmail.com";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("Hiring / Role");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message, website }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email directly.");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-white/[0.08] scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              number="05 / Contact"
              title="Let's build something intelligent."
              description="Open for software engineering challenges, multi-agent AI systems, and internship or full-time opportunities. Send a direct message or reach out via email."
              className="mb-0"
            />

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="secondary"
                size="md"
                href={`mailto:${emailAddress}`}
                className="gap-2"
              >
                <Mail className="h-4 w-4 text-[#3B82F6]" aria-hidden="true" />
                <span>{emailAddress}</span>
              </Button>
              <CopyButton
                text={emailAddress}
                label="Copy Email"
                className="h-10 px-4 text-xs rounded-xl bg-[#0C0E12] border-white/[0.1] hover:border-[#3B82F6]/50"
              />
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#94A3B8]">
              <a
                href="https://github.com/srikanta2006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#CBD5E1] hover:text-[#60A5FA] font-medium transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>github.com/srikanta2006</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#64748B]" />
              </a>

              <a
                href="https://linkedin.com/in/srikanta-bellamkonda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#CBD5E1] hover:text-[#60A5FA] font-medium transition-colors"
              >
                <LinkedInIcon className="h-4 w-4 text-[#3B82F6]" />
                <span>linkedin.com/in/srikanta-bellamkonda</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#64748B]" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Messaging Form */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#0C0E12] p-6 sm:p-8">
            {status === "success" ? (
              <div className="py-10 text-center space-y-4">
                <div className="mx-auto h-11 w-11 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-[#ECEEF0]">
                    Message received
                  </h3>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                    Thanks for reaching out! Your message has been sent and I&apos;ll get back to you soon.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="inline-flex items-center px-4 py-2 rounded-xl border border-white/[0.1] bg-white/[0.04] text-xs font-medium text-[#ECEEF0] hover:border-[#3B82F6]/50 hover:text-[#60A5FA] transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/[0.06]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#64748B]">
                    Direct Message
                  </span>
                  <span className="font-mono text-[11px] text-[#64748B]">
                    Replies within 24h
                  </span>
                </div>

                {/* Topic Selector */}
                <div className="space-y-1.5">
                  <span className="block text-xs font-medium text-[#94A3B8]">
                    Topic
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {TOPICS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                          topic === t
                            ? "bg-[#2563EB]/15 border-[#3B82F6]/40 text-[#60A5FA]"
                            : "bg-[#070809] border-white/[0.08] text-[#94A3B8] hover:text-[#ECEEF0]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Honeypot (hidden from humans) */}
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-medium text-[#94A3B8]">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-[#070809] text-sm text-[#ECEEF0] placeholder:text-[#64748B] focus:outline-none focus:border-[#3B82F6]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-medium text-[#94A3B8]">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      maxLength={150}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-[#070809] text-sm text-[#ECEEF0] placeholder:text-[#64748B] focus:outline-none focus:border-[#3B82F6]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-medium text-[#94A3B8]">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about the role, project, or idea..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/[0.08] bg-[#070809] text-sm text-[#ECEEF0] placeholder:text-[#64748B] focus:outline-none focus:border-[#3B82F6] resize-y"
                  />
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/25 rounded-xl px-3.5 py-2.5"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="pt-1 flex items-center justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={status === "submitting"}
                    className="gap-2 w-full sm:w-auto"
                  >
                    <Send className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
