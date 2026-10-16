// Outline icons drawn for this site (24px grid, currentColor).
const paths = {
  download: <><path d="M12 4v11" /><path d="m7 10.5 5 5 5-5" /><path d="M5 19.5h14" /></>,
  play: <path d="M8 5.5v13l10.5-6.5z" />,
  apps: <><rect x="4" y="4" width="6.5" height="6.5" rx="1.6" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6" /></>,
  reels: <><rect x="3.5" y="4.5" width="17" height="15" rx="3" /><path d="M3.5 9h17M9 4.5 11 9M14.5 4.5l2 4.5" /><path d="m10.5 12 4 2.25-4 2.25z" /></>,
  stories: <><circle cx="12" cy="12" r="8.5" strokeDasharray="3.2 2.2" /><circle cx="12" cy="12" r="4.5" /></>,
  live: <><circle cx="12" cy="12" r="2.5" /><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14" /></>,
  call: <path d="M5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 6.1 1.5 1.5 0 0 1 5 4.5z" />,
  chat: <path d="M4.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-4.5 3.5V16.5h-1a2 2 0 0 1-2-2z" transform="translate(1 0)" />,
  camera: <><path d="M4 8.5a2 2 0 0 1 2-2h2l1.5-2h5L16 6.5h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><circle cx="12" cy="13" r="3.5" /></>,
  gift: <><rect x="4" y="9" width="16" height="11" rx="1.5" /><path d="M3 9h18M12 9v11" /><path d="M12 9c-1.5-3.5-5.5-4-5.5-1.5S9.5 9 12 9zM12 9c1.5-3.5 5.5-4 5.5-1.5S14.5 9 12 9z" /></>,
  shield: <><path d="M12 3.5 19 6v5.5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z" /><path d="m8.8 12 2.2 2.2 4.4-4.4" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  copy: <><rect x="8.5" y="8.5" width="11" height="11" rx="2" /><path d="M15.5 8.5v-2a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  android: <><rect x="5" y="9" width="14" height="10" rx="2" /><path d="M8 9a4 4 0 0 1 8 0M7.5 5l1.5 2M16.5 5 15 7" /><circle cx="9.5" cy="12.5" r=".6" fill="currentColor" /><circle cx="14.5" cy="12.5" r=".6" fill="currentColor" /></>,
  file: <><path d="M7 3.5h7l4 4v13H7z" /><path d="M14 3.5v4h4" /></>,
  toggle: <><rect x="3.5" y="7.5" width="17" height="9" rx="4.5" /><circle cx="16" cy="12" r="2.6" fill="currentColor" /></>,
  rocket: <><path d="M12 3.5c3.5 2 5 5.5 5 9l-2.5 3h-5L7 12.5c0-3.5 1.5-7 5-9z" /><circle cx="12" cy="10" r="1.6" /><path d="M9.5 15.5 8 20l4-2 4 2-1.5-4.5" /></>,
  refresh: <><path d="M19 12a7 7 0 1 1-2.05-4.95" /><path d="M19 4.5v4h-4" /></>,
};

export default function Icon({ name, size = 22, className = "", strokeWidth = 1.8 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
