// Get the button element
const hireButton = document.getElementById('hireButton');

function openPopup() {
  var popupWindow = window.open('/forms/consultant_hire_form.html', '_blank', 'width=600,height=400');
  // Perform your desired action here when the button is clicked
  // For example, show an alert
  // alert('Thank you for your interest! We will be in touch soon.');
}

// Add click event listener to the button
hireButton.addEventListener('click', openPopup);


// Function to display the modal with the error message
function showErrorModal(message) {
  const modal = document.getElementById('errorModal');
  const errorMessageElement = document.getElementById('errorMessage');
  errorMessageElement.textContent = message;
  modal.style.display = 'block';

  // Close the modal when the close button or outside the modal is clicked
  const closeBtn = document.querySelector('.close');
  window.onclick = function(event) {
    if (event.target == modal || event.target == closeBtn) {
      modal.style.display = 'none';
    }
  };
}

// Example code that throws an error (for demonstration purposes)
try {
  // Code that might throw an error
  throw new Error('This is a sample error message.');
} catch (error) {
  // Handle the error and display the modal
  showErrorModal(error.message);
}


// countdown clock

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 / 60 / 60)) % 24);
  var days = Math.floor(t / ((1000 / 60 / 60) * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

// example 15 days out
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// example 1 day out = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000);

if (new Date() > deadline) {
  alert("COUNTDOWN COMPLETE! \n Some Call to Action!!!");
}

initializeClock("clockdiv", deadline);