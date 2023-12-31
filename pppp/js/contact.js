// contact.js

// Function to update contact details
function updateDetails() {
  // Get telephone number from user input
  var telephone_number = prompt("Enter your telephone number (numbers only):");

  // Validate telephone number format
  while (!/^\d+$/.test(telephone_number)) {
    telephone_number = prompt("Invalid format. Please enter your telephone number (numbers only):");
  }

  // Get email address from user input
  var email_address = prompt("Enter your email address:");

  // Validate email address format
  while (!/@/.test(email_address) || !/\./.test(email_address)) {
    email_address = prompt("Invalid format. Please enter your email address:");
  }

  // Update contact information
  $('#telephone').text("Contact: " + telephone_number);
  $('#address').text("Address: " + email_address);

  // Print data to console
  console.log("Contact: " + telephone_number);
  console.log("Address: " + email_address);
}

// Attach the 'updateDetails' function to the button click
$('#updateContactBtn').on('click', updateDetails);
