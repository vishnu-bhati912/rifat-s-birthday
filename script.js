// ======================================
// RIFAT'S BIRTHDAY UNIVERSE
// ======================================


// 1. SCREEN NAVIGATION

const screens = document.querySelectorAll(".screen");

function showScreen(id) {

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(id);

    if (nextScreen) {
        nextScreen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// 2. WELCOME BUTTON

document.getElementById("startBtn").addEventListener("click", function() {

    showScreen("cakeScreen");

});


// 3. BIRTHDAY CAKE

let candlesBlown = false;

document.getElementById("blowBtn").addEventListener("click", function() {

    const candles = document.querySelectorAll(".candle");
    const message = document.getElementById("cakeMessage");
    const button = document.getElementById("blowBtn");

    if (!candlesBlown) {

        candles.forEach(function(candle) {
            candle.classList.add("out");
        });

        message.textContent =
            "WISH GRANTED! Hopefully. I don't control the universe. 😭";

        button.textContent = "Open your birthday letter 💌";

        candlesBlown = true;

    } else {

        showScreen("letterScreen");

    }

});


// 4. LETTER TO HIDDEN SURPRISES

document.getElementById("starBtn").addEventListener("click", function() {

    showScreen("surpriseScreen");

});


// 5. HIDDEN STAR MESSAGES

const stars = document.querySelectorAll(".star");

const revealBox = document.getElementById("revealBox");

stars.forEach(function(star) {

    star.addEventListener("click", function() {

        const message = star.dataset.message;

        revealBox.textContent = message;

        star.classList.add("opened");

        star.querySelector(".star-icon").textContent = "💖";

        star.querySelector(".star-label").textContent = "Unlocked!";

    });

});


// 6. FINAL SURPRISE

document.getElementById("finalBtn").addEventListener("click", function() {

    showScreen("finalScreen");

    launchConfetti();

});


// 7. CONFETTI ANIMATION

function launchConfetti() {

    const container = document.getElementById("confetti");

    const colours = [
        "#f5b9d0",
        "#c8b5f2",
        "#ffe5a4",
        "#ffffff",
        "#f4a8a8"
    ];

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left = Math.random() * 100 + "%";

        piece.style.background =
            colours[Math.floor(Math.random() * colours.length)];

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        container.appendChild(piece);

        setTimeout(function() {
            piece.remove();
        }, 5500);

    }

}


// 8. FLOATING DECORATIONS

const decorContainer = document.getElementById("floatingDecor");

const decorations = ["🎀", "✨", "💗", "⭐", "🌸"];

for (let i = 0; i < 18; i++) {

    const item = document.createElement("div");

    item.classList.add("float-item");

    item.textContent =
        decorations[Math.floor(Math.random() * decorations.length)];

    item.style.left = Math.random() * 100 + "%";

    item.style.animationDuration =
        (8 + Math.random() * 12) + "s";

    item.style.animationDelay =
        Math.random() * 10 + "s";

    decorContainer.appendChild(item);

}