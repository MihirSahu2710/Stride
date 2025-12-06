// STRIDE FINANCE - SIMPLE JAVASCRIPT

window.onload = function() {
    showGreeting();
    showRandomTip();
    checkPhoneNumber();
    addThemeButton();
    addBackToTopButton();
};

function showGreeting() {
    let heroSection = document.querySelector(".hero-left");
    if (!heroSection) return;
    
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    
    let greetingText = "";
    if (currentHour < 12) {
        greetingText = "Good Morning!";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon!";
    } else {
        greetingText = "Good Evening!";
    }
    
    let greeting = document.createElement("h2");
    greeting.textContent = greetingText;
    heroSection.appendChild(greeting);
}

function showRandomTip() {
    let aboutSection = document.querySelector(".about-text");
    if (!aboutSection) return;
    
    let tipsList = [
        "Start investing early.",
        "Diversify your investments.",
        "Save 20% of income.",
        "Have emergency fund.",
        "Invest regularly."
    ];
    
    let randomNumber = Math.floor(Math.random() * tipsList.length);
    let selectedTip = tipsList[randomNumber];
    
    let tip = document.createElement("p");
    tip.textContent = "Tip: " + selectedTip;
    tip.className = "finance-tip";
    aboutSection.appendChild(tip);
}

function checkPhoneNumber() {
    let signupButton = document.querySelector(".signup-btn");
    let phoneInput = document.querySelector(".input-box");
    
    if (!signupButton || !phoneInput) return;
    
    signupButton.onclick = function(event) {
        let phone = phoneInput.value;
        
        if (phone.length === 10 && /^\d+$/.test(phone)) {
            alert("OTP sent to " + phone);
        } else {
            alert("Please enter 10 digit number");
            event.preventDefault();
        }
    };
}

function addThemeButton() {
    let themeButton = document.createElement("button");
    themeButton.textContent = "Dark Mode";
    themeButton.className = "theme-button";
    document.body.appendChild(themeButton);
    
    let isDark = false;
    
    themeButton.onclick = function() {
        if (isDark) {
            document.body.style.background = "white";
            document.body.style.color = "black";
            themeButton.textContent = "Dark Mode";
            isDark = false;
        } else {
            document.body.style.background = "#1a1a1a";
            document.body.style.color = "white";
            themeButton.textContent = "Light Mode";
            isDark = true;
        }
    };
}

function addBackToTopButton() {
    let topButton = document.createElement("button");
    topButton.textContent = "Top";
    topButton.className = "top-button";
    document.body.appendChild(topButton);
    
    topButton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    window.onscroll = function() {
        if (window.scrollY > 200) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    };
}