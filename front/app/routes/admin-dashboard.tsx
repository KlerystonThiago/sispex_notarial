import type { Route } from "./+types/site-home";
import AdminDashboard from "../views/admin/admin-dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SISPEX" },
    { name: "description", content: "SISPEX" },
  ];
}

export default function Home() {
  return <AdminDashboard />;
}