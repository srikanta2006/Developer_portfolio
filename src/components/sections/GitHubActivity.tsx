import Image from "next/image";
import { ArrowUpRight, GitFork, Star, Info } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { fetchGitHubData } from "@/lib/github";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export async function GitHubActivity() {
  const { profile, repos, isFallback, rateLimited } = await fetchGitHubData();

  return (
    <section id="github" className="py-20 sm:py-28 border-t border-[#E2E8F0] scroll-mt-20">
      <Container>
        <SectionHeading
          number="05 / Open Source"
          title="GitHub Activity & Repositories"
          description="Verifiable public code and activity streamed directly from the official GitHub REST API."
        />

        {/* Fallback Notice (Only visible if rate-limited or offline) */}
        {isFallback && (
          <div className="mb-6 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-xs text-[#475569] flex items-center gap-2">
            <Info className="h-4 w-4 text-[#4F46E5] shrink-0" aria-hidden="true" />
            <span>
              {rateLimited
                ? "GitHub unauthenticated rate limit reached; displaying verified cached repository snapshot."
                : "Displaying verified offline repository snapshot."}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Profile Overview Card */}
          <div className="lg:col-span-4 rounded-xl border border-[#E2E8F0] bg-white p-6 space-y-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border border-[#E2E8F0] bg-[#F8FAFC] shrink-0">
                <Image
                  src={profile.avatar_url}
                  alt={`${profile.name} GitHub avatar`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-lg font-bold text-[#0F172A] truncate">
                  {profile.name}
                </h3>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#4F46E5] hover:underline truncate block"
                >
                  @{profile.login}
                </a>
              </div>
            </div>

            <p className="text-xs text-[#475569] leading-relaxed">
              {profile.bio}
            </p>

            {/* Profile Statistics */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#E2E8F0] text-center">
              <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#F1F5F9]">
                <span className="font-mono text-base font-semibold text-[#0F172A] block">
                  {profile.public_repos}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#64748B] block">
                  Repos
                </span>
              </div>
              <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#F1F5F9]">
                <span className="font-mono text-base font-semibold text-[#0F172A] block">
                  {profile.followers}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#64748B] block">
                  Followers
                </span>
              </div>
              <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#F1F5F9]">
                <span className="font-mono text-base font-semibold text-[#0F172A] block">
                  {profile.following}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#64748B] block">
                  Following
                </span>
              </div>
            </div>

            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F172A] py-2.5 text-xs font-semibold text-white hover:bg-[#1E293B] transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>View Full GitHub Profile</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Right: Public Repositories Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-5 rounded-xl border border-[#E2E8F0] bg-white hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-mono text-sm font-semibold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors truncate">
                      {repo.name}
                    </h4>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#64748B] group-hover:text-[#4F46E5] shrink-0" />
                  </div>
                  <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed">
                    {repo.description || "Public repository and code exploration."}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#E2E8F0] text-xs text-[#64748B]">
                  {repo.language ? (
                    <Badge variant="neutral" size="sm">
                      {repo.language}
                    </Badge>
                  ) : (
                    <span />
                  )}

                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
