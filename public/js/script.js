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
    console.log(target);

    if (menuIcon != target && menuSvg != target) menuBar.classList.add('hidden');
}, false);