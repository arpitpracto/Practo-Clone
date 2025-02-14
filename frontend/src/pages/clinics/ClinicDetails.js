import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ClinicDetails() {
    const { id } = useParams(); // Get the ID from the URL
    const [clinic, setClinic] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/clinics/${id}`)
                .then(response => setClinic(response.data))
                .catch(error => console.error("Error fetching clinic details:", error));
        }
    }, [id]);

    if (!clinic) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">{clinic.name}</h1>
            <p><strong>Address:</strong> {clinic.address}</p>
            <p><strong>Contact:</strong> {clinic.contactNumber}</p>
            <p><strong>Email:</strong> {clinic.email}</p>
            <p><strong>Website:</strong> {clinic.website || "N/A"}</p>
            <h2 className="text-xl font-semibold mt-4">Doctors</h2>
            <ul>
                {clinic.doctors && clinic.doctors.map(doctor => (
                    <li key={doctor.id}>{doctor.name} - {doctor.speciality}</li>
                ))}
            </ul>
        </div>
    );
}
