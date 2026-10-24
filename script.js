// 1. Password Check Logic
function checkPassword() {
    let inputVal = document.getElementById("passInput").value.trim().toLowerCase();
    // '17 april' ya '17-april' dono pe kaam karega
    if (inputVal === "17 april" || inputVal === "17-april" || inputVal === "17") {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "flex";
    } else {
        document.getElementById("errorMsg").innerText = "Galat password! Sahi date daalo bhai.";
    }
}

// 2. Live Time Counter
const startDate = new Date("2026-01-01T00:00:00"); 

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}
setInterval(updateCounter, 1000);
updateCounter();

// 3. Photo Slider Logic (39 Photos)
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
}

// 4. Interactive Note Jar Logic
const notes = [
    "Always stay happy and cheerful! ✨",
    "You are the best sister ever! ❤️",
    "Never stop pursuing your goals and dreams! 🌟",
    "May your day be full of joy and sweet moments! 🍰",
    "Keep spreading brightness everywhere you go! 🌈"
];

function pickNote() {
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    document.getElementById("noteText").innerText = randomNote;
}

// 5. Music Player Logic
function playTrack(fileName, title) {
    const audio = document.getElementById("audioPlayer");
    const songTitle = document.getElementById("songTitle");
    audio.src = fileName;
    songTitle.innerText = title;
    audio.play();
}
