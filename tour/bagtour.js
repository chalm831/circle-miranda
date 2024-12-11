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

// THIS IS FOR BAG CLICK

document.addEventListener("DOMContentLoaded", () => {
    // Mapping of IDs to the new image sources
    let imageChanges = {
        cherry: "bags/match.jpg",
        ten: "bags/10.jpg",
        fav: "bags/flower.jpg",
        potro: "bags/light.jpg",
        travel: "bags/fam.jpg",
        crochet: "bags/angel.jpg",
        ocean: "bags/sunset.jpg",
        aqua: "bags/aqua.jpg",
    };

    // Loop through the mapping and add click event listeners
    for (let id in imageChanges) {
        let imageElement = document.querySelector(`#${id} img`);
        if (imageElement) {
            imageElement.addEventListener("click", () => {
                imageElement.src = imageChanges[id];
            });
        }
    }
});
