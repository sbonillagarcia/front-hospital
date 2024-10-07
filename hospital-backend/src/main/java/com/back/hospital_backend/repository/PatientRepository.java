package com.back.hospital_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.back.hospital_backend.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    // Aquí puedes definir métodos personalizados si es necesario
}

