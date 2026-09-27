let patients = [];
let appointments = [];

function showSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("patientForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const patient = {
        name: document.getElementById("patientName").value,
        age: document.getElementById("patientAge").value,
        gender: document.getElementById("patientGender").value,
        phone: document.getElementById("patientPhone").value,
        problem: document.getElementById("patientProblem").value
    };

    patients.push(patient);
    displayPatients();
    this.reset();

    alert("Patient registered successfully!");
});

function displayPatients() {
    const table = document.getElementById("patientTable");
    table.innerHTML = "";

    patients.forEach(function(patient) {
        const row = `
            <tr>
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.gender}</td>
                <td>${patient.phone}</td>
                <td>${patient.problem}</td>
            </tr>
        `;
        table.innerHTML += row;
    });

    document.getElementById("patientCount").textContent = patients.length;
}

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const appointment = {
        patient: document.getElementById("appointmentPatient").value,
        doctor: document.getElementById("appointmentDoctor").value,
        date: document.getElementById("appointmentDate").value,
        time: document.getElementById("appointmentTime").value
    };

    appointments.push(appointment);
    displayAppointments();
    this.reset();

    alert("Appointment booked successfully!");
});

function displayAppointments() {
    const table = document.getElementById("appointmentTable");
    table.innerHTML = "";

    appointments.forEach(function(appointment) {
        const row = `
            <tr>
                <td>${appointment.patient}</td>
                <td>${appointment.doctor}</td>
                <td>${appointment.date}</td>
                <td>${appointment.time}</td>
            </tr>
        `;
        table.innerHTML += row;
    });

    document.getElementById("appointmentCount").textContent = appointments.length;
}
