"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { USER_MENU_ITEMS } from "@/lib/navigation";

export default function UserMenu({ userName = "Reader", onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = userName.slice(0, 1).toUpperCase();

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-moss/30 text-sm font-semibold text-ink"
        aria-label="Account menu"
        aria-expanded={isOpen}
      >
        {initials}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-lg border border-ink/10 bg-parchment py-1 shadow-lg">
          {USER_MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-ink/80 hover:bg-ink/5"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onLogout?.();
            }}
            className="block w-full px-4 py-2 text-left text-sm text-ink/80 hover:bg-ink/5"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
