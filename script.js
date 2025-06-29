// Working on the Insight Panel Logic

const insightCloseBtn = document.getElementById("close-insight-btn");
const interpreterBtn = document.querySelectorAll(".overlay-icon");

const insightMenu = document.querySelector(".insight-section");
const insightOverlay = document.querySelector(".insight-overlay");

function toggleInsight(event) {
    insightMenu.classList.toggle("active");
    insightOverlay.classList.toggle("active");

    insightMenu.classList.toggle("hidden");
    insightOverlay.classList.toggle("hidden");

    if (insightMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
        
        if (event && event.target && event.target.classList.contains("overlay-icon")) {
            const clickedIcon = event.target;
            const artItem = clickedIcon.closest('.art-item')
    
            if (artItem) {
                
                const imageUrl = artItem.dataset.imageUrl;
                const artTitle = artItem.dataset.title;
                const artArtist = artItem.dataset.artist;
                const artDate = artItem.dataset.date;
                const artInterpretation = artItem.dataset.interpretation;
    
                const insightImageElement = document.querySelector(".insight-image img");
                const insightTitleElement = document.getElementById("art-title");
                const insightArtistElement = document.getElementById("art-artist");
                const insightDateElement = document.getElementById("art-date");
                const insightInterpretationElement = document.getElementById("art-interpretation");
    
                if (insightImageElement) {
                    insightImageElement.src = imageUrl;
                    insightImageElement.alt =artTitle;
                }
                if (insightTitleElement) {
                    insightTitleElement.textContent = artTitle;
                }
                if (insightArtistElement) {
                    insightArtistElement.textContent = artArtist;
                }
                if (insightDateElement) {
                    insightDateElement.textContent = artDate;
                }
                if (insightInterpretationElement) {
                    insightInterpretationElement.textContent = artInterpretation;
                }
            }
        }
    }
    else {
        document.body.style.overflow = "";

        const insightImageElement = document.querySelector(".insight-image img");
        if (insightImageElement) {
            insightImageElement.src = "";
            insightImageElement.alt = "";
        }

        document.getElementById("art-title").textContent = "";
        document.getElementById("art-artist").textContent = "";
        document.getElementById("art-date").textContent = "";
        document.getElementById("art-interpretation").textContent = "";
    }
}

if (insightCloseBtn) {
    insightCloseBtn.addEventListener("click", toggleInsight);
}

interpreterBtn.forEach( (btn) => {
    btn.addEventListener("click", toggleInsight);
});
