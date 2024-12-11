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

// THIS IS FOR TOP HOVER OVER

document.addEventListener("DOMContentLoaded", () => {
    let imageTextChanges = {
        beso: "One of my favorite part of the spanish language is you can add -ito after words to give them the property of smaller. My favorite nickname was always 'Mirandita'. ",
        cranberries: "Linger by the Cranberries is one of my favorite songs ever, in general they are a sick band. The singing style of the lead singer reminds me a lot of the Shakira I grew up listening to. Can you tell I love cherries?",
        seis: "6 is my lucky number. My last name is french but no one in my family for generations on my dad's side has spoken the language. Its pronounced like Focault, especially at the end. I claim 0 association to the Yankees (Gustavo said to clarify)",
        mermaid: "I work at Crossroads. One of the biggest perks of the job is that I get so many cool finds like this top.",
        summer: "There was one year where I thought I had lost this top. Turns out my sister had been keeping it in her closet/wearing it. It wouldn't be a closet tour without pointing our that Sofia's closet is my closet and vice versa.",
        canvas: "I feel my most free and embodied when I wear this.",
        cashmere: "We bought this sweater for christmas for my dad. He played it cool when he opened it said he liked it. We took a trip to spain that same year for the holidays. Every picture I have of him is wearing it. When I wear it, I'm reminded of moments like that where we were so alike despite how different we were.",
        stripe: "My mom gave me this as a hand-me-down, she knew I was going to need it.",
        turtle: "Everyone should own a black turtleneck."
    };

    
    for (let id in imageTextChanges) {
        let imageElement = document.querySelector(`#${id} img`);
        let textElement = document.createElement("div");
        textElement.classList.add("text");
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