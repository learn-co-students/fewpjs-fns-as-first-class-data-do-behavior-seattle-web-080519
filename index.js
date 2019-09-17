/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr) {
  // We're going to create a web greeting! You're provided text input field in which 
  // you should enter a time in 24 hour time. 
  // When you click the Submit button, some provided code will run which will make calls to two functions.

  const hour = parseInt(timeStr, 10);
  if (hour < 12) return "Good Morning"
  if (hour > 17) return "Good Evening"
  return "Good Afternoon"

}

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;

}