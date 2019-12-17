/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

// window.onload is a function that works everytime the page is loaded, ex: when refresh button is pressed
window.onload = function() {
  //Simple message to show on the console
  console.log("Here's my latest excuse");

  // define variables/arrays
  let who = ["Alexandra", "Alejandro", "Juan", "Aura"];
  let action = ["ate", "went", "was going to", "came"];
  let what = ["my homework", "my checkbook", "my car keys"];
  let when = ["yesterday", "last week", "in 2018"];

  // call the function to generate the random number
  randomNum(length);

  // create the string that's going to replace the text in the html element you want to change
  let excuseGenerator =
    who[randomNum(who.length)] +
    " " +
    action[randomNum(action.length)] +
    " " +
    what[randomNum(what.length)] +
    " " +
    when[randomNum(when.length)];

  // tell code to create a variable called elementTarget and find an element with id excuse and select it
  let elementTarget = document.querySelector("#excuse");
  // tell code to replace the inner HTML, the one between tags, to replace it with whatever comes from the generated string
  elementTarget.innerHTML = excuseGenerator;
};

// Function definition to generate random number. CAREFUL WITH PARENTHESIS AND GROUPING!!!!!!
function randomNum(length) {
  var arrayPos = Math.floor(Math.random() * (length - 1)) + 0; // Use length -1 to account for position 0 in the array
  return arrayPos;
}
