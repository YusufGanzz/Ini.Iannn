<script>
    const audio = document.getElementById("myAudio");
    const playIcon = document.getElementById("playIcon");
    const progress = document.getElementById("progress");
    const playBtn = document.getElementById("playBtn");
    const progressBar = document.getElementById("progressBar");
    const progressArea = document.getElementById("progressArea");
    const currentTimeEl = document.getElementById("currentTime");
    const durationTimeEl = document.getElementById("durationTime");

    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playIcon.classList.remove("fa-circle-play");
            playIcon.classList.add("fa-circle-pause");
        } else {
            audio.pause();
            playIcon.classList.remove("fa-circle-pause");
            playIcon.classList.add("fa-circle-play");
        }
    }

    // Update Progress Bar
    audio.ontimeupdate = function() {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percentage + "%";
        
        // Update angka waktu (sederhana)
        let mins = Math.floor(audio.currentTime / 60);
        let secs = Math.floor(audio.currentTime % 60);
        document.getElementById("currentTime").innerHTML = mins + ":" + (secs < 10 ? '0' : '') + secs;
    };

    document.addEventListener("DOMContentLoaded", function () {
    // Cek apakah pengunjung sudah pernah menutup popup hari ini
    const isPopupClosed = localStorage.getItem("premiumPopupClosed");

    if (!isPopupClosed) {
        // Berikan jeda waktu 1 detik (1000 ms) sebelum muncul demi kenyamanan user
        setTimeout(() => {
            const popup = document.getElementById("creativePopup");
            popup.classList.add("show");
        }, 2000);
    }
});

// Fungsi Tutup Popup
function closePremiumPopup() {
    const popup = document.getElementById("creativePopup");
    popup.classList.remove("show");
    
    // Sembunyikan elemen setelah animasi selesai
    setTimeout(() => { popup.style.display = "none"; }, 400);

    // Ingat pilihan user selama 24 jam agar tidak muncul lagi
    localStorage.setItem("premiumPopupClosed", "true");
}

// Fungsi ketika form diisi
function handlePopupSubmit(event) {
    event.preventDefault();
    alert("Terima kasih! Sudah gabutt link iniii heheheeee");
    closePremiumPopup();
}

</script>
