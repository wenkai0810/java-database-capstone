// modals.js
export function openModal(type) {
  let modalContent = "";

  if (type === "adminLogin") {
    modalContent = `
      <h2>Admin Login</h2>
      <input type="text" id="adminUsername" placeholder="Username" class="input-field">
      <input type="password" id="adminPassword" placeholder="Password" class="input-field">
      <button class="dashboard-btn" id="adminSubmitBtn">Login</button>
    `;
  } else if (type === "doctorLogin") {
    modalContent = `
      <h2>Doctor Login</h2>
      <input type="text" id="doctorEmail" placeholder="Email" class="input-field">
      <input type="password" id="doctorPassword" placeholder="Password" class="input-field">
      <button class="dashboard-btn" id="doctorSubmitBtn">Login</button>
    `;
  } else if (type === "patientLogin") {
    modalContent = `
      <h2>Patient Login</h2>
      <input type="text" id="patientEmail" placeholder="Email" class="input-field">
      <input type="password" id="patientPassword" placeholder="Password" class="input-field">
      <button class="dashboard-btn" id="patientSubmitBtn">Login</button>
    `;
  }

  // Inject into modal
  document.getElementById("modal-body").innerHTML = modalContent;
  document.getElementById("modal").classList.remove("hidden");

  // Close button
  document.getElementById("closeModal").onclick = () => {
    document.getElementById("modal").classList.add("hidden");
  };

  // Attach handlers
  if (type === "adminLogin") {
    document.getElementById("adminSubmitBtn").addEventListener("click", adminLoginHandler);
  }
  if (type === "doctorLogin") {
    document.getElementById("doctorSubmitBtn").addEventListener("click", doctorLoginHandler);
  }
  if (type === "patientLogin") {
    document.getElementById("patientSubmitBtn").addEventListener("click", () => {
      alert("Patient login handler not implemented yet.");
    });
  }
}
