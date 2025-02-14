package com.practo.ElasticSearchAssignment.service;

import com.practo.ElasticSearchAssignment.entity.Clinic;
import com.practo.ElasticSearchAssignment.entity.Doctor;
import com.practo.ElasticSearchAssignment.index.ClinicIndex;
import com.practo.ElasticSearchAssignment.index.DoctorIndex;
import com.practo.ElasticSearchAssignment.repository.ClinicIndexRepository;
import com.practo.ElasticSearchAssignment.repository.DoctorIndexRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {
    private final DoctorIndexRepository doctorIndexRepository;

    private final ClinicIndexRepository clinicIndexRepository;

    private static final Logger logger = LoggerFactory.getLogger(SearchService.class);

    public SearchService(DoctorIndexRepository doctorIndexRepository, ClinicIndexRepository clinicIndexRepository) {
        this.doctorIndexRepository = doctorIndexRepository;
        this.clinicIndexRepository = clinicIndexRepository;
    }

    public void indexDoctor(Doctor doctor) {
        DoctorIndex doctorIndex = new DoctorIndex();
        doctorIndex.setName(doctor.getName());
        doctorIndex.setMobileNumber(doctor.getMobileNumber());
        doctorIndex.setSpeciality(doctor.getSpeciality());
        doctorIndex.setRegistrationNumber(doctor.getRegistrationNumber());
        doctorIndexRepository.save(doctorIndex);
    }

    public void indexClinic(Clinic clinic) {
        ClinicIndex clinicIndex = new ClinicIndex();
        clinicIndex.setName(clinic.getName());
        clinicIndexRepository.save(clinicIndex);
    }

    public List<DoctorIndex> searchDoctors(String query) {
        List<DoctorIndex> result = new ArrayList<>();
        try {
            List<DoctorIndex> doctorsByName = doctorIndexRepository.findByNameContainingIgnoreCase(query);
            result.addAll(doctorsByName);
        } catch (Exception e) {
            logger.error("Cannot find doctors by name : {}", e.getMessage());
        }
        try {
            List<DoctorIndex> doctorsBySpeciality = doctorIndexRepository.findBySpecialityContainingIgnoreCase(query);
            result.addAll(doctorsBySpeciality);
        } catch (Exception e) {
            logger.error("Cannot find doctors by speciality : {}", e.getMessage());
        }
        return result;
    }

    public List<ClinicIndex> searchClinics(String query) {
        return clinicIndexRepository.findByNameContaining(query);
    }
}
