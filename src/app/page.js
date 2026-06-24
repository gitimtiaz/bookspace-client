"use client";

import toast from "react-hot-toast";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-parchment text-ink">
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Welcome to <span className="text-forest">BookSpace</span>
        </h1>

        <span className="mb-8 text-lg md:text-xl">
          A Place To Find All Your Desired eBooks.
        </span>

        <div className="flex gap-4">
          <Button onClick={() => toast.success("Success! Book added.")}>
            Success
          </Button>

          <Button
            variant="secondary"
            onClick={() => toast("This is an information message.")}
          >
            Info
          </Button>

          <Button
            className="bg-red-300 hover:bg-red-600"
            variant="destructive"
            onClick={() => toast.error("Something went wrong!")}
          >
            Error
          </Button>
        </div>
      </section>
    </main>
  );
}