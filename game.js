// Show Hello Message
function showMessage() {
    alert("Hello! Welcome to my portfolio website.");
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Interactive Image Change
function changeImage() {
    let img = document.getElementById("myImage");
    if (img.src.includes("200")) {
        img.src = "https://picsum.photos/300";
    } else {
        img.src = "https://picsum.photos/200";
    }
}