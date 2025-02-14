package com.practo.ElasticSearchAssignment.repository;

import com.practo.ElasticSearchAssignment.index.DoctorIndex;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import javax.print.Doc;
import java.util.List;

@Repository
public interface DoctorIndexRepository extends ElasticsearchRepository<DoctorIndex, Long> {
    List<DoctorIndex> findByNameContainingOrSpecialityContaining(String name, String speciality);

    List<DoctorIndex> findByNameContainingIgnoreCase(String name);

    List<DoctorIndex> findBySpecialityContainingIgnoreCase(String speciality);
}
