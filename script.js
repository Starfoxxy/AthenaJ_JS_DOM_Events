//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){

    //Get the element with an id of onload
    let onLoadEl = document.getElementById("onload");
   
    //Add some HTML within the element we grabbed
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
   })

   //Get the element that will show our key code
let directionEl = document.getElementById("direction");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function(e) {

 // When a key is pressed, the element with the id of direction will show the message
 directionEl.innerText = `The Key you pressed is ${e.code}`;

});

let buttonClick = document.getElementById("clickMe");

document.addEventListener("click", function() {

    buttonClick.innerText = "You clicked me!";
    
});

function getRandomColor() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
    document.body.style.backgroundColor = getRandomColor();
}
