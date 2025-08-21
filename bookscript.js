function register() {
    let username = document.getElementById("regUsername")?.value.trim();
    let password = document.getElementById("regPassword")?.value.trim();
    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }
    localStorage.setItem("userUsername", username);
    localStorage.setItem("userPassword", password);
    alert("Registration successful ✅ You can now log in.");
    window.location.href = "login.html";
}

function login() {
    let username = document.getElementById("loginUsername")?.value.trim();
    let password = document.getElementById("loginPassword")?.value.trim();
    let storedUsername = localStorage.getItem("userUsername");
    let storedPassword = localStorage.getItem("userPassword");

    if (username === storedUsername && password === storedPassword) {
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("currentUser", username);

        // Show popup
        alert("✅ Login successful! Welcome " + username);

        // ❌ Delete credentials so they can't be reused
        localStorage.removeItem("userUsername");
        localStorage.removeItem("userPassword");

        // Redirect
        window.location.href = "bookindex.html";
    } else {
        alert("❌ Invalid username or password");
    }
}



document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("loggedIn") === "true") {
        let user = sessionStorage.getItem("currentUser");
        let loginDisplay = document.getElementById("loginUser");
        if (loginDisplay) loginDisplay.textContent = user;
    }
});

function bookHotel(hotelName) {
    if (sessionStorage.getItem("loggedIn") === "true") {
        alert(`✅ Your booking for ${hotelName} is confirmed!`);
    } else {
        alert("⚠️ Please log in to book.");
        window.location.href = "login.html";
    }
}
