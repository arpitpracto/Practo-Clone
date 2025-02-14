import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{doctor.name}</h2>
      <p>Speciality: {doctor.speciality}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Contact: {doctor.mobileNumber}</p>
      <Link
        to={`/doctors/${doctor.id}`} // ✅ Navigate to Doctor Details Page
        className="text-blue-500 mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}
