// welcome.js

// Function to show toast on clicking the 'Like' button
$(document).ready(function () {
  $('#liveToastBtn').on('click', function () {
      $('#liveToast').toast('show');
  });

  // Function to make a GET request to the Bored API on clicking the 'I'm Bored' button
  $('#getGoingBtn').on('click', function () {
      // Using jQuery AJAX for the GET request
      $.ajax({
          url: 'https://www.boredapi.com/api/activity/',
          method: 'GET',
          success: function (response) {
              // Log the response to the console
              console.log(response);
          },
          error: function (error) {
              // Log any errors to the console
              console.error('Error:', error);
          }
      });
  });
});
