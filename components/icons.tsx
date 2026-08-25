type P = { size?: number; color?: string; className?: string };
const s = (n = 24) => ({ width: n, height: n, viewBox: "0 0 24 24", fill: "none" });

export const ChevronLeft = ({ size = 24, color = "currentColor" }: P) => (
  <svg {...s(size)}><path d="M15 5L8.5 12L15 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const ArrowRight = ({ size = 16, color = "currentColor" }: P) => (
  <svg {...s(size)}><path d="M9.4 6L15 12L9.4 18" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const Close = ({ size = 12, color = "currentColor" }: P) => (
  <svg {...s(size)}><path d="M6 6L18 18M18 6L6 18" stroke={color} strokeWidth="2.6" strokeLinecap="round" /></svg>
);
export const Check = ({ size = 20, color = "currentColor" }: P) => (
  <svg {...s(size)}><path d="M5 12.5L9.8 17L19 7.5" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const Eye = ({ size = 20, color = "currentColor" }: P) => (
  <svg {...s(size)}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.7" />
  </svg>
);
export const EyeOff = ({ size = 20, color = "currentColor" }: P) => (
  <svg {...s(size)}>
    <path d="M2.5 12S6 5.5 12 5.5c1.7 0 3.2.5 4.4 1.2M21.5 12s-3.5 6.5-9.5 6.5c-1.8 0-3.3-.6-4.6-1.3" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
    <path d="M4 4l16 16" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);
export const CircleCheck = ({ size = 15, color = "currentColor" }: P) => (
  <svg {...s(size)}>
    <circle cx="12" cy="12" r="9.2" stroke={color} strokeWidth="1.7" />
    <path d="M7.8 12.2l2.9 2.8 5.5-5.6" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const CircleExclamation = ({ size = 15, color = "currentColor" }: P) => (
  <svg {...s(size)}>
    <circle cx="12" cy="12" r="9.2" stroke={color} strokeWidth="1.7" />
    <path d="M12 7.2v6" stroke={color} strokeWidth="1.9" strokeLinecap="round" />
    <circle cx="12" cy="16.6" r="1.05" fill={color} />
  </svg>
);
export const MailFill = ({ size = 20, color = "currentColor" }: P) => (
  <svg {...s(size)}>
    <path fill={color} d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8.263-7.212q.137-.038.262-.113L19.6 8.25q.2-.125.3-.312.1-.188.1-.413 0-.5-.425-.75t-.875.025L12 11 5.3 6.8q-.45-.275-.875-.012Q4 7.05 4 7.525q0 .25.1.438.1.187.3.287l7.075 4.425q.125.075.263.113.137.037.262.037.125 0 .263-.037Z" />
  </svg>
);
export const KakaoLogo = ({ size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path fill="#191919" d="M10 3C5.86 3 2.5 5.62 2.5 8.86c0 2.07 1.37 3.89 3.44 4.93l-.87 3.2c-.08.28.24.5.48.34l3.83-2.53c.2.02.41.03.62.03 4.14 0 7.5-2.62 7.5-5.86S14.14 3 10 3Z" />
  </svg>
);
export const GoogleLogo = ({ size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 20 20">
    <path fill="#3D82F0" d="M19.6 10.23c0-.71-.06-1.39-.18-2.05H10v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.89-1.74 2.98-4.3 2.98-7.36Z" />
    <path fill="#31A752" d="M10 20c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H1.06v2.59A10 10 0 0 0 10 20Z" />
    <path fill="#F9BA00" d="M4.41 11.92a5.99 5.99 0 0 1 0-3.83V5.5H1.06a10 10 0 0 0 0 9l3.35-2.58Z" />
    <path fill="#E64234" d="M10 3.96c1.47 0 2.79.51 3.83 1.5l2.87-2.87C14.95.99 12.7 0 10 0A10 10 0 0 0 1.06 5.5l3.35 2.59C5.2 5.72 7.4 3.96 10 3.96Z" />
  </svg>
);

/* ── Material Symbols Rounded · filled (tab bar) ── */
const M = (d: string) => ({ d });
export const HomeFill = ({ size = 26, color = "currentColor" }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M 4 19 L 4 10 Q 4 9.525 4.213 9.1 Q 4.425 8.675 4.8 8.4 L 10.8 3.9 Q 11.325 3.5 12 3.5 Q 12.675 3.5 13.2 3.9 L 19.2 8.4 Q 19.575 8.675 19.788 9.1 Q 20 9.525 20 10 L 20 19 Q 20 19.825 19.413 20.413 Q 18.825 21 18 21 L 15 21 Q 14.575 21 14.288 20.713 Q 14 20.425 14 20 L 14 15 Q 14 14.575 13.713 14.288 Q 13.425 14 13 14 L 11 14 Q 10.575 14 10.288 14.288 Q 10 14.575 10 15 L 10 20 Q 10 20.425 9.713 20.713 Q 9.425 21 9 21 L 6 21 Q 5.175 21 4.588 20.413 Q 4 19.825 4 19 Z" /></svg>
);
export const SchoolFill = ({ size = 26, color = "currentColor" }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M 21 16 L 21 10.1 L 12.95 14.475 Q 12.5 14.725 12 14.725 Q 11.5 14.725 11.05 14.475 L 2.6 9.875 Q 2.325 9.725 2.212 9.5 Q 2.1 9.275 2.1 9 Q 2.1 8.725 2.212 8.5 Q 2.325 8.275 2.6 8.125 L 11.05 3.525 Q 11.275 3.4 11.513 3.338 Q 11.75 3.275 12 3.275 Q 12.25 3.275 12.488 3.338 Q 12.725 3.4 12.95 3.525 L 22.475 8.725 Q 22.725 8.85 22.863 9.088 Q 23 9.325 23 9.6 L 23 16 Q 23 16.425 22.713 16.713 Q 22.425 17 22 17 Q 21.575 17 21.288 16.713 Q 21 16.425 21 16 Z M 11.05 20.475 L 6.05 17.775 Q 5.55 17.5 5.275 17.025 Q 5 16.55 5 16 L 5 12.2 L 11.05 15.475 Q 11.5 15.725 12 15.725 Q 12.5 15.725 12.95 15.475 L 19 12.2 L 19 16 Q 19 16.55 18.725 17.025 Q 18.45 17.5 17.95 17.775 L 12.95 20.475 Q 12.725 20.6 12.488 20.663 Q 12.25 20.725 12 20.725 Q 11.75 20.725 11.513 20.663 Q 11.275 20.6 11.05 20.475 Z" /></svg>
);
export const ChartFill = ({ size = 26, color = "currentColor" }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M 17 20 Q 16.575 20 16.288 19.713 Q 16 19.425 16 19 L 16 14 Q 16 13.575 16.288 13.288 Q 16.575 13 17 13 L 19 13 Q 19.425 13 19.713 13.288 Q 20 13.575 20 14 L 20 19 Q 20 19.425 19.713 19.713 Q 19.425 20 19 20 L 17 20 Z M 11 20 Q 10.575 20 10.288 19.713 Q 10 19.425 10 19 L 10 5 Q 10 4.575 10.288 4.288 Q 10.575 4 11 4 L 13 4 Q 13.425 4 13.713 4.288 Q 14 4.575 14 5 L 14 19 Q 14 19.425 13.713 19.713 Q 13.425 20 13 20 L 11 20 Z M 5 20 Q 4.575 20 4.288 19.713 Q 4 19.425 4 19 L 4 10 Q 4 9.575 4.288 9.287 Q 4.575 9 5 9 L 7 9 Q 7.425 9 7.713 9.287 Q 8 9.575 8 10 L 8 19 Q 8 19.425 7.713 19.713 Q 7.425 20 7 20 L 5 20 Z" /></svg>
);
export const PersonFill = ({ size = 26, color = "currentColor" }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M 9.175 10.825 Q 8 9.65 8 8 Q 8 6.35 9.175 5.175 Q 10.35 4 12 4 Q 13.65 4 14.825 5.175 Q 16 6.35 16 8 Q 16 9.65 14.825 10.825 Q 13.65 12 12 12 Q 10.35 12 9.175 10.825 Z M 4 18 L 4 17.2 Q 4 16.35 4.438 15.638 Q 4.875 14.925 5.6 14.55 Q 7.15 13.775 8.75 13.388 Q 10.35 13 12 13 Q 13.65 13 15.25 13.388 Q 16.85 13.775 18.4 14.55 Q 19.125 14.925 19.563 15.638 Q 20 16.35 20 17.2 L 20 18 Q 20 18.825 19.413 19.413 Q 18.825 20 18 20 L 6 20 Q 5.175 20 4.588 19.413 Q 4 18.825 4 18 Z" /></svg>
);
export const Bell = ({ size = 24, color = "currentColor" }: P) => (
  <svg {...s(size)}>
    <path d="M6 9a6 6 0 1 1 12 0c0 3.2.7 4.6 1.4 5.4.5.6.1 1.6-.7 1.6H5.3c-.8 0-1.2-1-.7-1.6C5.3 13.6 6 12.2 6 9Z" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M9.8 19a2.3 2.3 0 0 0 4.4 0" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);
export const Play = ({ size = 20, color = "currentColor" }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M6.4 4.6c0-1.1 1.2-1.8 2.1-1.2l9.5 5.9c.9.6.9 2 0 2.6l-9.5 5.9c-.9.6-2.1-.1-2.1-1.2Z" transform="translate(0 1)" /></svg>
);
