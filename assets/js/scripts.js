//////////////////////
//  MAIN WEBSITE JS //
//////////////////////

// ----- Meta Tags ----- //

document.addEventListener("DOMContentLoaded", function () {
	// Create the head content
	const headContent = `
        <!-- Browser and Google -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="Xnkypqod1SfUGQoBmOg1Fow2g3TySggs4CW5xRYE_jk" />
        <!-- Icons & Styling-->
        <link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <link rel="stylesheet" href="/assets/css/nav.css" />
        <link rel="stylesheet" href="/assets/css/footer.css" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <!-- Remaining Meta Tags -->
    `;

	// Set the head content
	document.head.innerHTML = headContent;

	// Function to add meta tags
	function addMetaTag(name, content) {
		const meta = document.createElement("meta");
		meta.name = name;
		meta.content = content;
		document.head.appendChild(meta);
	}

	function addMetaProperty(property, content) {
		const meta = document.createElement("meta");
		meta.setAttribute("property", property);
		meta.content = content;
		document.head.appendChild(meta);
	}

	// Fetch and apply metadata from metadata.json
	fetch("/metadata.json")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok " + response.statusText);
			}
			return response.json();
		})
		.then((data) => {
			const currentPath = window.location.pathname;
			const pageMeta = data.pages[currentPath];

			if (pageMeta) {
				document.title = pageMeta.title;

				const metaTags = [
					{ name: "author", content: pageMeta.author },
					{ name: "description", content: pageMeta.description },
					{ name: "keywords", content: pageMeta.keywords },
				];

				metaTags.forEach((tag) => addMetaTag(tag.name, tag.content));

				// Add Social Media Meta Tags
				const currentUrl = window.location.href;
				const siteTitle = document.title;

				addMetaProperty("og:url", currentUrl);
				addMetaProperty("og:type", "website");
				addMetaProperty("og:title", siteTitle);
				addMetaProperty("og:description", pageMeta.description);
				addMetaProperty("og:image", "https://coldogstudios.com/assets/images/cds/cdsWallpaperLite.png");

				addMetaTag("twitter:card", "summary_large_image");
				addMetaProperty("twitter:domain", "coldogstudios.com");
				addMetaProperty("twitter:url", currentUrl);
				addMetaTag("twitter:title", siteTitle);
				addMetaTag("twitter:description", pageMeta.description);
				addMetaTag("twitter:image", "https://coldogstudios.com/assets/images/cds/cdsWallpaperLite.png");
			} else {
				console.error("No metadata found for the current path:", currentPath);
			}
		})
		.catch((error) => console.error("Error fetching metadata:", error));
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
document.addEventListener("DOMContentLoaded", function () {
	fetch("/assets/html/footer.html")
		.then((response) => response.text())
		.then((data) => {
			customElements.define(
				"footer-content",
				class extends HTMLElement {
					constructor() {
						super();
						this.innerHTML = data;
						const yearSpan = this.querySelector("#copyrightYear");
						const currentYear = new Date().getFullYear();
						if (yearSpan) {
							yearSpan.textContent = `${currentYear}`;
						}
					}
				}
			);
		});
});
