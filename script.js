let playButton = document.querySelector('.play');
let headerElement = document.querySelector('header');
let originalStatementElement = document.querySelector(".original-statement");

let headerText = "Omotola Joseph ►";
let currentDateElement = document.querySelector('.current-date');

playButton.addEventListener('click', function() {
    playButton.style.display = "none";
    originalStatementElement.style.display = "none";
    
    let currentDate = new Date().toLocaleDateString();

    typeWriter(currentDateElement, currentDate, function() {
        typeWriter(headerElement, headerText, function() {
        });
    });
});


function typeWriter(element, text, callback) {
    let charIndex = 0;
    element.innerHTML = ''; 
    let cursorClass = element.classList.contains('head') ? 'header-cursor' : 'original-cursor';
    
    function type() {
        if (charIndex <= text.length) {
            let cursor = `<span class="cursor ${cursorClass}"></span>`;
            element.innerHTML = text.slice(0, charIndex) + cursor;
            charIndex++;
            setTimeout(type, 250); 
        } else {
            let cursorElement = element.querySelector('.cursor');
            if (cursorElement) {
                cursorElement.remove();
            }
            callback(); 
        }
    }
    type();
}
