const insightCloseBtn = document.getElementById("close-insight-btn");
const interpreterBtn = document.querySelectorAll(".overlay-icon");

const insightMenu = document.querySelector(".insight-section");
const insightOverlay = document.querySelector(".insight-overlay");

function showMenu() {
    insightMenu.classList.toggle("active");
    insightOverlay.classList.toggle("active");

    insightMenu.classList.toggle("hidden");
    insightOverlay.classList.toggle("hidden");

    if (insightMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "";
    }
}

if (insightCloseBtn) {
    insightCloseBtn.addEventListener("click", showMenu);
}

interpreterBtn.forEach( (btn) => {
    btn.addEventListener("click", showMenu);
});

