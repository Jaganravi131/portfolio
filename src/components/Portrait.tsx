"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Drop a portrait at public/jagan.jpg (portrait crop, at least 900x1200).
 * Until the file exists the card falls back to the monogram composition.
 */
export default function Portrait({ initials }: { initials: string }) {
  const [missing, setMissing] = useState(false);

  return (
    <div className="portrait">
      <div className="portrait__frame">
        {missing ? (
          <div className="portrait__fallback">
            <span className="portrait__rings" aria-hidden="true" />
            <span className="portrait__monogram">{initials}</span>
            <span className="portrait__name">Jagan Babu R.</span>
            <span className="portrait__role">Backend &amp; full-stack</span>
          </div>
        ) : (
          <Image
            src="/jagan.jpg"
            alt="Jagan Babu R."
            fill
            priority
            sizes="(max-width: 980px) 40vw, 320px"
            className="portrait__img"
            onError={() => setMissing(true)}
          />
        )}
        <span className="portrait__scan" aria-hidden="true" />
        <span className="portrait__corner portrait__corner--tl" aria-hidden="true" />
        <span className="portrait__corner portrait__corner--br" aria-hidden="true" />
      </div>
    </div>
  );
}
