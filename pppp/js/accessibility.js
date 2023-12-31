// accessibility.js

// Function to toggle text color and background color
function toggleAccessibility() {
  var tableRows = $('table tr');

  if ($('#accessibilityToggle').prop('checked')) {
    // Toggle switch is 'On'
    tableRows.css({
      'color': 'white',
      'background-color': 'black',
      'font-size': '120%'
    });
  } else {
    // Toggle switch is 'Off'
    tableRows.css({
      'color': 'black',
      'background-color': 'white',
      'font-size': '100%'
    });
  }
}

// Attach the 'toggleAccessibility' function to the toggle switch change event
$('#accessibilityToggle').on('change', toggleAccessibility);
