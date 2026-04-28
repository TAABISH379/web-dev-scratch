document.addEventListener("mousemove",(e) =>{
    console.log(e.clientX, e.clientY)

});

document.addEventListener("keypress",(e)=>{

    console.log(e.key)
});

// Event handlers can be used to handle and verify user input, user actions, and browser actions:

// Things that should be done every time a page loads
// Things that should be done when the page is closed
// Action that should be performed when a user clicks a button
// Content that should be verified when a user inputs data
// And more ...

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    console.log("Button clicked!");
    alert("Button clicked!");
});
