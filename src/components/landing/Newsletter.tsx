"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section id="newsletter" className="py-16 md:py-24" aria-labelledby="newsletter-heading">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <SectionHeading
            title="Newsletter"
            description="Stay informed when new issues are published."
            className="mb-8 [&_p]:mx-auto"
          />
          <h2 id="newsletter-heading" className="sr-only">
            Newsletter
          </h2>

          {submitted ? (
            <p className="text-base text-accent-muted" role="status">
              Thank you for subscribing. We&apos;ll be in touch when the next issue arrives.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Input
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                className="sm:flex-1"
              />
              <Button type="submit" className="sm:shrink-0">
                Subscribe
              </Button>
            </form>
          )}

          <p className="mt-6 text-xs leading-relaxed text-muted">
            We respect your privacy. Your email is used only to notify you about new issues and will never be shared.
          </p>
        </div>
      </Container>
    </section>
  );
}
