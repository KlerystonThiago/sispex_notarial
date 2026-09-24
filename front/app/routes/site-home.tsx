import type { Route } from "./+types/site-home";
import SiteHome from "../views/site/home-site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SISPEX" },
    { name: "description", content: "SISPEX" },
  ];
}

export default function Home() {
  return <SiteHome />;
}
