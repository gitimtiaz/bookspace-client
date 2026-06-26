const RULES = [
  {
    label: "At least 6 characters",
    test: (pw) => pw.length >= 6,
  },
  {
    label: "One uppercase letter",
    test: (pw) => /[A-Z]/.test(pw),
  },
  {
    label: "One lowercase letter",
    test: (pw) => /[a-z]/.test(pw),
  },
];

export function validatePassword(password) {
  return RULES.every((rule) => rule.test(password));
}

export default function PasswordRules({ password }) {
  if (!password) return null;

  return (
    <ul className="mt-2 space-y-1">
      {RULES.map((rule) => {
        const passes = rule.test(password);
        return (
          <li key={rule.label} className="flex items-center gap-1.5">
            <span
              className={
                passes ? "text-forest" : "text-ink/40"
              }
            >
              {passes ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="9" />
                </svg>
              )}
            </span>
            <span
              className={`text-xs ${
                passes ? "text-forest" : "text-ink/50"
              }`}
            >
              {rule.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
