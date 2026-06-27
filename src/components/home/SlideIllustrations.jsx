export function BooksIllustration({ className }) {
  return (
    <svg viewBox="0 0 280 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="130" cy="292" rx="110" ry="8" fill="#000" opacity="0.15" />
      <rect x="20" y="252" width="220" height="38" rx="4" fill="#3E7B27" />
      <rect x="20" y="252" width="14" height="38" rx="2" fill="#85A947" />
      <rect x="44" y="262" width="80" height="6" rx="3" fill="#EFE3C2" opacity="0.6" />
      <rect x="44" y="274" width="50" height="4" rx="2" fill="#EFE3C2" opacity="0.3" />
      <rect x="35" y="202" width="195" height="38" rx="4" fill="#123524" />
      <rect x="35" y="202" width="14" height="38" rx="2" fill="#3E7B27" />
      <rect x="59" y="212" width="90" height="6" rx="3" fill="#EFE3C2" opacity="0.6" />
      <rect x="59" y="224" width="60" height="4" rx="2" fill="#EFE3C2" opacity="0.3" />
      <rect x="50" y="150" width="170" height="40" rx="4" fill="#2a5c1e" />
      <rect x="50" y="150" width="14" height="40" rx="2" fill="#EFE3C2" opacity="0.8" />
      <rect x="74" y="161" width="70" height="6" rx="3" fill="#EFE3C2" opacity="0.5" />
      <rect x="74" y="173" width="45" height="4" rx="2" fill="#EFE3C2" opacity="0.3" />
      <rect x="62" y="100" width="150" height="38" rx="4" fill="#85A947" />
      <rect x="62" y="100" width="14" height="38" rx="2" fill="#EFE3C2" opacity="0.9" />
      <rect x="86" y="111" width="65" height="6" rx="3" fill="#123524" opacity="0.7" />
      <rect x="86" y="123" width="40" height="4" rx="2" fill="#123524" opacity="0.4" />
      <rect x="75" y="50" width="130" height="38" rx="4" fill="#3E7B27" />
      <rect x="75" y="50" width="14" height="38" rx="2" fill="#85A947" />
      <rect x="99" y="61" width="55" height="6" rx="3" fill="#EFE3C2" opacity="0.7" />
      <rect x="99" y="73" width="35" height="4" rx="2" fill="#EFE3C2" opacity="0.4" />
      <path d="M178 50 L178 32 L188 38 L198 32 L198 50" fill="#85A947" opacity="0.9" />
    </svg>
  );
}

export function QuillIllustration({ className }) {
  return (
    <svg viewBox="0 0 280 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="40" y="60" width="180" height="220" rx="8" fill="#EFE3C2" opacity="0.12" stroke="#EFE3C2" strokeOpacity="0.2" strokeWidth="1" />
      <rect x="40" y="60" width="180" height="220" rx="8" fill="none" stroke="#85A947" strokeOpacity="0.3" strokeWidth="1" />
      {[100, 120, 140, 160, 180, 200, 220, 240].map((y, i) => (
        <rect key={y} x="65" y={y} width={i % 3 === 2 ? 80 : 130} height="5" rx="2.5" fill="currentColor" opacity="0.18" />
      ))} 
      
      <path d="M210 50 C240 20 255 80 220 110 C210 100 195 85 185 80 C195 70 205 58 210 50Z" fill="#85A947" opacity="0.9" />
      <path d="M210 50 C230 55 235 85 215 108" stroke="#3E7B27" strokeWidth="1.5" fill="none" />
      <path d="M215 108 L175 245" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" /> target
      <path d="M175 245 L168 252 L174 248 L170 256" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> 
      
      <circle cx="174" cy="250" r="8" fill="#85A947" opacity="0.25" />
      <ellipse cx="130" cy="292" rx="100" ry="7" fill="#000" opacity="0.12" />
    </svg>
  );
}

export function OpenBookIllustration({ className }) {
  return (
    <svg viewBox="0 0 280 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="140" cy="170" rx="100" ry="80" fill="currentColor" opacity="0.08" />
      <path d="M140 100 C140 100 80 95 50 105 L45 240 C75 230 140 235 140 235Z" fill="currentColor" opacity="0.08" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" /> 
      <path d="M140 100 C140 100 200 95 230 105 L235 240 C205 230 140 235 140 235Z" fill="currentColor" opacity="0.06" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" /> 
      <path d="M140 100 L140 235" stroke="#85A947" strokeWidth="2" strokeOpacity="0.6" />
      {[130, 148, 166, 184, 202].map((y) => (
        <line key={`l${y}`} x1="70" y1={y} x2="128" y2={y + 2} stroke="currentColor" strokeWidth="4" strokeOpacity="0.2" strokeLinecap="round" />
      ))} 
      {[130, 148, 166, 184, 202].map((y) => (
        <line key={`r${y}`} x1="152" y1={y + 2} x2="210" y2={y} stroke="currentColor" strokeWidth="4" strokeOpacity="0.2" strokeLinecap="round" />
      ))} 
      <circle cx="140" cy="68" r="18" fill="#85A947" opacity="0.2" />
      <circle cx="140" cy="68" r="10" fill="#85A947" opacity="0.35" />
      <circle cx="140" cy="68" r="5" fill="currentColor" opacity="0.75" /> 
      <path d="M140 78 L140 100" stroke="#EFE3C2" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
      <ellipse cx="130" cy="290" rx="105" ry="7" fill="#000" opacity="0.12" />
    </svg>
  );
}
