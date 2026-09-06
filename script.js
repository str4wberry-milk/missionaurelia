const howTo = document.getElementById("howto");
const overlay = document.getElementById("overlay");
const close = document.getElementById("close");

const begin = document.getElementById("begin");
const loading = document.getElementById("loading");
const progress = document.getElementById("progress");
const loadingText = document.getElementById("loading-text");


// how to play

howTo.addEventListener("click", () => {
    overlay.classList.add("active");
});

close.addEventListener("click", () => {
    overlay.classList.remove("active");
});

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.classList.remove("active");
    }
});


// begin mission

begin.addEventListener("click", () => {

    loading.classList.add("active");

    let value = 0;

    const messages = [
        "preparing dive...",
        "checking equipment...",
        "entering the water...",
        "descending...",
        "mission ready."
    ];

    const interval = setInterval(() => {

        value += 2;

        progress.style.width = `${value}%`;

        if (value < 25) {
            loadingText.textContent = messages[0];
        } else if (value < 45) {
            loadingText.textContent = messages[1];
        } else if (value < 65) {
            loadingText.textContent = messages[2];
        } else if (value < 90) {
            loadingText.textContent = messages[3];
        } else {
            loadingText.textContent = messages[4];
        }

        if (value >= 100) {

            clearInterval(interval);

            // temporary until we build the actual game
            setTimeout(() => {
                loadingText.textContent = "mission ready.";
            }, 300);

        }

    }, 35);

});
