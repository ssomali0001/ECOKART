document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('EKOKARTForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values & trim spaces
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const aadhar_number = document.getElementById('aadhar_number').value.trim();
    const address = document.getElementById('address').value.trim();
    const errorContainer = document.getElementById('errorMessages');

    // Clear previous errors
    errorContainer.innerHTML = "";

    // Validate required fields
    if (!name || !address) {
      showError("Name and Address are required.");
      return;
    }

    // Validate mobile number (should be exactly 10 digits)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      showError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Validate Aadhar number (if entered, should be 12 digits)
    const aadharPattern = /^\d{12}$/;
    if (aadhar_number && !aadharPattern.test(aadhar_number)) {
      showError("Please enter a valid 12-digit Aadhar number.");
      return;
    }

    // Disable submit button to prevent multiple clicks
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Processing...";

    // Optional: Store data in localStorage (to retrieve on the next page)
    localStorage.setItem('userData', JSON.stringify({ name, mobile, aadhar_number, address }));

    // Redirect to ewaste.html page
    window.location.href = "ewaste.html";  
  });

  // Function to show error messages
  function showError(message) {
    const errorContainer = document.getElementById('errorMessages');
    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorElement.style.color = "red";
    errorContainer.appendChild(errorElement);
  }
});
