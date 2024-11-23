import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <div className="text-main">
      <Header />

      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
