const howBtn = document.getElementById("howBtn");
const closeBtn = document.getElementById("closeBtn");
const howOverlay = document.getElementById("howOverlay");

const beginBtn = document.getElementById("beginBtn");
const loadingScreen = document.getElementById("loadingScreen");
const loadingProgress = document.getElementById("loadingProgress");
const loadingText = document.getElementById("loadingText");


// ---------------- how to play ----------------

howBtn.addEventListener("click", () => {
  howOverlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  howOverlay.classList.remove("active");
});

howOverlay.addEventListener("click", (event) => {
  if (event.target === howOverlay) {
    howOverlay.classList.remove("active");
  }
});


// ---------------- begin mission ----------------

beginBtn.addEventListener("click", () => {

  loadingScreen.classList.add("active");

  let progress = 0;

  const loadingMessages = [
    "preparing dive...",
    "checking equipment...",
    "calibrating scanner...",
    "entering the water...",
    "descending...",
    "locating mission zone...",
    "mission ready."
  ];

  const interval = setInterval(() => {

    progress += Math.random() * 4 + 1;

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
    }

    loadingProgress.style.width = `${progress}%`;

    const messageIndex = Math.min(
      Math.floor(progress / 16),
      loadingMessages.length - 1
    );

    loadingText.textContent = loadingMessages[messageIndex];

  }, 100);

});
