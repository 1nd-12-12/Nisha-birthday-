// 1. Password Check Logic & Autoplay
function checkPassword() {
    let inputVal = document.getElementById("passInput").value.trim().toLowerCase();
    if (inputVal === "17 april" || inputVal === "17-april" || inputVal === "17") {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "flex";
        
        const bgMusic = document.getElementById("bgMusic");
        bgMusic.play().catch(error => {
            console.log("Autoplay blocked, user interaction required.");
        });
    } else {
        document.getElementById("errorMsg").innerText = "Incorrect password! Please try again.";
    }
}

// 2. Photo Modal (Full Screen View)
function openPhotoModal(src) {
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("fullImg");
    modal.style.display = "flex";
    modalImg.src = src;
}

function closePhotoModal() {
    document.getElementById("photoModal").style.display = "none";
}

// 3. Multi-page Diary Logic
const diaryPages = [
    `<strong>First Page - Message from Aadi ❤️:</strong><br><br>"My dearest Nisha, this first page belongs entirely to you. No matter what comes our way, my promise is to hold your hand forever. You are my absolute favorite person in this entire universe!"`,
    `<strong>Page 2 - Special Moments 💕:</strong><br><br>"Every single day feels magical ever since I found you. Your smile brings absolute peace to my heart."`,
    `<strong>Page 3 - Promises 🌟:</strong><br><br>"I promise to support all your dreams, stand by you through thick and thin, and cherish every moment we share together."`,
    `<strong>Page 4 - Forever & Always 🌹:</strong><br><br>"No matter where we are, my heart will always belong to you. Happy Birthday once again, my love Nisha!"`
];

let currentDiaryIndex = 0;

function changeDiaryPage(direction) {
    currentDiaryIndex += direction;
    if (currentDiaryIndex < 0) currentDiaryIndex = 0;
    if (currentDiaryIndex >= diaryPages.length) currentDiaryIndex = diaryPages.length - 1;

    document.getElementById("diaryContent").innerHTML = diaryPages[currentDiaryIndex];
    document.getElementById("pageNum").innerText = `Page ${currentDiaryIndex + 1}/${diaryPages.length}`;
}

// 4. Secret Video Unlock
function unlockVideo() {
    let pass = document.getElementById("videoPassInput").value.trim().toLowerCase();
    if (pass === "aadi") {
        document.getElementById("videoLockBox").style.display = "none";
        document.getElementById("videoPlayerBox").style.display = "block";
        
        const bgMusic = document.getElementById("bgMusic");
        if (bgMusic) bgMusic.pause();
    } else {
        document.getElementById("videoErrorMsg").innerText = "Incorrect password! Access denied.";
    }
}

// 5. Secret Message Reveal
function revealSecret(element) {
    element.classList.toggle("revealed");
}

// 6. Celebration Alert
function triggerCelebration() {
    alert("🎉 Happy Birthday My Love Nisha! Aadi loves you endlessly! 💖✨");
}

// 7. Live Time Counter (Set to April 2025)
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

// 8. Photo Slider Logic
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

// 9. Interactive Note Jar Logic
const notes = [
    "Your beautiful smile makes my entire day brighter! ✨",
    "You are the most gorgeous part of my life. ❤️",
    "Finding you made me the luckiest person in this world. 🌟",
    "Not a single day goes by without thinking about you. 🥰",
    "Forever staying by your side, my love! 🌹"
];

function pickNote() {
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    document.getElementById("noteText").innerText = randomNote;
}

// 10. Music Player Logic
function playTrack(fileName, title) {
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) bgMusic.pause();

    const audio = document.getElementById("audioPlayer");
    const songTitle = document.getElementById("songTitle");
    audio.src = fileName;
    songTitle.innerText = title;
    audio.play();
}
