/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
function greet(timeString){
  let jared = timeString.split(':');
  let hour = parseInt(jared[0]);
  let min = parseInt(jared[1]) 
  if (hour < 12)
  return "Good Morning"
  else if (hour >= 17 && min >= 0)
  return "Good Evening"
  else 
  return "Good Afternoon"
}



/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById("greeting").innerText = message;
}