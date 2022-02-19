
let btn = document.getElementById("cta-btn");
// let overlay = document.getElementById("cta-btn");
btn.addEventListener('click', () => {
    // rediredt to https://www.unicef.ca/en/search?search= + document.getElementById("questions").value
    window.location.href = "https://www.unicef.ca/en/search?search=" + document.getElementById("questions").value;
})

