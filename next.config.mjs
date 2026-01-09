/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "rithik-portfolio";

const nextConfig = {
  output: "export",

  ...(isGithubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
