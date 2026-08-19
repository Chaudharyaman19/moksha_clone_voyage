import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const baseUrl = (process.env.SITE_URL || "https://mokshasewa.org").replace(/\/$/, "");
const chromePath = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const reportDir = process.env.LIGHTHOUSE_REPORT_DIR || ".lighthouse";
const minScore = Number(process.env.LIGHTHOUSE_SEO_MIN_SCORE || "100");
const retries = Number(process.env.LIGHTHOUSE_RETRIES || "1");

const defaultRoutes = [
  "/",
  "/about",
  "/request-help",
  "/donation",
  "/contact",
  "/blog",
  "/ambulanceservices",
  "/harsevanservices",
  "/panditservices",
  "/prayerhallservices",
  "/furalservices",
  "/furaldecoration",
  "/callingrelativesservices",
  "/specialservices",
  "/mokshagallery",
  "/mokshavediogallery",
  "/volunteer/register",
  "/privacy-policy",
  "/terms",
];
const requestedRoutes = process.env.LIGHTHOUSE_ROUTES
  ?.split(",")
  .map((route) => route.trim())
  .filter(Boolean);
const routes = requestedRoutes?.length ? requestedRoutes : defaultRoutes;

const profiles = [
  {
    name: "mobile",
    args: ["--form-factor=mobile", "--screenEmulation.mobile=true"],
  },
  {
    name: "desktop",
    args: ["--preset=desktop"],
  },
];

mkdirSync(reportDir, { recursive: true });

const failures = [];

for (const route of routes) {
  for (const profile of profiles) {
    const routeSlug = route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
    const outputPath = join(reportDir, `${routeSlug}-${profile.name}-seo.json`);
    const url = `${baseUrl}${route}`;

    let lastError;

    for (let attempt = 0; attempt <= retries; attempt += 1) {
      try {
        console.log(`Running Lighthouse SEO: ${profile.name} ${url}${attempt ? ` (retry ${attempt})` : ""}`);

        execFileSync(
          "npx",
          [
            "lighthouse",
            url,
            "--only-categories=seo",
            "--chrome-flags=--headless --no-sandbox",
            `--chrome-path=${chromePath}`,
            "--max-wait-for-load=60000",
            "--output=json",
            `--output-path=${outputPath}`,
            ...profile.args,
          ],
          { stdio: "inherit" },
        );

        lastError = undefined;
        break;
      } catch (error) {
        lastError = error;
      }
    }

    if (lastError) {
      failures.push(`${profile.name} ${route} could not complete Lighthouse after ${retries + 1} attempts.`);
      continue;
    }

    const report = JSON.parse(readFileSync(outputPath, "utf8"));
    const score = Math.round(report.categories.seo.score * 100);

    if (score < minScore) {
      const failedAudits = Object.entries(report.audits)
        .filter(([, audit]) => audit.score !== 1 && audit.score !== null && audit.scoreDisplayMode !== "notApplicable")
        .map(([id, audit]) => `${id}: ${audit.title}`)
        .join("; ");

      failures.push(`${profile.name} ${route} scored ${score}. ${failedAudits}`);
    }
  }
}

if (failures.length > 0) {
  console.error("\nLighthouse SEO failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`\nAll ${routes.length} public pages passed Lighthouse SEO at ${minScore} on mobile and desktop.`);
