package com.practo.ElasticSearchAssignment.index;

import jakarta.persistence.Id;
import lombok.ToString;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@ToString
@Document(indexName = "doctors")
public class DoctorIndex {
    @Id
    private String  id;

    @Field(type = FieldType.Text)
    private String name;

    @Field(type = FieldType.Text)
    private String speciality;

    @Field(type = FieldType.Text)
    private String mobileNumber;

    @Field(type = FieldType.Text)
    private String registrationNumber;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }
}
