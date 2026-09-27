# 🏥 Hospital Management System

[Java](https://www.java.com/) [Spring Boot](https://spring.io/projects/spring-boot) [MySQL](https://www.mysql.com/) [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📌 Project Overview

The **Hospital Management System (HMS)** is a web-based application developed to manage basic hospital activities in one place.

The system helps hospital staff manage **patients, doctors, and appointments**. Instead of maintaining these details manually, the information can be added, viewed, and managed through the website.

The project uses **Spring Boot** for the backend, **MySQL** for storing data, and **HTML, CSS, and JavaScript** for the frontend.

---

## 🎯 Objectives

* Manage patient details easily
* Manage doctor information
* Schedule and manage appointments
* Store hospital data safely in MySQL
* Reduce manual record keeping
* Provide a simple and easy-to-use interface
* Connect the frontend with the backend using REST APIs

---

## 🖥️ Main Features

### 👤 Patient Management

* Add new patient details
* View patient information
* Store patient records in MySQL
* Retrieve patient information when required

### 👨‍⚕️ Doctor Management

* Add doctor details
* View doctor information
* Store doctor records in MySQL

### 📅 Appointment Management

* Add appointments
* Manage patient-doctor appointments
* Store appointment information
* View appointment records

---

## 🔄 How the System Works

The basic working flow is:

```text
User
  ↓
Frontend
  ↓
REST API
  ↓
Spring Boot Backend
  ↓
JPA / Hibernate
  ↓
MySQL Database
```

For example, when a staff member adds a patient:

```text
Enter Patient Details
        ↓
Frontend sends request
        ↓
Spring Boot Controller
        ↓
JPA / Hibernate
        ↓
MySQL Patient Table
        ↓
Patient details are stored
```

---

## 🛠️ Technology Stack

| Component             | Technology            |
| --------------------- | --------------------- |
| Frontend              | HTML, CSS, JavaScript |
| Backend               | Java, Spring Boot     |
| Database              | MySQL                 |
| Database Connectivity | Spring Data JPA       |
| ORM                   | Hibernate             |
| Web Server            | Apache Tomcat         |
| Build Tool            | Maven                 |

---

## 🏗️ Backend

The backend is developed using **Spring Boot**.

It handles:

* Patient data
* Doctor data
* Appointment data
* REST API requests
* Database operations

### Backend Flow

```text
Frontend Request
       ↓
Controller
       ↓
Repository
       ↓
JPA / Hibernate
       ↓
MySQL
```

### Important Backend Components

**Controller**

Receives requests from the frontend and sends responses.

**Entity**

Represents the data that is stored in the database.

**Repository**

Used to perform database operations such as saving and retrieving records.

**JPA / Hibernate**

Helps the Java application communicate with MySQL without writing SQL for every basic operation.

---

## 🗄️ Database

The project uses **MySQL** as the database.

The main tables are:

```text
Patient
Doctor
Appointment
```

For example, patient information is stored in the **patient table**.

To view the stored patient records:

```sql
SELECT * FROM patient;
```

The same database is used by the backend to save and retrieve hospital information.

---

## 🌐 Frontend

The frontend is developed using:

* HTML
* CSS
* JavaScript

The frontend provides the user interface where hospital staff can enter and view patient, doctor, and appointment information.

JavaScript communicates with the Spring Boot backend through REST APIs.

---

## 📂 Project Structure

```text
HMS_Project/
│
├── backend/
│   │
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/hms/
│   │       │
│   │       └── resources/
│   │
│   ├── pom.xml
│   └── README.md
│
└── frontend/
    │
    ├── index.html
    ├── script.js
    └── style.css
```

---

## ⚙️ Installation & Setup

### Prerequisites

* Java 17 or above
* Maven
* MySQL
* Web Browser

### Step 1 — Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Hospital-Management-System.git
```

### Step 2 — Open the Backend

```bash
cd HMS_Project/backend
```

### Step 3 — Start the Spring Boot Application

```bash
mvn spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### Step 4 — Open the Frontend

Go to the `frontend` folder and open:

```text
index.html
```

The HMS website will open in the browser.

---

## ▶️ How to Run the Project

First start the **Spring Boot backend**.

Then open the **frontend `index.html`** in a browser.

Keep the backend running while using the website.

```text
Start Backend
     ↓
Spring Boot runs on port 8080
     ↓
Open index.html
     ↓
Use HMS Website
```

---

## 🔐 Access

The system is intended for **authorized hospital staff**.

In a real deployment, authentication and role-based access can be used so that only authorized users can access patient and hospital information.

---

## 📊 Data Management

The system stores information in MySQL instead of keeping it only in the browser.

For example:

```text
Patient Details
      ↓
Spring Boot
      ↓
JPA / Hibernate
      ↓
MySQL
      ↓
patient table
```

This allows the stored information to be retrieved whenever it is needed.

---

## 💡 Advantages

* Easy to manage hospital records
* Reduces manual paperwork
* Faster access to patient information
* Centralized database
* Simple user interface
* Easy communication between frontend and backend

---

## 🚀 Future Improvements

The project can be improved by adding:

* User login and authentication
* Admin and doctor roles
* Patient login
* Online appointment booking
* Prescription management
* Billing management
* Medical report management
* Cloud deployment
* Better security and access control

---

## 🎓 What I Learned

Through this project, I learned how to:

* Develop a backend using Spring Boot
* Create and use REST APIs
* Connect Java applications with MySQL
* Use Spring Data JPA and Hibernate
* Develop a frontend using HTML, CSS, and JavaScript
* Connect frontend and backend
* Store and retrieve data from a database
* Run and test a complete web application

---

## 👨‍💻 Author

**Sravani**

GitHub:
https://github.com/sravanibaddam2005-20/

---

## 📄 License

This project is for educational and academic purposes.
