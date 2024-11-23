import { Link } from "react-router-dom";

export default function AllLink() {
  return (
    <div className="text-center mt-10">
      <Link to="/services" className="p-3 inline-block font-bold bg-accent">
        Все услуги
      </Link>
    </div>
  );
}
