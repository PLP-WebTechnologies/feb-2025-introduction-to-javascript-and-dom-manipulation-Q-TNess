// Change text content dynamically
const heading = document.querySelector("h3");
heading.textContent = "Popular Watch Types:";
heading.style.backgroundColor = "rgba(255,255,255,0.6)";
heading.style.padding = "10px";
heading.style.borderRadius = "8px";


// Modify CSS styles using JavaScript
const paragraph = document.querySelector("p");
paragraph.style.color = "blue";
paragraph.style.fontStyle = "italic";
paragraph.style.backgroundColor = "rgba(255,255,255,0.6)";
paragraph.style.padding = "10px";
paragraph.style.borderRadius = "8px";

// Create a new button to add/remove an element
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Extra Info";
toggleBtn.style.marginTop = "20px";
toggleBtn.style.display = "block";
toggleBtn.style.padding = "10px";
document.body.appendChild(toggleBtn);

// Element to be toggled
const extraInfo = document.createElement("p");
extraInfo.textContent = "Did you know? The first wristwatch was made in 1868!";
extraInfo.style.color = "darkgreen";
extraInfo.style.fontWeight = "bold";
extraInfo.style.padding = "10px";
extraInfo.style.backgroundColor = "rgba(255,255,255,0.7)";
extraInfo.style.display = "none"; // hidden by default
document.body.appendChild(extraInfo);

// Add/remove element on button click
toggleBtn.addEventListener("click", () => {
    extraInfo.style.display = extraInfo.style.display === "none" ? "block" : "none";
});
