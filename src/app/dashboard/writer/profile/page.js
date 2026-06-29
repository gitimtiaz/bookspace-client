"use client";

import { useState } from "react";
import { useAuth } from "@/lib/authContext";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

const INPUT_CLASS =
  "w-full rounded-lg border border-ink/15 bg-parchment px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest disabled:opacity-50 dark:border-parchment/15 dark:bg-ink dark:text-parchment dark:placeholder:text-parchment/40 dark:focus:border-moss";

const LABEL_CLASS = "mb-1 block text-sm font-medium text-ink dark:text-parchment";

export default function WriterProfilePage() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: user?.name ?? "",
    bio: "Writes isekai and cozy magic. Believes every portal fantasy needs a good meal scene.",
    avatarUrl: "",
  });

  const initials = (user?.name ?? "W")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSave(e) {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsLoading(false);
    setIsEditing(false);
    toast.success("Profile updated!");
  }

  return (
    <div>
      <DashboardPageHeader title="Writer Profile" subtitle="Your public author profile." />

      <div className="max-w-xl">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest/20 text-xl font-semibold text-forest dark:bg-moss/20 dark:text-moss">
            {initials}
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-ink dark:text-parchment">{user?.name}</p>
            <span className="inline-block rounded-full bg-forest/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-forest dark:bg-moss/10 dark:text-moss">
              Writer
            </span>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-ink/10 bg-darkCream/40 p-5 dark:border-parchment/10 dark:bg-white/[0.03]">
          <div>
            <label htmlFor="name" className={LABEL_CLASS}>Full Name</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} disabled={!isEditing} className={INPUT_CLASS} />
          </div>
          <div>
            <label htmlFor="email" className={LABEL_CLASS}>Email Address</label>
            <input id="email" type="email" value={user?.email ?? ""} disabled className={INPUT_CLASS} />
            <p className="mt-1 text-xs text-ink/40 dark:text-parchment/40">Email cannot be changed.</p>
          </div>
          <div>
            <label htmlFor="bio" className={LABEL_CLASS}>Author Bio</label>
            <textarea
              id="bio" name="bio" rows={4}
              value={form.bio} onChange={handleChange}
              disabled={!isEditing}
              placeholder="Tell readers about yourself and your writing…"
              className={`${INPUT_CLASS} resize-none`}
            />
          </div>
          <div>
            <label htmlFor="avatarUrl" className={LABEL_CLASS}>Profile Photo URL</label>
            <input id="avatarUrl" name="avatarUrl" type="url" value={form.avatarUrl} onChange={handleChange} disabled={!isEditing} placeholder="https://i.ibb.co/your-photo.jpg" className={INPUT_CLASS} />
          </div>

          <div className="flex gap-3 pt-1">
            {isEditing ? (
              <>
                <Button type="submit" size="sm" disabled={isLoading}>
                  {isLoading ? "Saving…" : "Save Changes"}
                </Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => setIsEditing(false)}>Cancel</Button>
              </>
            ) : (
              <Button type="button" variant="secondary" size="sm" onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
