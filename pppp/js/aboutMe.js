// aboutMe.js

// Function to update 'about us' content
$(document).ready(function () {
    // Change content on page load
    updateAboutContent();
  
    // Change background and font color on click
    $('.about-content').on('click', function () {
      $(this).css({
        'background-color': 'powderblue',
        'color': 'white'
      });
    });
  });
  
  // Function to update 'about us' content
  function updateAboutContent() {
    $('.about-content').each(function () {
      $(this).text("Something about myself");
    });
  }
  