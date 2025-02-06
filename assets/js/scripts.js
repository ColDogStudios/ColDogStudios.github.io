//////////////////////
//  MAIN WEBSITE JS //
//////////////////////

// ----- Meta Tags ----- //
document.addEventListener("DOMContentLoaded", function() {
    function addMetaTag(name, content) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
    }

    function addMetaProperty(property, content) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
    }

    const currentUrl = window.location.href;
    const siteTitle = document.title;

    // Add Facebook Meta Tags
    addMetaProperty('og:url', currentUrl);
    addMetaProperty('og:type', 'website');
    addMetaProperty('og:title', siteTitle);
    addMetaProperty('og:description', '');
    addMetaProperty('og:image', 'https://coldogstudios.com/assets/images/cds/cdsWallpaperLite.png');

    // Add Twitter Meta Tags
    addMetaTag('twitter:card', 'summary_large_image');
    addMetaProperty('twitter:domain', 'coldogstudios.com');
    addMetaProperty('twitter:url', currentUrl);
    addMetaTag('twitter:title', siteTitle);
    addMetaTag('twitter:description', '');
    addMetaTag('twitter:image', 'https://coldogstudios.com/assets/images/cds/cdsWallpaperLite.png');
});

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
                const yearSpan = this.querySelector("#copyrightYear");
                const currentYear = new Date().getFullYear();
                if (yearSpan) {
                    yearSpan.textContent = `${currentYear}`;
                }
            }
        });
    });
});
