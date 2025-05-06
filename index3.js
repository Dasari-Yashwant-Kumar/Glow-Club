let Name = localStorage.getItem("name");
let checkOut = document.querySelector(".check-out");
let profile = document.querySelector("#profile");
let updatedName = document.querySelector(".welcome");
updatedName.innerText = `Welcome to Glow Club "${Name}"`;

let services = document.querySelectorAll(".img");

services.forEach(services=>{
    services.addEventListener("click", ()=>{
        services.classList.toggle("selected");
    })
    
})


let locations = document.querySelectorAll(".img-1");

locations.forEach(location=>{
    location.addEventListener("click",()=>{
        if (location.classList.contains("chosen")){
            location.classList.remove("chosen");
        } else{
            locations.forEach(location=>location.classList.remove("chosen"));

            location.classList.add("chosen");
        }
    })
})

checkOut.addEventListener("click", ()=> window.location.href = "index5.html")
profile.addEventListener("click", ()=> window.location.href = "index4.html");

const dropdown = document.querySelector("#booking-date");

const today = new Date();

for(let i=0; i<7; i++){
    const date = new Date(today);
    date.setDate(today.getDate() + i);

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");
const format = `${day}-${month}-${year}`;
const displayDate = date.toDateString();

const option = document.createElement("option");
option.value = format;
option.textContent= displayDate;
dropdown.appendChild(option);
}

