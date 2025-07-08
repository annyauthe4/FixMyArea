// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
	const mobileMenuBtn = document.getElementById(
		"mobileMenuBtn"
	) as HTMLButtonElement;
	const navLinks = document.querySelector(".nav-links") as HTMLElement;

	if (mobileMenuBtn && navLinks) {
		mobileMenuBtn.addEventListener("click", () => {
			navLinks.classList.toggle("mobile-active");
			mobileMenuBtn.classList.toggle("active");
		});
	}

	// Smooth scrolling for anchor links
	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			const targetId = link.getAttribute("href")?.substring(1);
			const targetElement = document.getElementById(targetId || "");

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		});
	});

	// CTA button click handler
	const ctaButton = document.querySelector(".cta-button") as HTMLButtonElement;
	if (ctaButton) {
		ctaButton.addEventListener("click", () => {
			// Redirect to report form or show modal
			console.log("Report an Issue clicked");
			// You can add navigation logic here
		});
	}

	// Add scroll effect to navbar
	window.addEventListener("scroll", () => {
		const navbar = document.querySelector(".navbar") as HTMLElement;
		if (window.scrollY > 50) {
			navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
			navbar.style.backdropFilter = "blur(10px)";
		} else {
			navbar.style.backgroundColor = "#ffffff";
			navbar.style.backdropFilter = "none";
		}
	});
});
