

window.onload = function () {

    alert("Welcome to Michelle Mayordomo's Portfolio!");

    console.log("Portfolio Loaded Successfully.");

    document.getElementById("mainHeading").innerHTML =
        "Welcome to My Personal Portfolio";

    document.getElementById("mainHeading").style.color = "gold";
    document.getElementById("mainHeading").style.fontSize = "50px";

};


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



function toggleTheme() {

    console.log("Theme Button Clicked.");

    document.body.classList.toggle("dark-mode");

    let themeButton = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.innerHTML = "☀️";

    } else {

        themeButton.innerHTML = "🌙";

    }

}



function viewProject() {

    console.log("View Project Button Clicked.");

    document.getElementById("portfolio").style.display = "none";

    document.querySelector(".footer").style.display = "none";

    document.getElementById("projectView").style.display = "block";

}


function backPortfolio() {

    console.log("Back to Portfolio Button Clicked.");

    document.getElementById("portfolio").style.display = "block";

    document.querySelector(".footer").style.display = "block";

    document.getElementById("projectView").style.display = "none";

}