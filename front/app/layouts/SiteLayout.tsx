import { Outlet } from "react-router";
import Navbar from "../components/site/navbar"

export default function SiteLayout() {
  return (
    <>      
        <Navbar />
        <Outlet />      
    </>
  );
}