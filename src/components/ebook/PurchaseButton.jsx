"use client";

import { useAuth } from "@/lib/authContext";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

export default function PurchaseButton({ ebook }) {
  const { user } = useAuth();

  // Not logged in
  if (!user) {
    return (
      <Button
        href={`/login?from=/ebooks/${ebook._id}`}
        size="lg"
        className="w-full sm:w-auto"
      >
        Login to Purchase
      </Button>
    );
  }

  // Writer viewing their own ebook
  if (
    typeof ebook.writerId === "object" &&
    ebook.writerId._id === user._id
  ) {
    return (
      <Button
        variant="outline"
        size="lg"
        disabled
        className="w-full sm:w-auto"
      >
        Your Ebook
      </Button>
    );
  }

  // TODO: replace with real Stripe checkout in backend commit 9
  function handleBuy() {
    toast("Stripe checkout coming soon!", { icon: "💳" });
  }

  return (
    <Button
      size="lg"
      onClick={handleBuy}
      className="w-full sm:w-auto"
    >
      Buy Now — ${ebook.price.toFixed(2)}
    </Button>
  );
}
