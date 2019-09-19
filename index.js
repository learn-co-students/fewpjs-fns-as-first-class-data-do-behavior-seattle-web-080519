/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let greeting = '';
  let timeArray = timeString.split('');
  let copyTimeArray = []
  for(let i = 0; i < timeArray.length; i++) {
    if (timeArray[i] !== ':') {
      copyTimeArray.push(timeArray[i]);
    }
  }
  timeString = copyTimeArray.join('');
  const time = parseInt(timeString);
  if (0 <= time && time < 1200 ) {
    greeting = "Good Morning"
  } else if (1200 <= time && time <= 1700) {
    greeting = "Good Afternoon"
  } else if (1700 < time && time <= 2359) {
    greeting = "Good Evening"
  } else {
    greeting = "Please enter a valid time"
  }
  return greeting;
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting){
  const element = document.getElementById("greeting");
  element.innerText= greeting;
}
