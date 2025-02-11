document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('EKOKARTForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const aadhar = document.getElementById('aadhar_number').value.trim();

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      alert("❌ Please enter a valid 10-digit mobile number.");
      return;
    }

    const aadharPattern = /^\d{12}$/;
    if (aadhar !== "" && !aadharPattern.test(aadhar)) {
      alert("❌ Please enter a valid 12-digit Aadhar number.");
      return;
    }

    console.log("✅ Form submitted successfully. Redirecting...");
    
    setTimeout(() => {
      window.location.href = "ewaste.html"; 
    }, 1000);
  });
});
