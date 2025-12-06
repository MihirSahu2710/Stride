window.onload = function() {
    showGreeting();
    checkPhone();
};

function showGreeting() {
    let box = document.querySelector(".hero-left");
    if (!box) return;

    let hour = new Date().getHours();
    let text = "";

    if (hour < 12) {
        text = "Good Morning!";
    } else if (hour < 18) {
        text = "Good Afternoon!";
    } else {
        text = "Good Evening!";
    }

    let h2 = document.createElement("h2");
    h2.textContent = text;
    box.appendChild(h2);
}

function checkPhone() {
    let btn = document.querySelector(".signup-btn");
    let input = document.querySelector(".input-box");

    if (!btn || !input) return;

    btn.onclick = function() {
        let number = input.value;

        if (number.length === 10) {
            alert("OTP sent!");
        } else {
            alert("Enter 10 digit number");
        }
    };
}
