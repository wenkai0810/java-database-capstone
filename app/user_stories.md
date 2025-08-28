# Smart Clinic System – User Stories Brief

This document summarizes the functional user stories for **Admin**, **Doctor**, and **Patient** roles in the Smart Clinic system. Each story ensures system usability, data integrity, and security.  

---

## **Admin Role**
**Goal:** Manage users and monitor operations for system reliability and compliance.  

1. **Admin Login** – Securely log in with credentials to access the admin dashboard.  
2. **Admin Logout** – Log out safely to terminate session and return to login screen.  
3. **Add Doctor** – Create new doctor profiles with valid data saved in MySQL.  
4. **Delete Doctor Profile** – Remove inactive doctors (no future appointments linked).  
5. **View Monthly Appointments** – Run stored procedure to get monthly appointment counts.  

---

## **Doctor Role**
**Goal:** Access schedules and patient data to provide efficient care.  

1. **Doctor Login** – Authenticate and access doctor dashboard with upcoming schedule.  
2. **Doctor Logout** – End session securely to protect personal data.  
3. **View Appointment Calendar** – See appointments in daily/weekly/monthly view.  
4. **Mark Unavailability** – Block time slots to prevent patient bookings.  
5. **View Patient Details** – Access patient info (name, visit reason, history) for appointments.  

---

## **Patient Role**
**Goal:** Explore, book, and manage appointments efficiently and securely.  

1. **View Doctors (No Login)** – Browse doctors’ names, specialties, and contact info.  
2. **Patient Sign-Up** – Register with email/password to create an account.  
3. **Patient Login** – Access dashboard and manage appointments after authentication.  
4. **Book Appointment** – Select doctor/date/time, verify availability, confirm booking.  
5. **View Upcoming Appointments** – See list of all future consultations with details.  
