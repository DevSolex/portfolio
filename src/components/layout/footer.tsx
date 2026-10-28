import Link from "next/link";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted">
          © {year} Samaila Solomon Monday
        </p>
        <div className="flex items-center gap-4 text-sm text-muted">
          <Link
            href="https://github.com/DevSolex"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/samaila-solomon-monday/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com/DevSolex"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            X
          </Link>
        </div>
      </div>
    </footer>
  );
}
