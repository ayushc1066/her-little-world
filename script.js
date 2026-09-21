function openSite() {
    document.querySelector(".page").style.display = "none";
    document.querySelector(".home-page").style.display = "flex";
}

function openFavPhotos() {
    document.querySelector(".home-page").style.display = "none";
    document.querySelector(".fav-photo-page").style.display = "block";
}

function flipPhoto(card) {
    card.classList.toggle("flipped");
}

function openFavTwo() {
    document.querySelector(".fav-photo-page").style.display = "none";
    document.querySelector(".fav-photo-second").style.display = "block";
}

function openFavThree() {
    document.getElementById("favPhotoSecond").style.display = "none";
    document.getElementById("favPhotoThird").style.display = "block";
}

function backToHome() {
    document.getElementById("favPhotoThird").style.display = "none";
    document.getElementById("homePage").style.display = "flex";
}

function openLetters() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("lettersPage").style.display = "block";
}

function openLetterTwo() {
    document.getElementById("lettersPage").style.display = "none";
    document.getElementById("letterTwoPage").style.display = "block";
}

function backToHomeFromLetters() {
    document.getElementById("letterTwoPage").style.display = "none";
    document.getElementById("homePage").style.display = "flex";
}

function openLittleThings() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("littleThingsPage").style.display = "block";
}

function openLittleTwo() {
    document.getElementById("littleThingsPage").style.display = "none";
    document.getElementById("littleThingsTwoPage").style.display = "block";
}

function backToHomeFromLittleThings() {
    document.getElementById("littleThingsTwoPage").style.display = "none";
    document.getElementById("homePage").style.display = "flex";
}

function openMood() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("moodPage").style.display = "flex";
}

function backToHomeFromMood() {
    document.getElementById("moodPage").style.display = "none";
    document.getElementById("homePage").style.display = "flex";
}


/* =========================
   FINAL THANK YOU ANIMATION
   ========================= */

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `
.thank-you-page {
    position: relative;
    overflow: hidden;
}

.thank-you-page::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
        radial-gradient(circle at 20% 20%, rgba(245,154,189,.18) 0 3px, transparent 4px),
        radial-gradient(circle at 80% 30%, rgba(245,154,189,.15) 0 3px, transparent 4px),
        radial-gradient(circle at 30% 80%, rgba(245,154,189,.14) 0 3px, transparent 4px);
}

.thank-you-content {
    position: relative;
    z-index: 5;
    animation: thankYouPop .8s ease both;
}

@keyframes thankYouPop {
    0% {
        opacity: 0;
        transform: scale(.88) translateY(20px);
    }

    60% {
        transform: scale(1.03) translateY(-3px);
    }

    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.final-heart {
    position: fixed;
    bottom: -40px;
    z-index: 10;
    pointer-events: none;
    font-size: 22px;
    animation: floatHeart linear forwards;
}

@keyframes floatHeart {
    0% {
        opacity: 0;
        transform: translateY(0) scale(.5) rotate(0deg);
    }

    15% {
        opacity: 1;
    }

    50% {
        transform: translateY(-50vh) translateX(25px) scale(1) rotate(12deg);
    }

    100% {
        opacity: 0;
        transform: translateY(-110vh) translateX(-30px) scale(.7) rotate(-15deg);
    }
}

.heart-burst {
    position: fixed;
    z-index: 100;
    pointer-events: none;
    font-size: 20px;
    animation: burstHeart .9s ease-out forwards;
}

@keyframes burstHeart {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(.5);
    }

    100% {
        opacity: 0;
        transform: translate(var(--x), var(--y)) scale(1.3) rotate(25deg);
    }
}

.restart-button {
    transition: transform .2s ease, box-shadow .2s ease;
}

.restart-button:hover {
    transform: scale(1.05);
    box-shadow: 0 7px 20px rgba(190,100,140,.18);
}
`;

document.head.appendChild(animationStyle);


/* Heart burst */

function createHeartBurst() {
    for (let i = 0; i < 18; i++) {
        const heart = document.createElement("span");

        heart.className = "heart-burst";
        heart.textContent = ["♡", "♥", "💗", "💖"][Math.floor(Math.random() * 4)];

        heart.style.left = "50%";
        heart.style.top = "50%";

        const angle = (Math.PI * 2 * i) / 18;
        const distance = 80 + Math.random() * 130;

        heart.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        heart.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}


/* Floating hearts */

function startFloatingHearts() {
    const symbols = ["♡", "♥", "💗", "💖", "💕"];

    function makeHeart() {
        const heart = document.createElement("span");

        heart.className = "final-heart";
        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (14 + Math.random() * 16) + "px";
        heart.style.animationDuration = (5 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9000);
    }

    /* Immediately show some hearts */
    for (let i = 0; i < 12; i++) {
        setTimeout(makeHeart, i * 250);
    }

    /* Keep creating new hearts forever */
    if (window.heartRainInterval) {
        clearInterval(window.heartRainInterval);
    }

    window.heartRainInterval = setInterval(makeHeart, 450);
}

/* Open final page */

function openThankYou() {

    createHeartBurst();

    document.getElementById("moodPage").style.display = "none";
    document.getElementById("thankYouPage").style.display = "flex";

    startFloatingHearts();
}


/* Restart from beginning */

function restartWebsite() {
    clearInterval(window.heartRainInterval);

    document
        .querySelectorAll(".final-heart, .heart-burst")
        .forEach(element => element.remove());

    document.getElementById("thankYouPage").style.display = "none";

    document.querySelector(".page").style.display = "flex";
}
/* =========================
   STARTING PAGE FLOATING HEARTS
   ========================= */

function startPageHearts() {
    const symbols = ["♡", "♥", "💗", "💖", "💕"];

    setInterval(() => {
        const heart = document.createElement("span");

        heart.className = "start-heart";
        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize =
            14 + Math.random() * 14 + "px";

        heart.style.animationDuration =
            5 + Math.random() * 3 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8500);

    }, 500);
}

/* Start hearts immediately */
startPageHearts();