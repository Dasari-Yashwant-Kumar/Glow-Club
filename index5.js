let date = document.querySelector("#date");
let selectedDate = localStorage.getItem("selectedDate");
let selectedTime = localStorage.getItem("selectedTime");
let time = document.querySelector("#time");
let clubName = document.querySelector("#club-name");
let selectedClub = localStorage.getItem("selectedSalon");
let selectedServices = JSON.parse(localStorage.getItem("selectedServices")) || [];
let services = document.querySelector(".services");
let cost = document.querySelector(".cost");
let totalElement = document.querySelector("#total");
let totalAmount = 0;

date.innerText = selectedDate;
time.innerText = selectedTime;
clubName.innerText = selectedClub;


selectedServices.forEach(service => {
    const serviceContainer = document.createElement("p");
    serviceContainer.innerText = `${service.name}`;
    services.appendChild(serviceContainer);

    const costContainer = document.createElement("p");
    costContainer.innerText = `Rs. ${service.cost}`;
    cost.appendChild(costContainer);

    totalAmount += service.cost;
});

totalElement.innerText= `Rs. ${totalAmount}`;



