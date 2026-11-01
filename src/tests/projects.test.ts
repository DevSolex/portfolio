import { describe, it, expect } from "vitest";
import { projects } from "@/data/projects";

const PROFILE_URL = "https://github.com/DevSolex";

describe("projects data", () => {
  it("every project has a name", () => {
    for (const project of projects) {
      expect(project.name.length).toBeGreaterThan(0);
    }
  });

  it("no project repo points to the GitHub profile URL", () => {
    for (const project of projects) {
      expect(project.repo).not.toBe(PROFILE_URL);
      expect(project.repo).not.toBe(`${PROFILE_URL}/`);
    }
  });

  it("every project repo is a valid GitHub URL pointing to a specific repository", () => {
    const repoPattern = /^https:\/\/github\.com\/[^/]+\/[^/]+/;
    for (const project of projects) {
      expect(project.repo).toMatch(repoPattern);
    }
  });

  it("every project has at least one technology listed", () => {
    for (const project of projects) {
      expect(project.technologies.length).toBeGreaterThan(0);
    }
  });

  it("every project has a non-empty description", () => {
    for (const project of projects) {
      expect(project.description.length).toBeGreaterThan(20);
    }
  });

  it("every project has a non-empty contribution", () => {
    for (const project of projects) {
      expect(project.contribution.length).toBeGreaterThan(10);
    }
  });

  it("ConFam has a live URL", () => {
    const confam = projects.find((p) => p.name === "ConFam");
    expect(confam).toBeDefined();
    expect(confam?.live).toBe("https://con-fam.vercel.app/");
  });

  it("Vintique has a live URL", () => {
    const vintique = projects.find((p) => p.name === "Vintique");
    expect(vintique).toBeDefined();
    expect(vintique?.live).toBeDefined();
  });

  it("all live URLs start with https", () => {
    for (const project of projects) {
      if (project.live) {
        expect(project.live).toMatch(/^https:\/\//);
      }
    }
  });
});
