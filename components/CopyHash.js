"use client";

import { useState } from "react";

import Icon from "./Icon";

/** The APK's SHA-256, with a copy button, for people who verify downloads. */
export default function CopyHash({ hash }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(hash);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="hash">
      <span className="hash-label">SHA-256</span>
      <code className="hash-value">{hash}</code>
      <button type="button" className="hash-copy" onClick={copy} aria-label="Copy SHA-256 checksum">
        <Icon name={copied ? "check" : "copy"} size={16} />
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
