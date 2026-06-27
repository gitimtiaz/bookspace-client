export default function BookStackIllustration({ className }) {
  return (
    <svg
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bottom book - wide, moss */}
      <rect x="20" y="260" width="220" height="38" rx="4" fill="#3E7B27" />
      <rect x="20" y="260" width="14" height="38" rx="2" fill="#85A947" />
      <rect x="44" y="270" width="80" height="6" rx="3" fill="#EFE3C2" opacity="0.6" />
      <rect x="44" y="282" width="50" height="4" rx="2" fill="#EFE3C2" opacity="0.3" />

      {/* Second book */}
      <rect x="35" y="210" width="195" height="38" rx="4" fill="#123524" />
      <rect x="35" y="210" width="14" height="38" rx="2" fill="#3E7B27" />
      <rect x="59" y="220" width="90" height="6" rx="3" fill="#EFE3C2" opacity="0.6" />
      <rect x="59" y="232" width="60" height="4" rx="2" fill="#EFE3C2" opacity="0.3" />

      {/* Third book */}
      <rect x="50" y="158" width="170" height="40" rx="4" fill="#2a5c1e" />
      <rect x="50" y="158" width="14" height="40" rx="2" fill="#EFE3C2" opacity="0.8" />
      <rect x="74" y="169" width="70" height="6" rx="3" fill="#EFE3C2" opacity="0.5" />
      <rect x="74" y="181" width="45" height="4" rx="2" fill="#EFE3C2" opacity="0.3" />

      {/* Fourth book */}
      <rect x="62" y="108" width="150" height="38" rx="4" fill="#85A947" />
      <rect x="62" y="108" width="14" height="38" rx="2" fill="#EFE3C2" opacity="0.9" />
      <rect x="86" y="119" width="65" height="6" rx="3" fill="#123524" opacity="0.7" />
      <rect x="86" y="131" width="40" height="4" rx="2" fill="#123524" opacity="0.4" />

      {/* Top book */}
      <rect x="75" y="58" width="130" height="38" rx="4" fill="#3E7B27" />
      <rect x="75" y="58" width="14" height="38" rx="2" fill="#85A947" />
      <rect x="99" y="69" width="55" height="6" rx="3" fill="#EFE3C2" opacity="0.7" />
      <rect x="99" y="81" width="35" height="4" rx="2" fill="#EFE3C2" opacity="0.4" />

      {/* Bookmark ribbon */}
      <path d="M178 58 L178 40 L188 46 L198 40 L198 58" fill="#85A947" opacity="0.9" />

      {/* Shadow */}
      <ellipse cx="130" cy="302" rx="110" ry="8" fill="#000" opacity="0.15" />
    </svg>
  );
}
