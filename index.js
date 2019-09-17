/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let s = string.split(':')
  let t = [parseInt(s[0]),parseInt(s[1])]
  if (t[0] < 11 && t[1] <= 59){
    return 'Good Morning';
  } else if (t[0]> 17){
    return 'Good Evening';
  }else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(thing){
  document.getElementById("greeting").innerText = thing
}