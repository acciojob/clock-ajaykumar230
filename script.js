//your JS code here. If requir
// script.js

function updateTimer() {
  var timerElement = document.getElementById('timer');

  // Get the current date and time
  var currentDate = new Date();

  // Format the date and time
  var date = currentDate.toLocaleDateString();
  var time = currentDate.toLocaleTimeString();

  // Update the timer element
  timerElement.textContent = 'Date: ' + date + ' | Time: ' + time;
}

// Update the timer every second
setInterval(updateTimer, 1000);

	
}