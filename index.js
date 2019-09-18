/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const time = timeString.split(":");
  hour = time[0];
  let message

  if (hour < 12) {
    message = "Good Morning";
  } else if (hour < 17) {
    message = "Good Afternoon";
  } else {
    message = "Good Evening";
  }

  return message
}




/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let greeting = document.getElementById("greeting")
  greeting.innerHTML = message
}