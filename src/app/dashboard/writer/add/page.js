"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { uploadToImgBB } from "@/lib/uploadImgBB";
import { DUMMY_EBOOKS } from "@/lib/dummyData";

const GENRES = [
  "Isekai", "Fantasy", "Romance", "Slice of Life",
  "Thriller", "Mystery", "Sci-Fi", "Horror",
];

const INPUT_CLASS =
  "w-full rounded-lg border border-ink/15 bg-parchment px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest dark:border-parchment/15 dark:bg-ink dark:text-parchment dark:placeholder:text-parchment/40 dark:focus:border-moss";

const LABEL_CLASS = "mb-1 block text-sm font-medium text-ink dark:text-parchment";

const EMPTY_FORM = {
  title: "",
  description: "",
  price: "",
  genre: "Fantasy",
  format: "single",
  totalChapters: "",
};

function AddEbookForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");
  const isEditing = !!editId;

  const [form, setForm] = useState(EMPTY_FORM);
  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill form when editing
  useEffect(() => {
    if (!isEditing) return;
    const ebook = DUMMY_EBOOKS.find((e) => e._id === editId);
    if (ebook) {
      setForm({
        title: ebook.title,
        description: "Edit this description…",
        price: ebook.price.toString(),
        genre: ebook.genre,
        format: ebook.format,
        totalChapters: ebook.totalChapters?.toString() ?? "",
      });
      if (ebook.coverImageUrl) setCoverPreview(ebook.coverImageUrl);
    }
  }, [editId, isEditing]);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be under 5 MB.");
      return;
    }
    setCoverFile(file);
    const reader = new FileReader();
    reader.onload = () => setCoverPreview(reader.result);
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.price || !form.description) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      let coverImageUrl = coverPreview;

      // Upload new cover if a file was selected
      if (coverFile) {
        setIsUploading(true);
        toast("Uploading cover image…", { icon: "📷" });
        coverImageUrl = await uploadToImgBB(coverFile);
        setIsUploading(false);
      }

      const payload = {
        ...form,
        price: parseFloat(form.price),
        totalChapters: form.format === "serialized" ? parseInt(form.totalChapters) : 1,
        coverImageUrl,
      };

      // TODO: replace with real API call when backend is ready
      // await apiFetch(isEditing ? `/api/ebooks/${editId}` : "/api/ebooks", {
      //   method: isEditing ? "PATCH" : "POST",
      //   body: payload,
      // });

      toast.success(isEditing ? "Ebook updated!" : "Ebook published!");
      router.push("/dashboard/writer/ebooks");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
      setIsUploading(false);
    }
  }

  return (
    <div>
      <DashboardPageHeader
        title={isEditing ? "Edit Ebook" : "Add New Ebook"}
        subtitle={isEditing ? "Update your ebook details." : "Publish a new ebook to your catalogue."}
      />

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">

        {/* Cover upload */}
        <div>
          <p className={LABEL_CLASS}>Cover Image</p>
          <div className="flex items-start gap-4">
            {/* Preview */}
            <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-lg border border-ink/15 bg-ink/5 dark:border-parchment/15 dark:bg-parchment/5">
              {coverPreview ? (
                <Image src={coverPreview} alt="Cover preview" fill className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-ink/20 dark:text-parchment/20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              )}
            </div>

            {/* File input */}
            <div className="flex flex-col gap-2">
              <label className="cursor-pointer rounded-lg border border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:border-forest hover:text-forest dark:border-parchment/15 dark:text-parchment/70 dark:hover:border-moss dark:hover:text-moss">
                {isUploading ? "Uploading…" : "Choose Image"}
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleFileChange}
                  className="sr-only"
                  disabled={isUploading}
                />
              </label>
              <p className="text-xs text-ink/40 dark:text-parchment/40">
                PNG, JPEG or WebP · Max 5 MB
              </p>
              {coverFile && (
                <p className="text-xs text-moss">
                  ✓ {coverFile.name}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className={LABEL_CLASS}>Title <span className="text-red-500">*</span></label>
          <input
            id="title" name="title" type="text" required
            value={form.title} onChange={handleChange}
            placeholder="e.g. The Iron Citadel Chronicles"
            className={INPUT_CLASS}
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className={LABEL_CLASS}>Description <span className="text-red-500">*</span></label>
          <textarea
            id="description" name="description" rows={5} required
            value={form.description} onChange={handleChange}
            placeholder="Write a compelling summary of your ebook…"
            className={`${INPUT_CLASS} resize-none`}
          />
        </div>

        {/* Price + Genre row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className={LABEL_CLASS}>Price (USD) <span className="text-red-500">*</span></label>
            <input
              id="price" name="price" type="number"
              min="0.99" max="99.99" step="0.01" required
              value={form.price} onChange={handleChange}
              placeholder="4.99"
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label htmlFor="genre" className={LABEL_CLASS}>Genre</label>
            <select id="genre" name="genre" value={form.genre} onChange={handleChange} className={INPUT_CLASS}>
              {GENRES.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>

        {/* Format + Chapters row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="format" className={LABEL_CLASS}>Format</label>
            <select id="format" name="format" value={form.format} onChange={handleChange} className={INPUT_CLASS}>
              <option value="single">One-shot (complete)</option>
              <option value="serialized">Serialized (chapters)</option>
            </select>
          </div>
          {form.format === "serialized" && (
            <div>
              <label htmlFor="totalChapters" className={LABEL_CLASS}>Total Chapters</label>
              <input
                id="totalChapters" name="totalChapters" type="number"
                min="1" value={form.totalChapters} onChange={handleChange}
                placeholder="e.g. 24"
                className={INPUT_CLASS}
              />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 border-t border-ink/10 pt-4 dark:border-parchment/10">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Spinner size="sm" className="text-parchment" />
                {isUploading ? "Uploading cover…" : isEditing ? "Saving…" : "Publishing…"}
              </span>
            ) : (
              isEditing ? "Save Changes" : "Publish Ebook"
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => router.push("/dashboard/writer/ebooks")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function AddEbookPage() {
  return (
    <Suspense>
      <AddEbookForm />
    </Suspense>
  );
}
