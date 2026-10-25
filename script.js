// 1. Password Check Logic & Background Music Autoplay
function checkPassword() {
    let inputVal = document.getElementById("passInput").value.trim().toLowerCase();
    if (inputVal === "17 april" || inputVal === "17-april" || inputVal === "17") {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "flex";
        
        // Play background music automatically upon unlocking
        const bgMusic = document.getElementById("bgMusic");
        bgMusic.play().catch(error => {
            console.log("Autoplay blocked, user interaction required.");
        });
    } else {
        document.getElementById("errorMsg").innerText = "Galat password! Sahi date daalo.";
    }
}

// 2. Secret Message Reveal
function revealSecret(element) {
    element.classList.toggle("revealed");
}

// 3. Celebration Alert / Effect
function triggerCelebration() {
    alert("🎉 Happy Birthday Meri Jaan! Tumhari zindagi khushiyon se bhar jaye! 💖✨");
}

// 4. Live Time Counter (Set to 1.5 Years ago approx: April 2025)
const startDate = new Date("2025-04-17T00:00:00"); 

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

// 5. Photo Slider Logic (39 Photos)
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

// 6. Interactive Emotional Note Jar Logic (Hinglish Mix)
const notes = [
    "Tumhari pyari si muskan mera pura din bana deti hai! ✨",
    "Tum meri zindagi ka sabse khoobsurat hissa ho. ❤️",
    "Tumhe paakar main duniya ka sabse khushnaseeb insaan ban gaya hoon. 🌟",
    "Tumse baatein kiye bina mera ek din bhi nahi guzarta. 🥰",
    "Hamesha aise hi mere sath rehna, meri jaan! 🌹"
];

function pickNote() {
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    document.getElementById("noteText").innerText = randomNote;
}

// 7. Music Player Logic (Stops background music when playlist song plays)
function playTrack(fileName, title) {
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
        bgMusic.pause();
    }

    const audio = document.getElementById("audioPlayer");
    const songTitle = document.getElementById("songTitle");
    audio.src = fileName;
    songTitle.innerText = title;
    audio.play();
}
