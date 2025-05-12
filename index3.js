let Name = localStorage.getItem("name");
let checkOut = document.querySelector(".check-out");
let profile = document.querySelector("#profile");
let updatedName = document.querySelector(".welcome");
updatedName.innerText = `Welcome to Glow Club "${Name}"`;

const searchInput = document.querySelector("#search");
const treatment = document.querySelectorAll("#services");
const places = document.querySelectorAll("#location");

const searchableItems = [...treatment, ...places];

searchInput.addEventListener("input", ()=>{
    const term = searchInput.value.toLowerCase();

    searchableItems.forEach(item=>{
        const text = item.innerText.toLowerCase();
         if(!term){
            item.style.opacity = "1";
        }else if(text.includes(term)){
            item.style.opacity = "1";
        }else{
             item.style.opacity = "0.3";
        }
    })
    
})

searchInput.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        event.preventDefault();
        const term = searchInput.value.toLowerCase();
    searchableItems.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(term)) {
                item.style.opacity = "1";
                item.scrollIntoView({ behavior: "smooth", block: "center" });
            } else{
                item.style.opacity = "0.3";
            }
         });
      }
    }

)
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

dropdown.addEventListener("change", ()=>{
    const selectedDate = dropdown.value;
    localStorage.setItem("selectedDate", selectedDate)
})

let booking = document.querySelector("#booking-time");


booking.addEventListener("change", ()=>{
    let selectedTime = booking.value;
    localStorage.setItem("selectedTime", selectedTime);
})

const salon = document.querySelectorAll(".services-info .serv-2");

salon.forEach(salon => {
    const img = salon.querySelector("img");
    const name = salon.querySelector("p");

    img.addEventListener("click", () => {
        const selectedSalon = name.innerText;
        localStorage.setItem("selectedSalon", selectedSalon);
        console.log("Selected salon:", selectedSalon);
    });
});

const serviceItem = document.querySelectorAll(".services-info .serv-1");

const serviceCosts = {
    "Haircut": 150,
    "Shaving": 100,
    "Facial": 250,
    "Hairdyeing": 1000,
    "Massage": 120,
    "Nailcare": 200 
};

serviceItem.forEach(service => {
    const img = service.querySelector("img");
    const name = service.querySelector("p");

   img.addEventListener("click", () => {
    let selectedService = name.innerText.trim();

    let selectedServices = JSON.parse(localStorage.getItem("selectedServices")) || [];

    if (!selectedServices.some(s => s.name === selectedService)) {
        let serviceCost = serviceCosts[selectedService];
        selectedServices.push({ name: selectedService, cost: serviceCost });
        localStorage.setItem("selectedServices", JSON.stringify(selectedServices));
    }
});

});

localStorage.removeItem("selectedServices");





