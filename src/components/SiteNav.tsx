"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function SiteNav({ initials, name }: { initials: string; name: string }) {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = links.map((link) => link.href.slice(1));

    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const probe = window.innerHeight * 0.38;
      let current = "";

      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        if (section.getBoundingClientRect().top <= probe) {
          current = `#${id}`;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        current = "#contact";
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" aria-label={`${name}, back to top`}>
          <span className="nav__mark" aria-hidden="true">
            {initials}
          </span>
          <span className="nav__name">
            Jagan Babu R.
            <small>backend · full-stack · Chennai</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "is-active" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <span className="status">
            <i aria-hidden="true" />
            Open to work
          </span>
          <a className="button button--small" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
