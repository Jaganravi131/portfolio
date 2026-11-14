"use client";

import { useState } from "react";
import { site } from "@/content/portfolio";

export default function ContactCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanTopic = topic.trim();
    const subject = cleanTopic
      ? `${cleanTopic} — ${cleanName || "Portfolio"}`
      : `Portfolio enquiry${cleanName ? ` — ${cleanName}` : ""}`;

    const body = [
      "Hi Jagan,",
      "",
      note.trim() || "I would like to talk about a role.",
      "",
      cleanName ? `— ${cleanName}` : "",
      email.trim(),
    ]
      .join("\n")
      .replace(/\n{3,}/g, "\n\n");

    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__grid">
        <label className="field">
          <span>Your name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Priya Raman"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>

      <label className="field">
        <span>What it is about</span>
        <input
          name="topic"
          type="text"
          placeholder="A role, a project, a question"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
        />
      </label>

      <label className="field">
        <span>Note</span>
        <textarea
          name="note"
          rows={4}
          placeholder="A sentence or two about what you have in mind."
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
      </label>

      <div className="form__foot">
        <button className="button button--primary" type="submit">
          {sent ? "Mail app opened" : "Draft the email"}
        </button>
        <p className="form__note">
          This form sends nothing. It opens your mail app with the note filled in.
        </p>
      </div>
    </form>
  );
}
