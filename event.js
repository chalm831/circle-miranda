function clickInstructions(el) {
    let p = document.createElement("h1");
    let firstText = document.createTextNode("Centralized?");
    // let secondText = document.createTextNode("The internet is made up of light signals.");
    p.appendChild(firstText);
    // p.appendChild(secondText)
    document.body.appendChild(p);
    
}

document.addEventListener("click", function(event) {
    clickInstructions(event.target)
});


// c = 0 



// let userClick = document.getElementById("central");

// console.log(userClick)

// userClick.addEventListener("click", function(event) {
//     console.log("clicked!")
//     document.body.classList.toggle("button-active");
    
// })

let networks = ["centralized", "decentralized", "distributed"];

let listOfNetworks = "";
for (let i = 0; i < networks.length; i++) {
    listOfNetworks += networks [i] + " ";
}
let list = document.createElement("p");
list.innerHTML = listOfNetworks;
document.body.appendChild(list);
