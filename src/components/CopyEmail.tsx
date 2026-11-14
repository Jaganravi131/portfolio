"use client";

import { useEffect, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!copied && !failed) return;
    const timer = window.setTimeout(() => {
      setCopied(false);
      setFailed(false);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [copied, failed]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setFailed(true);
    }
  }

  return (
    <span className="copy">
      <button type="button" className="copy__button" onClick={copy}>
        <span aria-hidden="true" className="copy__glyph">
          {copied ? (
            <svg viewBox="0 0 16 16">
              <path d="M3 8.5 6.2 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16">
              <rect x="5.5" y="5.5" width="8" height="8" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M10.5 5.5V3.9A1.4 1.4 0 0 0 9.1 2.5H3.9A1.4 1.4 0 0 0 2.5 3.9v5.2a1.4 1.4 0 0 0 1.4 1.4h1.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          )}
        </span>
        {copied ? "Copied" : failed ? "Select the address" : "Copy address"}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </span>
  );
}
