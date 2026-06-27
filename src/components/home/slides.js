export const SLIDES = [
  {
    id: "discover",
    tag: "Light Novels · Web Fiction · Serials",
    headline: ["Discover & Read", "Original Ebooks"],
    accentLine: 1,
    description:
      "BookSpace connects readers with independent writers publishing serialized light novels, web fiction, and one-shot stories — all in one place.",
    cta: { label: "Browse Ebooks", href: "/browse" },
    secondaryCta: { label: "Become a Writer", href: "/register?role=writer" },
    stats: [
      { value: "2,400+", label: "Ebooks" },
      { value: "380+", label: "Writers" },
      { value: "18K+", label: "Readers" },
    ],
    illustration: "books",
  },
  {
    id: "publish",
    tag: "For Writers · Publish & Earn",
    headline: ["Turn Your Ideas Into", "Published Ebooks"],
    accentLine: 1,
    description:
      "Upload your stories, set your price, and reach thousands of readers. One-time writer verification. Full control over your catalogue.",
    cta: { label: "Become a Writer", href: "/register?role=writer" },
    secondaryCta: { label: "See How It Works", href: "/about" },
    stats: [
      { value: "Free", label: "To Read" },
      { value: "100%", label: "Your Content" },
      { value: "Stripe", label: "Payouts" },
    ],
    illustration: "quill",
  },
  {
    id: "library",
    tag: "Your Digital Library",
    headline: ["Your Digital Library", "In One Place"],
    accentLine: 1,
    description:
      "Purchase once, read forever. Pick up where you left off across any device with reading progress tracking built right in.",
    cta: { label: "Start Reading", href: "/browse" },
    secondaryCta: { label: "Create Account", href: "/register" },
    stats: [
      { value: "Instant", label: "Access" },
      { value: "Chapter", label: "Tracking" },
      { value: "Any", label: "Device" },
    ],
    illustration: "openbook",
  },
];
