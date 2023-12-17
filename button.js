// Create an array of button labels
/*const buttonLabels = [" ", " ", " "];

// Get the button container
const buttonContainer = document.getElementById("button-container");

// Loop through the labels and create buttons
buttonLabels.forEach((label, index) => {
    const button = document.createElement("button");
    button.textContent = label;
    button.className = "button"; // Apply the button class from CSS

    // Add a click event to change the button color
    button.addEventListener("click", () => {
        // Generate a random color (for simplicity, this is a random hex color)
        //const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        button.style.backgroundColor = Red;
    });

    buttonContainer.appendChild(button);
});
//let c=['A','B','C'];
for(let i=1;i<=10;i++){
    for(let j=1;j<=5;j++){
        <button class="seat">button</button>
    }
    //c++;
}

// Get all buttons with the "button" class
const buttons = document.querySelectorAll(".book-button");

// Add a click event to change the button's color to red
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        button.style.backgroundColor = "red";
    });
});*/
// Get the button by its ID
const button = document.getElementById("myButton");

// Add an onclick event to change the button's color to red
button.onclick = function() {
    button.style.backgroundColor = "red";
};

