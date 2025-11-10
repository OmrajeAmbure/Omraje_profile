(function () {
    const texts = ["Omraje Ambure", "Full Stack Enginner", "Student At ISB&M COE"];
    const el = document.getElementById("typed");
    const cursor = document.querySelector(".cursor");
    const typeSpeed = 120;
    const eraseSpeed = 80;
    const pauseAfter = 1400;
    let idx = 0, char = 0, deleting = false;

    function loop() {
        const current = texts[idx];
        if (!deleting) {
            el.textContent = current.slice(0, ++char);
            if (char === current.length) {
                deleting = true;
                setTimeout(loop, pauseAfter);
                return;
            }
        } else {
            el.textContent = current.slice(0, --char);
            if (char === 0) {
                deleting = false;
                idx = (idx + 1) % texts.length;
            }
        }
        setTimeout(loop, deleting ? eraseSpeed : typeSpeed);
    }

    // Add simple blinking for cursor
    const style = document.createElement("style");
    style.textContent = `
                .cursor { display:inline-block; margin-left:6px; animation:blink 1s steps(2,end) infinite; }
                @keyframes blink { 50% { opacity: 0 } }
            `;
    document.head.appendChild(style);

    loop();
})();
const toggleBtn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    icon.classList.replace("fa-moon", "fa-sun");
}

toggleBtn.onclick = () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "dark");
    }
};

let url = "https://script.google.com/macros/s/AKfycbwTTxwjtG9nRrtMMWEifybHeYhCylNfn8xSOxccEcGQ-uGjKaV092t51wjee3dFERU8DQ/exec";
let form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(form);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
        .then(() => {
            alert("✅ Message Sent Successfully!");
            form.reset();
        })
        .catch(err => console.error("Error:", err));
});