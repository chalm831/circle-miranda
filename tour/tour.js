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


//THIS IS FOR SHOE PAGE HOVER

let shoeImages = [
    { id: 'nikeside', hoverSrc: 'shoes/nikeside.png', originalSrc: 'shoes/nikefront.png' },
    { id: 'zaraside', hoverSrc: 'shoes/zaraside.png', originalSrc: 'shoes/zarafront.png' },
    { id: 'iceskateside', hoverSrc: 'shoes/iceskateside.png', originalSrc: 'shoes/iceskatefront.png' },
    { id: 'bow', hoverSrc: 'shoes/bowie.png', originalSrc: 'shoes/bow.png' }
];

shoeImages.forEach(mapping => {
    let shoeImages = document.getElementById(mapping.id).querySelector('img');

    
    shoeImages.addEventListener('mouseenter', () => {
        shoeImages.src = mapping.hoverSrc;
    });

    
    shoeImages.addEventListener('mouseleave', () => {
        shoeImages.src = mapping.originalSrc;
    });
});

//THIS IS FOR BAG PAGE CLICK

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working!");
});

