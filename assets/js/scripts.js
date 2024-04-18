//////////////////////
//  MAIN WEBSITE JS //
//////////////////////

// ----- Navigation Menu ----- //
const nav = document.querySelector(".nav"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    //searchIcon.classList.replace("uil-times", "uil-search");
});

navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});

// ----- Footer Load ----- //
document.addEventListener("DOMContentLoaded", function() {
    fetch("/assets/html/footer.html")
    .then(response => response.text())
    .then(data => {
        customElements.define('footer-content', class extends HTMLElement {
            constructor() {
                super();
                this.innerHTML = data;
            }
        });
    });
});
