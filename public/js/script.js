console.log(`
░█▀▀░▀█▀░█▀█░█▀▀░█▀▀░█▀█░█▀▀░▀█▀░█▀▀░░░░█░█░█░█░▀▀█
░█░░░░█░░█░█░█▀▀░█░░░█▀█░▀▀█░░█░░█▀▀░░░░▄▀▄░░█░░▄▀░
░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░░▀░░▀▀▀░▀░░▀░▀░░▀░░▀▀▀
    
Welcome to Cinecast 🎬 
Brought to you by Grovix Lab, Cinecast is an AI-powered platform dedicated to transforming the way you interact with text. With advanced Natural Language Processing, Cinecast provides:
    
🔹 Paragraph Generation  
🔹 Description Generation  
🔹 Text Summarization  
🔹 And much more!
    
⚠️ Important: Do not paste anything in this console for your security.
    
Explore Cinecast and see how AI can make words work for you. Enjoy the experience!`);


let menuIcon = document.getElementById("menuIcon");
let menuBar = document.getElementById("menuBar");
let menuSvg = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    menuBar.classList.toggle('hidden');
});

document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;

    if (menuIcon != target && menuSvg != target) menuBar.classList.add('hidden');
}, false);