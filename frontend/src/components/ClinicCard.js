import { Link } from "react-router-dom";

export default function ClinicCard({ clinic }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{clinic.name}</h2>
      <p>{clinic.address}</p>
      <p>{clinic.contactNumber}</p>
      <p>{clinic.email}</p>
      <Link
        to={`/clinics/${clinic.id}`} // ✅ Navigate to Clinic Details Page
        className="text-blue-500 mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}
