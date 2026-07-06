import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { href: "/issues", label: "Issues" },
  { href: "/about", label: "About" },
  { href: "/archive", label: "Archive" },
  { href: "/contact", label: "Contact" },
  { href: "/#newsletter", label: "Newsletter" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="font-serif text-xl text-foreground hover:text-accent">
              Concrete Curve
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              An independent magazine exploring design, culture, photography, and visual storytelling.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-medium uppercase tracking-widest text-muted">Navigation</p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">Follow</p>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Concrete Curve. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
