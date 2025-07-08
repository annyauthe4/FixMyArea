document.addEventListener("DOMContentLoaded", () => {
	// Mobile menu functionality
	const mobileMenuBtn = document.getElementById(
		"mobileMenuBtn"
	) as HTMLButtonElement;
	const sidebar = document.getElementById("sidebar") as HTMLElement;
	const sidebarToggle = document.getElementById(
		"sidebarToggle"
	) as HTMLButtonElement;
	const mobileOverlay = document.getElementById("mobileOverlay") as HTMLElement;

	// Toggle sidebar on mobile
	const toggleSidebar = () => {
		sidebar.classList.toggle("active");
		mobileOverlay.classList.toggle("active");
		document.body.style.overflow = sidebar.classList.contains("active")
			? "hidden"
			: "auto";
	};

	// Close sidebar
	const closeSidebar = () => {
		sidebar.classList.remove("active");
		mobileOverlay.classList.remove("active");
		document.body.style.overflow = "auto";
	};

	if (mobileMenuBtn) {
		mobileMenuBtn.addEventListener("click", toggleSidebar);
	}

	if (sidebarToggle) {
		sidebarToggle.addEventListener("click", closeSidebar);
	}

	if (mobileOverlay) {
		mobileOverlay.addEventListener("click", closeSidebar);
	}

	// Close sidebar when clicking nav links on mobile
	const navLinks = document.querySelectorAll(".nav-link");
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			if (window.innerWidth <= 768) {
				closeSidebar();
			}
		});
	});

	// Handle window resize
	window.addEventListener("resize", () => {
		if (window.innerWidth > 768) {
			closeSidebar();
		}
	});

	// Report issue button click
	const reportIssueBtn = document.querySelector(
		".report-issue-btn"
	) as HTMLButtonElement;
	if (reportIssueBtn) {
		reportIssueBtn.addEventListener("click", () => {
			console.log("Navigate to report issue page");
			// Add navigation logic here
		});
	}

	// View buttons click handlers
	const viewButtons = document.querySelectorAll(".view-btn, .table-view-btn");
	viewButtons.forEach((button) => {
		button.addEventListener("click", (e) => {
			const target = e.target as HTMLButtonElement;
			console.log("View report details");
			// Add view details logic here
		});
	});

	// Filter functionality
	const filterSelects = document.querySelectorAll(".filter-select");
	filterSelects.forEach((select) => {
		select.addEventListener("change", (e) => {
			const target = e.target as HTMLSelectElement;
			console.log("Filter changed:", target.value);
			// Add filtering logic here
		});
	});

	// Notification button
	const notificationBtn = document.querySelector(
		".notification-btn"
	) as HTMLButtonElement;
	if (notificationBtn) {
		notificationBtn.addEventListener("click", () => {
			console.log("Show notifications");
			// Add notification logic here
		});
	}

	// Logout functionality
	const logoutLink = document.querySelector(".logout-link") as HTMLAnchorElement;
	if (logoutLink) {
		logoutLink.addEventListener("click", (e) => {
			e.preventDefault();
			if (confirm("Are you sure you want to logout?")) {
				console.log("User logged out");
				// Add logout logic here
			}
		});
	}

	// Add smooth scrolling for better UX
	const smoothScroll = (target: Element) => {
		target.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	// Auto-refresh data every 30 seconds (simulation)
	setInterval(() => {
		console.log("Refreshing dashboard data...");
		// Add data refresh logic here
	}, 30000);
});
