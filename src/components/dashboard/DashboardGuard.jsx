"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/authContext";
import { getRoleHome } from "@/lib/dashboardNav";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Spinner from "@/components/ui/Spinner";

function isRouteAllowed(pathname, role) {
  if (pathname.startsWith("/dashboard/admin") && role !== "admin") return false;
  if (pathname.startsWith("/dashboard/writer") && role !== "writer") return false;
  if (pathname.startsWith("/dashboard/user") && role !== "reader") return false;
  return true;
}

export default function DashboardGuard({ children }) {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      router.push(`/login?from=${encodeURIComponent(pathname)}`);
      return;
    }

    if (!isRouteAllowed(pathname, user.role)) {
      router.push(getRoleHome(user.role));
    }
  }, [user, isLoading, pathname, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Spinner size="lg" className="text-forest" />
      </div>
    );
  }

  if (!user) return null;

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  return (
    <div className="flex min-h-screen bg-parchment dark:bg-ink">
      {/* Sidebar (desktop) + Mobile tabs */}
      <DashboardSidebar user={user} onLogout={handleLogout} />

      {/* Main content area */}
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
