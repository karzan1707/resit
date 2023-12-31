// table.js
document.addEventListener('DOMContentLoaded', function () {
  var rowCount = 1;

  function addRow(name, age, hobby, imageSrc) {
      var table = document.getElementById('personalTable');
      var row = table.insertRow(-1);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);

      cell1.textContent = name;
      cell2.textContent = age;
      cell3.textContent = hobby;

      var image = document.createElement('img');
      image.src = imageSrc;
      image.alt = 'Person Image';
      image.className = 'table-image';
      cell4.appendChild(image);

      // Attach click event to the image
      image.addEventListener('click', function () {
          window.open(imageSrc, '_blank');
      });

      rowCount++;
  }

  // Example usage:
  addRow('John', 25, 'Reading', 'images/john-image.jpg');
  addRow('Alice', 30, 'Running', 'images/alice-image.jpg');
  addRow('Bob', 22, 'Swimming', 'images/bob-image.jpg');
  addRow('Emma', 28, 'Painting', 'images/emma-image.jpg');
  addRow('David', 35, 'Cycling', 'images/david-image.jpg');

  // Change font color on hover for odd rows
  var tableRows = document.querySelectorAll('#personalTable tbody tr:nth-child(odd)');
  tableRows.forEach(function (row) {
      row.addEventListener('mouseover', function () {
          this.style.color = 'pink';
      });

      row.addEventListener('mouseout', function () {
          this.style.color = 'black';
      });
  });
});