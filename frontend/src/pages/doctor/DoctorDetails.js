import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DoctorDetails() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http:///localhost:8080/doctors/${id}`)
                .then(response => setDoctor(response.data))
                .catch(error => console.error("Error fetching doctor details:", error));
        }
    }, [id]);

    if (!doctor) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">{doctor.name}</h1>
            <p><strong>Speciality:</strong> {doctor.speciality}</p>
            <p><strong>Experience:</strong> {doctor.experience} years</p>
            <p><strong>Qualification:</strong> {doctor.qualification}</p>
            <p><strong>Email:</strong> {doctor.email}</p>
            <p><strong>Mobile:</strong> {doctor.mobileNumber}</p>
            <p><strong>Clinic:</strong> {doctor.clinic?.name || "N/A"}</p>
        </div>
    );
}
