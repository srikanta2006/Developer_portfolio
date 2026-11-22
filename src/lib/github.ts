export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface GitHubDataResult {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  isFallback: boolean;
  rateLimited?: boolean;
}

// Fallback verified snapshot data in case GitHub API rate limits or network issues occur
const FALLBACK_PROFILE: GitHubProfile = {
  login: "srikanta2006",
  name: "Srikanta Bellamkonda",
  avatar_url: "https://avatars.githubusercontent.com/u/143273006?v=4",
  html_url: "https://github.com/srikanta2006",
  bio: "Passionate innovator with a focus on AI, full-stack systems, and practical agent orchestration.",
  public_repos: 32,
  followers: 16,
  following: 13,
};

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "Developer_portfolio",
    description: "Personal editorial portfolio website engineered with Next.js 16, React 19, and Tailwind CSS v4.",
    html_url: "https://github.com/srikanta2006/Developer_portfolio",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-11-22",
  },
  {
    id: 2,
    name: "Burst_Blogging",
    description: "High-performance full-stack blogging platform with markdown editor and draft reviews.",
    html_url: "https://github.com/srikanta2006/Burst_Blogging",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2024-10-15",
  },
  {
    id: 3,
    name: "InterviewPilot",
    description: "AI-driven interview rehearsal and question generation co-pilot.",
    html_url: "https://github.com/srikanta2006/InterviewPilot",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2024-09-20",
  },
  {
    id: 4,
    name: "workout_tracker",
    description: "Workout tracking and physical telemetry web application.",
    html_url: "https://github.com/srikanta2006/workout_tracker",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2024-08-11",
  },
  {
    id: 5,
    name: "100-days-of-DSA",
    description: "Core algorithms, data structures, and competitive problem-solving in C++.",
    html_url: "https://github.com/srikanta2006/100-days-of-DSA",
    language: "C++",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2024-07-04",
  },
  {
    id: 6,
    name: "Python_Course",
    description: "Practical Python programming, object-oriented design, and scripting foundations.",
    html_url: "https://github.com/srikanta2006/Python_Course",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2024-06-12",
  },
];

export async function fetchGitHubData(): Promise<GitHubDataResult> {
  const username = "srikanta2006";
  const token = process.env.GITHUB_TOKEN;

  const headers: Record<string, string> = {
    "User-Agent": "Srikanta-Portfolio-NextJS",
    Accept: "application/vnd.github.v3+json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!profileRes.ok || !reposRes.ok) {
      const isRateLimited = profileRes.status === 403 || reposRes.status === 403;
      return {
        profile: FALLBACK_PROFILE,
        repos: FALLBACK_REPOS,
        isFallback: true,
        rateLimited: isRateLimited,
      };
    }

    const profileData: GitHubProfile = await profileRes.json();
    const reposData: GitHubRepo[] = await reposRes.json();

    return {
      profile: {
        login: profileData.login,
        name: profileData.name || profileData.login,
        avatar_url: profileData.avatar_url,
        html_url: profileData.html_url,
        bio: profileData.bio || FALLBACK_PROFILE.bio,
        public_repos: profileData.public_repos,
        followers: profileData.followers,
        following: profileData.following,
      },
      repos: Array.isArray(reposData)
        ? reposData.slice(0, 6).map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description,
            html_url: r.html_url,
            language: r.language,
            stargazers_count: r.stargazers_count,
            forks_count: r.forks_count,
            updated_at: r.updated_at,
          }))
        : FALLBACK_REPOS,
      isFallback: false,
    };
  } catch {
    return {
      profile: FALLBACK_PROFILE,
      repos: FALLBACK_REPOS,
      isFallback: true,
    };
  }
}
