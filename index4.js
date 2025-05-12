let name = localStorage.getItem("name");
let initial = name.charAt(0).toUpperCase();
let updatedname = document.querySelector(".name");
let circle = document.querySelector(".circle");
let edit = document.querySelector(".edit");

circle.innerText = initial;
updatedname.innerText = `${name}`;

edit.addEventListener("click", ()=>{
    const currentName = updatedname.innerText;
    const input = document.createElement("input");
    input.className = "newEdit";
    input.type = "text";
    input.value = currentName;
    updatedname.replaceWith(input);
    input.focus();

    input.addEventListener("blur", ()=>{
        saveEditedText(input, updatedname);
    })

    input.addEventListener("keydown",(event)=>{
        if(event.key === "Enter"){
            saveEditedText(input, updatedname);
        }
        saveData();
        
    })
})

const saveEditedText=(input, updatedname)=>{
    const newText = input.value.trim();
    if(newText){
        updatedname.innerText = newText;
        localStorage.setItem("name", newText);
        let initial = newText.charAt(0).toUpperCase();
        document.querySelector(".circle").innerText = initial

    }
    input.replaceWith(updatedname);
    saveData();
}