document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('EKOKARTForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const aadhar = document.getElementById('aadhar_number').value.trim();

    // Mobile number validation (10 digits)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      alert("❌ Please enter a valid 10-digit mobile number.");
      return;
    }

    // Aadhar validation (optional but must be 12 digits if entered)
    const aadharPattern = /^\d{12}$/;
    if (aadhar !== "" && !aadharPattern.test(aadhar)) {
      alert("❌ Please enter a valid 12-digit Aadhar number.");
      return;
    }

    console.log("✅ Form submitted successfully. Redirecting...");

    // Redirect after successful validation
    window.location.href = "ewaste.html";
  });
});
