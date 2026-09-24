
import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <div className="admin-layout flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2>Menu do Admin</h2>
      </aside>
      
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}