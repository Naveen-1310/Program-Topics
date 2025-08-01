const myEg = document.getElementById("myEg");
myEg.addEventListener("click", event => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH! 🫤"; 
});

const myEv = document.getElementById("myEv");

myEv.addEventListener("click", event => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH! 🫤"; 
});

myEv.addEventListener("mouseover", event => {
event.target.style.backgroundColor = "yellow";
event.target.textContent = "Don't do it👀";
});

myEv.addEventListener("mouseout", event => {
event.target.style.backgroundColor = "lightgreen";
event.target.textContent = "Click Me 😶‍🌫️";
});


const myEx = document.getElementById("myEx");
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", event => {
myEx.style.backgroundColor="tomato";
myEx.textContent = "OUCH!";
});
myButton.addEventListener("mouseover", event => {
myEx.style.backgroundColor = "yellow";
myEx.textContent = "Don't do it👀";
});
myButton.addEventListener("mouseout", event => {
myEx.style.backgroundColor = "lightgreen";
myEx.textContent ="Click Me 😶‍🌫️";
});