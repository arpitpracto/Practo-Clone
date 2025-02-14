import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">
          Healthcare Portal
        </Link>
        <div>
          <Link to="/clinics" className="px-4">
            Clinics
          </Link>
          <Link to="/doctors" className="px-4">
            Doctors
          </Link>
          <Link to="/search" className="px-4">
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
}
