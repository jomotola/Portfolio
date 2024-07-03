//Responsive Navbar.
function navbarResize() {
    let navbar = document.querySelector(".navbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}

let showEducationButton = document.querySelector(".showEducationBtn");
let showExperienceButton = document.querySelector(".showExperienceBtn");
let showSkillsButton = document.querySelector(".showSkillsBtn");

function hideAllSections() {
    document.getElementById("education").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("skills").style.display = "none";
}

showEducationButton.addEventListener("click", function() {
    hideAllSections();
    document.getElementById("education").style.display = "block";
})

showEducationButton.addEventListener("dblclick", function() {
    hideAllSections();
})

showExperienceButton.addEventListener("click", function() {
    hideAllSections();
    document.getElementById("experience").style.display = "block";
})

showExperienceButton.addEventListener("dblclick", function() {
    hideAllSections();
})

showSkillsButton.addEventListener("click", function() {
    hideAllSections();
    document.getElementById("skills").style.display = "block";
})

showSkillsButton.addEventListener("dblclick", function() {
    hideAllSections();
})