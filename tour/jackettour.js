console.log("file is working")

// THIS IS FOR HAMBURGER MENU BAR
let hamburgerOpen = false;
let navigation = document.getElementById("navigation");
let hamburgermenu = document.getElementById("hamburger-icon");

hamburgermenu.addEventListener("click", function(event) {
    if(hamburgerOpen) {
        navigation.style.display = "none";
        hamburgerOpen = false;
        hamburgermenu.classList.toggle("active")
    } else {
        navigation.style.display = "block";
        hamburgerOpen = true;
        hamburgermenu.classList.toggle("active")
    }
})

// THIS IS FOR JACKET HOVER OVER

document.addEventListener("DOMContentLoaded", () => {
    let imageTextChanges = {
        latte: "7-15°C",
        red: "-3°C",
        gold: "8-16°C",
        fur:"0°C",
        patch: "10-14°C",
        cat: "3-10°C",
    };

    
    for (let id in imageTextChanges) {
        let imageElement = document.querySelector(`#${id} img`);
        let textElement = document.createElement("div");
        textElement.classList.add("jackettext");
        textElement.textContent = imageTextChanges[id];

        
        let gridItem = document.querySelector(`#${id}`);
        gridItem.appendChild(textElement);

       
        textElement.style.display = "none"; 

        
        imageElement.addEventListener("mouseenter", () => {
            textElement.style.display = "flex";
        });

        
        imageElement.addEventListener("mouseleave", () => {
            textElement.style.display = "none";
        });
    }
});