import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navigation } from "@/components/layout/navigation";

describe("Navigation", () => {
  beforeEach(() => {
    render(<Navigation />);
  });

  it("renders the site name link", () => {
    expect(screen.getByText("Samaila Solomon Monday")).toBeInTheDocument();
  });

  it("renders all nav links in the desktop menu", () => {
    const nav = screen.getByRole("navigation", { name: /primary/i });
    expect(nav).toBeInTheDocument();

    const labels = ["About", "Experience", "Projects", "Skills", "Contact"];
    for (const label of labels) {
      // Each label appears at least once (desktop + possibly mobile)
      const links = screen.getAllByRole("link", { name: label });
      expect(links.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("renders the Download CV link with correct href", () => {
    const cvLinks = screen.getAllByRole("link", { name: /download cv/i });
    expect(cvLinks.length).toBeGreaterThanOrEqual(1);
    expect(cvLinks[0]).toHaveAttribute(
      "href",
      "/Samaila-Solomon-Monday-CV.pdf"
    );
  });

  it("mobile menu is not visible on initial render", () => {
    expect(screen.queryByRole("region", { name: /mobile/i })).toBeNull();
    // The mobile menu div should not be in the DOM yet
    const mobileMenu = document.getElementById("mobile-menu");
    expect(mobileMenu).toBeNull();
  });

  it("mobile menu button has correct aria-label when closed", () => {
    const button = screen.getByRole("button", { name: /open menu/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("opens mobile menu on button click", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /open menu/i });

    await user.click(button);

    const mobileMenu = document.getElementById("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toHaveAttribute("aria-label", "Close menu");
  });

  it("closes mobile menu on second button click", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /open menu/i });

    await user.click(button);
    expect(document.getElementById("mobile-menu")).toBeInTheDocument();

    await user.click(button);
    expect(document.getElementById("mobile-menu")).toBeNull();
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("closes mobile menu when a nav link is clicked", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /open menu/i });

    await user.click(button);
    expect(document.getElementById("mobile-menu")).toBeInTheDocument();

    // Click the first mobile nav link
    const mobileAboutLinks = screen.getAllByRole("link", { name: "About" });
    // There may be a desktop (hidden via CSS) and a mobile version; click the last one
    await user.click(mobileAboutLinks[mobileAboutLinks.length - 1]);

    expect(document.getElementById("mobile-menu")).toBeNull();
  });
});
