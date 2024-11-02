let menuIcon = document.getElementById("menuIcon");
let menuBar = document.getElementById("menuBar");

menuIcon.addEventListener("click", () => {
    menuBar.classList.toggle('hidden');
});