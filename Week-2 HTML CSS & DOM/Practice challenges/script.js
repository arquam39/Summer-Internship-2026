// ----- show password button,,,
let showPasswordButton = document.getElementById("showPassword");
let passwordInput = document.getElementById("password");

showPasswordButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        showPasswordButton.textContent = "Show Password";
    }
});

let popupButton = document.getElementById("openPopup");
popupButton.addEventListener("click", function () {
    alert("This is a popup message!");
});

// ----- add or remove card items,,,

let task = document.getElementById("itemInput");
let addTaskButton = document.getElementById("addItem");

addTaskButton.addEventListener("click", function () {
    let item = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";

    item.textContent = task.value;
    item.appendChild(deleteButton);

    document.getElementById("itemsList").appendChild(item);
    task.value = "";
    deleteButton.addEventListener("click", function () {
        document.getElementById("itemsList").removeChild(item);
    });
});

// ---- stop watch,,,

let sec = 0
let interval = null
const display = document.getElementById("display");

function update() {
    let hr = Math.floor(sec / 3600);
    let min = Math.floor((sec % 3600) / 60);
    let secs = sec % 60;

    display.textContent = String(hr).padStart(2, "0") + ":" + String(min).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0");
}

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

start.addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(() => {
            sec++;
            update();
        }, 1000)
    }
})

stop.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    update()
})

reset.addEventListener("click", () => {
    clearInterval(interval);
    sec = 0;
    interval = null
    update()
})


// animation on scroll,,,

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        const top = box.getBoundingClientRect().top;

        if (top < window.innerHeight - 150) {
            box.classList.add("show");
        }
    });
});


// ----live search,,,

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", (e) => {
    const items = document.querySelectorAll("#itemsList li");
    const value = e.target.value.toLowerCase();
    let ul = document.getElementById("itemsList");
    ul.classList.remove("hide")

    items.forEach(item => {
        const text = item.textContent.toLowerCase();

        if (text.includes(value)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});


// --- timer,,,

let timerInterval = null;
let timerSeconds = 0;
let timerDisplay = document.getElementById("timerDisplay");
let timerStart = document.getElementById("timerStart");
let timerStop = document.getElementById("timerStop");
let timerReset = document.getElementById("timerReset");
let timerInput = document.getElementById("timerInput");

function updateTimer() {
    let hrs = Math.floor(timerSeconds / 3600);
    let mins = Math.floor((timerSeconds % 3600) / 60);
    let secs = timerSeconds % 60;

    timerDisplay.textContent = String(hrs).padStart(2, "0") + ":" + String(mins).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0");
}

timerStart.addEventListener("click", () => {
    timerSeconds = Number(timerInput.value);
    timerStart.textContent = "Restart Timer";
    updateTimer();
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimer();
            } else {
                clearInterval(timerInterval);
                interval=null;
            }
        }, 1000);
    }
});

timerStop.addEventListener("click", () => {
    clearInterval(timerInterval);
    interval = null;
    updateTimer();
});

timerReset.addEventListener("click", () => {
    clearInterval(timerInterval);
    interval = null;
    timerSeconds = 0;
    updateTimer();
});


