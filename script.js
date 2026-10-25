// 1. Main Password Check Logic & Autoplay
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
        document.getElementById("errorMsg").innerText = "Galat password! Sahi date daalo.";
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
    `<strong>First Page - Message from Aadi ❤️:</strong><br><br>"Meri Pyaari Nisha, yeh diary ka pehla panna sirf tumhare liye hai. Zindagi me kitne bhi utaar-chadhaw aayein, mera ye vada hai ki Aadi hamesha tumhara hath thame rahega. Tum meri sabse khash pasand ho aur rahogi!"`,
    `<strong>Page 2 - Special Moments 💕:</strong><br><br>"Tumse milne ke baad har ek din special ban gaya hai. Jab tum muskurati ho, lagta hai poori duniya ki khushi ek jagah simat aayi ho."`,
    `<strong>Page 3 - Promises 🌟:</strong><br><br>"Main vada karta hoon ki tumhare har birthday ko itna hi magical banaunga. Hamesha tumhare sapnon ko support karunga aur tumhara khayal rakhunga."`,
    `<strong>Page 4 - Forever & Always 🌹:</strong><br><br>"Chahe hum kahin bhi ho, mera dil hamesha tumhare paas hi rahega. Happy Birthday again, my love Nisha!"`
];

let currentDiaryIndex = 0;

function changeDiaryPage(direction) {
    currentDiaryIndex += direction;
    if (currentDiaryIndex < 0) currentDiaryIndex = 0;
    if (currentDiaryIndex >= diaryPages.length) currentDiaryIndex = diaryPages.length - 1;

    document.getElementById("diaryContent").innerHTML = diaryPages[currentDiaryIndex];
    document.getElementById("pageNum").innerText = `Page ${currentDiaryIndex + 1}/${diaryPages.length}`;
}

// 4. Secret Video Unlock (Password: 'aadi')
function unlockVideo() {
    let pass = document.getElementById("videoPassInput").value.trim().toLowerCase();
    if (pass === "aadi") {
        document.getElementById("videoLockBox").style.display = "none";
        document.getElementById("videoPlayerBox").style.display = "block";
        
        // Stop background music when video plays
        const bgMusic = document.getElementById("bgMusic");
        if (bgMusic) bgMusic.pause();
    } else {
        document.getElementById("videoErrorMsg").innerText = "Galat password! Hint: Name";
    }
}

// 5. Secret Message Reveal
function revealSecret(element) {
    element.classList.toggle("revealed");
}

// 6. Celebration Alert
function triggerCelebration() {
    alert("🎉 Happy Birthday Meri Jaan Nisha! Aadi loves you so much! 💖✨");
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
    "Tumhari pyari si muskan mera pura din bana deti hai! ✨",
    "Tum meri zindagi ka sabse khoobsurat hissa ho. ❤️",
    "Tumhe paakar main duniya ka sabse khushnaseeb insaan ban gaya hoon. 🌟",
    "Tumse baatein kiye bina mera ek din bhi nahi guzarta. 🥰",
    "Hamesha aise hi Aadi ke sath rehna, meri jaan! 🌹"
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
