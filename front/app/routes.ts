import { type RouteConfig, route, index, layout } from "@react-router/dev/routes";

export default [
  layout("./layouts/SiteLayout.tsx", [
    index("./routes/site-home.tsx"),
  ]),

  layout("./layouts/AdminLayout.tsx", [
    route("admin/dashboard/", "./routes/admin-dashboard.tsx"),
  ]),
] satisfies RouteConfig;