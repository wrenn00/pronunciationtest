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
