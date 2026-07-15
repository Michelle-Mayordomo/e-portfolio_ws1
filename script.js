// ======================================
// Welcome Message
// ======================================

window.onload = function () {

    // Display welcome message
    alert("Welcome to Michelle Mayordomo's Portfolio!");

    // Display message in Console
    console.log("Portfolio Loaded Successfully.");

    // Change the heading text
    document.getElementById("mainHeading").innerHTML =
        "Welcome to My Personal Portfolio";

    // Change heading style
    document.getElementById("mainHeading").style.color = "gold";
    document.getElementById("mainHeading").style.fontSize = "50px";

};


// ======================================
// Show Personal Information
// ======================================

function showInfo() {

    console.log("Show Information Button Clicked.");

    alert(
        "PERSONAL INFORMATION\n\n" +
        "Name: Michelle D. Mayordomo\n" +
        "Course: Bachelor of Science in Information Technology\n" +
        "School: Holy Child Central Colleges Inc.\n" +
        "Year Level: 2nd Year\n" +
        "Email: mayordomomichelle90@gmail.com\n" +
        "Phone: 09925221957\n" +
        "Goal: To become a successful Web Developer."
    );

}


// ======================================
// Light / Dark Mode
// ======================================

function toggleTheme() {

    console.log("Theme Button Clicked.");

    document.body.classList.toggle("dark-mode");

    let themeButton = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.innerHTML = "☀️ Light Mode";

    } else {

        themeButton.innerHTML = "🌙 Dark Mode";

    }

}


// ======================================
// View Project
// ======================================

function viewProject() {

    console.log("View Project Button Clicked.");

    // Hide portfolio
    document.getElementById("portfolio").style.display = "none";

    // Hide footer
    document.querySelector(".footer").style.display = "none";

    // Show project
    document.getElementById("projectView").style.display = "block";

}


// ======================================
// Back to Portfolio
// ======================================

function backPortfolio() {

    console.log("Back to Portfolio Button Clicked.");

    // Show portfolio
    document.getElementById("portfolio").style.display = "block";

    // Show footer
    document.querySelector(".footer").style.display = "block";

    // Hide project
    document.getElementById("projectView").style.display = "none";

}