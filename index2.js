const btn = document.querySelector("#btn-1");
const input = document.querySelector(".input");
const email = document.querySelector(".email");
const tel = document.querySelector(".tel");

btn.addEventListener("click", ()=>{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/; 


    if(input.value === "" || email.value.trim() === ""|| tel.value === "" ){
        alert("Please fill the complete information")
    }else if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address");
    }else if(!phonePattern.test(tel.value)){
        alert ("Please fill the correct phone number");
    }else{
        window.location.href = "index3.html";
        localStorage.setItem("name", input.value);
    }
})
