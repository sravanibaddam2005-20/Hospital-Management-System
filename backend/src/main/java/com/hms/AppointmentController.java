package com.hms;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
@CrossOrigin
public class AppointmentController {

    private final AppointmentRepository repository;

    public AppointmentController(AppointmentRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Appointment> getAppointments() {
        return repository.findAll();
    }

    @PostMapping
    public Appointment bookAppointment(@RequestBody Appointment appointment) {
        return repository.save(appointment);
    }
}
