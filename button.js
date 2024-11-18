console.log("file is working")

let backgroundButton = document.getElementById("button");

console.log(backgroundButton)

backgroundButton.addEventListener("click", function(event) {
    console.log("clicked!")
    document.body.classList.toggle("button-active");
})