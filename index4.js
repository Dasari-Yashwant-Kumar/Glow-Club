let name = localStorage.getItem("name");
let initial = name.charAt(0).toUpperCase();
let updatedname = document.querySelector(".name");
let circle = document.querySelector(".circle");

circle.innerText = initial;
updatedname.innerText = `${name}`;