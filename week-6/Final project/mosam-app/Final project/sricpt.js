// ===== CONTACT FORM VALIDATION =====
document.addEventListener("DOMContentLoaded", function() {

  const visitForm = document.getElementById("visitForm");

  visitForm.addEventListener("submit", function(e){
    e.preventDefault(); // Prevent default form submit

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const alertBox = document.getElementById("alertBox");

    // Clear previous alerts
    alertBox.innerHTML = "";

    // Validation
    let errors = [];

    if(name === "") errors.push("Name cannot be empty.");
    if(phone === "" || isNaN(phone)) errors.push("Phone number must be numeric and not empty.");
    if(message === "") errors.push("Message cannot be empty.");

    if(errors.length > 0) {
      // Show error alert (red)
      alertBox.innerHTML = `
        <div class="alert alert-danger">
          <ul>${errors.map(err => `<li>${err}</li>`).join("")}</ul>
        </div>
      `;
    } else {
      // Show success alert (green)
      alertBox.innerHTML = `
        <div class="alert alert-success">
          ✅ Visit Scheduled Successfully!
        </div>
      `;

      // Optional: Reset form
      visitForm.reset();
    }
  });

});
