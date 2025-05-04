let updateName = localStorage.getItem("name");

let updatedName = document.querySelector(".welcome");
updatedName.innerText = `Welcome to Glow Club ${updateName}`;