/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
} 

function addCheckbox() {
	var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  document.getElementById("content1").appendChild(x);
  
}

function addRadio(){
  var y = document.createElement("INPUT");
  y.setAttribute("type", "radio");
  document.getElementById("content2").appendChild(y);
}

function addButton() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "button");
  x.setAttribute("value", "Click me");
  document.body.appendChild(x);
}

function addDate() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "date");
  x.setAttribute("value", "2014-02-09");
  document.body.appendChild(x);
}

function addSearch() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "search");
  document.body.appendChild(x);
}

function addText() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "Hello World!");
  document.body.appendChild(x);
}