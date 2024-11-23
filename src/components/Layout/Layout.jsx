import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <div className="text-main flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
