import DashboardGuard from "@/components/dashboard/DashboardGuard";

export const metadata = {
  title: "Dashboard — BookSpace",
};

export default function DashboardLayout({ children }) {
  return <DashboardGuard>{children}</DashboardGuard>;
}
