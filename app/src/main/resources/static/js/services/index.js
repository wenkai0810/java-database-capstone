// index.js

import { openModal } from "../components/modals.js";
import { API_BASE_URL } from "../config/config.js";

const ADMIN_API = `${API_BASE_URL}/api/admin/login`;
const DOCTOR_API = `${API_BASE_URL}/api/doctors/login`;

// Attach event listeners after DOM loads
window.onload = () => {
  document.getElementById("openAdminModalBtn")?.addEventListener("click", () => {
    console.log("Admin button clicked");
    openModal("adminLogin");
  });

  document.getElementById("openDoctorModalBtn")?.addEventListener("click", () => {
    console.log("Doctor button clicked");
    openModal("doctorLogin");
  });

  document.getElementById("openPatientModalBtn")?.addEventListener("click", () => {
    console.log("Patient button clicked");
    openModal("patientLogin");
  });
};

// === Admin Login Handler ===
window.adminLoginHandler = async function () {
  const username = document.getElementById("adminUsername")?.value;
  const password = document.getElementById("adminPassword")?.value;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  try {
    const response = await fetch(ADMIN_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      alert("Invalid admin credentials.");
      return;
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("userRole", "admin");
    alert("Admin logged in successfully!");
  } catch (error) {
    console.error("Admin login failed:", error);
    alert("An error occurred. Please try again later.");
  }
};

// === Doctor Login Handler ===
window.doctorLoginHandler = async function () {
  const email = document.getElementById("doctorEmail")?.value;
  const password = document.getElementById("doctorPassword")?.value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  try {
    const response = await fetch(DOCTOR_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      alert("Invalid doctor credentials.");
      return;
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("userRole", "doctor");
    alert("Doctor logged in successfully!");
  } catch (error) {
    console.error("Doctor login failed:", error);
    alert("An error occurred. Please try again later.");
  }
};
