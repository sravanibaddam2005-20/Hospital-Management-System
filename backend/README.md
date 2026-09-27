# HMS Backend

Simple Hospital Management System backend using Java Spring Boot and MySQL.

## Main parts
- Patient management
- Doctor management
- Appointment management

## Before running
1. Create MySQL database:
   CREATE DATABASE hms;
2. Open application.properties.
3. Change the MySQL password if your password is not `root`.
4. Run HmsApplication.java.

Backend URL:
http://localhost:8080

API examples:
GET  http://localhost:8080/patients
POST http://localhost:8080/patients
GET  http://localhost:8080/doctors
POST http://localhost:8080/doctors
GET  http://localhost:8080/appointments
POST http://localhost:8080/appointments
