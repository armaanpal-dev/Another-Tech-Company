/* ============================================================
   Icon set.

   Single-weight outline icons drawn on a 24px grid. Everything is
   stroked in currentColor, so an icon picks up whatever colour its
   container has and works on both the dark stage and the light zones
   without a second copy.
   ============================================================ */

const P = {
  video: <><rect x="2" y="5" width="14" height="14" rx="3" /><path d="m16 10.5 5.2-3.1a.6.6 0 0 1 .9.5v8.2a.6.6 0 0 1-.9.5L16 13.5z" /></>,
  cart: <><path d="M2.5 4h2l2.3 10.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L20 8H6" /><circle cx="9.5" cy="19.5" r="1.4" /><circle cx="17" cy="19.5" r="1.4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3.2 9.5h17.6M3.2 14.5h17.6" /><path d="M12 3c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3z" /></>,
  mobile: <><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M10.5 18.5h3" /></>,
  palette: <><path d="M12 3a9 9 0 0 0 0 18c1.1 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-.9.8-1.7 1.7-1.7H16a5 5 0 0 0 5-5c0-4-4-7.3-9-7.3z" /><circle cx="7.8" cy="11.5" r="1.1" /><circle cx="11" cy="7.8" r="1.1" /><circle cx="15.6" cy="9" r="1.1" /></>,
  tag: <><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 12V5a2 2 0 0 1 2-2h7c.5 0 1 .2 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z" /><circle cx="7.8" cy="7.8" r="1.4" /></>,
  chart: <><path d="M3 21h18" /><path d="M6.5 21v-5.5M11.5 21V9M16.5 21v-8.5M21 21V5" /></>,
  bolt: <><path d="M13.5 2 4.8 13.2a.5.5 0 0 0 .4.8H10l-1 8 8.8-11.2a.5.5 0 0 0-.4-.8H12.5z" /></>,
  gallery: <><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m5 16.5 3.8-3.8 2.7 2.7 3.4-4.2 4.1 5.3" /><circle cx="8.6" cy="9.2" r="1.3" /></>,
  box: <><path d="m21 7.8-9-4.8-9 4.8v8.4l9 4.8 9-4.8z" /><path d="m3.2 7.9 8.8 4.7 8.8-4.7M12 12.6V21" /></>,
  pin: <><rect x="2.5" y="4" width="19" height="16" rx="2.5" /><rect x="12.5" y="12" width="7" height="5.5" rx="1.2" /></>,
  page: <><path d="M14 2.8H7.5a2.5 2.5 0 0 0-2.5 2.5v13.4a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5V7.8z" /><path d="M14 2.8V8h5" /><path d="M8.5 13h7M8.5 16.5h4.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 6.8V12l3.4 2.1" /></>,
  gift: <><rect x="2.8" y="8" width="18.4" height="4.2" rx="1.2" /><path d="M4.8 12.2v7a1.8 1.8 0 0 0 1.8 1.8h10.8a1.8 1.8 0 0 0 1.8-1.8v-7M12 8v13" /><path d="M12 8S10.8 3.2 8.4 3.2a2.4 2.4 0 0 0 0 4.8zM12 8s1.2-4.8 3.6-4.8a2.4 2.4 0 0 1 0 4.8z" /></>,
  puzzle: <><path d="M9.6 3.4a2.2 2.2 0 0 1 4.4 0V5h2.6a1.8 1.8 0 0 1 1.8 1.8V9.4h1.4a2.2 2.2 0 0 1 0 4.4h-1.4v3.4a1.8 1.8 0 0 1-1.8 1.8H14v-1.4a2.2 2.2 0 0 0-4.4 0V19H7a1.8 1.8 0 0 1-1.8-1.8V13.8H3.8a2.2 2.2 0 0 1 0-4.4h1.4V6.8A1.8 1.8 0 0 1 7 5h2.6z" /></>,
  eye: <><path d="M2.2 12S6 5.5 12 5.5 21.8 12 21.8 12 18 18.5 12 18.5 2.2 12 2.2 12z" /><circle cx="12" cy="12" r="3.1" /></>,
  pointer: <><path d="m8.4 8.4 4.6 11.2 1.7-4.9 4.9-1.7z" /><path d="M6.8 2.6 7.5 5M2.6 6.8 5 7.5M5 15l-2.4.7M15 5l.7-2.4" /></>,
  trending: <><path d="m3 16.5 5.6-5.6 3.5 3.5L21 5.5" /><path d="M15.2 5.5H21v5.8" /></>,
  check: <><path d="m5 12.5 4.6 4.6L19 6.8" /></>,
  chat: <><path d="M21 14.5a2.5 2.5 0 0 1-2.5 2.5H8l-5 3.8V5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5z" /></>,
  card: <><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="M2.5 9.8h19" /><path d="M6.5 14.6h3.2" /></>,
  rocket: <><path d="M12 2.4s4.4 2.6 4.4 8.3c0 2.3-.8 4.2-1.3 5.2H8.9c-.5-1-1.3-2.9-1.3-5.2C7.6 5 12 2.4 12 2.4z" /><path d="M8.9 15.9 6.2 18.2l.9 3.1 2.6-1.4M15.1 15.9l2.7 2.3-.9 3.1-2.6-1.4" /><circle cx="12" cy="9.4" r="1.7" /></>,
  sliders: <><path d="M4 7h8M16.5 7H20M4 12h3.5M12 12h8M4 17h8M16.5 17H20" /><circle cx="14.2" cy="7" r="1.8" /><circle cx="9.7" cy="12" r="1.8" /><circle cx="14.2" cy="17" r="1.8" /></>,
  sparkle: <><path d="m12 3 1.9 5.4L19.5 10l-5.6 1.6L12 17l-1.9-5.4L4.5 10l5.6-1.6z" /><path d="m18.5 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></>,
  target: <><circle cx="12" cy="12" r="8.6" /><circle cx="12" cy="12" r="4.6" /><circle cx="12" cy="12" r="1" /></>,
  layers: <><path d="m12 2.8 9 4.6-9 4.6-9-4.6z" /><path d="m3 12.4 9 4.6 9-4.6M3 16.9l9 4.6 9-4.6" /></>,
  shield: <><path d="M12 2.8 19.2 6v5.6c0 4.4-3 7.6-7.2 9.2-4.2-1.6-7.2-4.8-7.2-9.2V6z" /><path d="m9 11.8 2.2 2.2L15.2 10" /></>,
  arrow: <><path d="M7.5 16.5 16.5 7.5" /><path d="M9.2 7.5h7.3v7.3" /></>,
};

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.6 }) {
  const d = P[name];
  if (!d) return null;
  return (
    <svg
      className={`icon ${className}`}
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
      {d}
    </svg>
  );
}
