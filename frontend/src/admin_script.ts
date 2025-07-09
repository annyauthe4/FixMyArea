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

	// Modal elements
	const modalOverlay = document.getElementById("modalOverlay") as HTMLElement;
	const modalClose = document.getElementById("modalClose") as HTMLButtonElement;
	const modalCancel = document.getElementById(
		"modalCancel"
	) as HTMLButtonElement;
	const modalSave = document.getElementById("modalSave") as HTMLButtonElement;

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

	// Open modal
	const openModal = (reportId: string) => {
		// Populate modal with report data (in real app, fetch from API)
		const reportData = getReportData(reportId);
		populateModal(reportData);
		modalOverlay.classList.add("active");
		document.body.style.overflow = "hidden";
	};

	// Close modal
	const closeModal = () => {
		modalOverlay.classList.remove("active");
		document.body.style.overflow = "auto";
	};

	// Event listeners
	if (mobileMenuBtn) {
		mobileMenuBtn.addEventListener("click", toggleSidebar);
	}

	if (sidebarToggle) {
		sidebarToggle.addEventListener("click", closeSidebar);
	}

	if (mobileOverlay) {
		mobileOverlay.addEventListener("click", closeSidebar);
	}

	if (modalClose) {
		modalClose.addEventListener("click", closeModal);
	}

	if (modalCancel) {
		modalCancel.addEventListener("click", closeModal);
	}

	if (modalOverlay) {
		modalOverlay.addEventListener("click", (e) => {
			if (e.target === modalOverlay) {
				closeModal();
			}
		});
	}

	// View Details buttons
	const viewDetailsButtons = document.querySelectorAll(".view-details");
	viewDetailsButtons.forEach((button) => {
		button.addEventListener("click", (e) => {
			const target = e.target as HTMLButtonElement;
			const reportId = target.getAttribute("data-report-id");
			if (reportId) {
				openModal(reportId);
			}
		});
	});

	// Save changes button
	if (modalSave) {
		modalSave.addEventListener("click", () => {
			const statusSelect = document.getElementById(
				"statusSelect"
			) as HTMLSelectElement;
			const prioritySelect = document.getElementById(
				"prioritySelect"
			) as HTMLSelectElement;
			const commentText = document.getElementById(
				"commentText"
			) as HTMLTextAreaElement;

			const updateData = {
				status: statusSelect.value,
				priority: prioritySelect.value,
				comment: commentText.value,
			};

			console.log("Saving report update:", updateData);

			// Show success message (in real app, make API call)
			alert("Report updated successfully!");
			closeModal();

			// Refresh table data
			refreshTableData();
		});
	}

	// Search functionality
	const searchInput = document.querySelector(
		".search-input"
	) as HTMLInputElement;
	if (searchInput) {
		searchInput.addEventListener("input", (e) => {
			const target = e.target as HTMLInputElement;
			console.log("Search query:", target.value);
			// Add search logic here
		});
	}

	// Filter functionality
	const filterSelects = document.querySelectorAll(".filter-select");
	filterSelects.forEach((select) => {
		select.addEventListener("change", (e) => {
			const target = e.target as HTMLSelectElement;
			console.log("Filter changed:", target.value);
			// Add filtering logic here
		});
	});

	// Export functionality
	const exportBtn = document.querySelector(".export-btn") as HTMLButtonElement;
	if (exportBtn) {
		exportBtn.addEventListener("click", () => {
			console.log("Exporting reports...");
			// Add export logic here
		});
	}

	// Pagination
	const pageButtons = document.querySelectorAll(".page-btn");
	pageButtons.forEach((button) => {
		button.addEventListener("click", (e) => {
			const target = e.target as HTMLButtonElement;
			if (!target.disabled) {
				console.log("Page navigation clicked");
				// Add pagination logic here
			}
		});
	});

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

	// Logout functionality
	const logoutLink = document.querySelector(".logout-link") as HTMLAnchorElement;
	if (logoutLink) {
		logoutLink.addEventListener("click", (e) => {
			e.preventDefault();
			if (confirm("Are you sure you want to logout?")) {
				console.log("Admin logged out");
				// Add logout logic here
			}
		});
	}

	// Helper functions
	function getReportData(reportId: string) {
		// Mock data - in real app, fetch from API
		return {
			id: reportId,
			title: "Broken streetlight on Oak Street",
			category: "Street Lighting",
			priority: "high",
			date: "Dec 15, 2024",
			description:
				"The streetlight on Oak Street near 5th Avenue has been flickering for several days and went completely dark last night. This creates a safety hazard for pedestrians and drivers, especially during evening hours. The light pole appears to be in good condition, so this seems to be an electrical issue.",
			location: "Oak St & 5th Ave",
			coordinates: "40.7128, -74.0060",
			status: "pending",
			image: "/placeholder.svg?height=200&width=300",
		};
	}

	function populateModal(data: any) {
		const elements = {
			modalReportId: document.getElementById("modalReportId"),
			modalCategory: document.getElementById("modalCategory"),
			modalPriority: document.getElementById("modalPriority"),
			modalDate: document.getElementById("modalDate"),
			modalDescription: document.getElementById("modalDescription"),
			modalImage: document.getElementById("modalImage") as HTMLImageElement,
			statusSelect: document.getElementById("statusSelect") as HTMLSelectElement,
			prioritySelect: document.getElementById(
				"prioritySelect"
			) as HTMLSelectElement,
		};

		if (elements.modalReportId)
			elements.modalReportId.textContent = `#${data.id}`;
		if (elements.modalCategory)
			elements.modalCategory.textContent = data.category;
		if (elements.modalPriority) {
			elements.modalPriority.textContent = data.priority;
			elements.modalPriority.className = `priority-badge ${data.priority}`;
		}
		if (elements.modalDate) elements.modalDate.textContent = data.date;
		if (elements.modalDescription)
			elements.modalDescription.textContent = data.description;
		if (elements.modalImage) elements.modalImage.src = data.image;
		if (elements.statusSelect) elements.statusSelect.value = data.status;
		if (elements.prioritySelect) elements.prioritySelect.value = data.priority;
	}

	function refreshTableData() {
		console.log("Refreshing table data...");
		// Add table refresh logic here
	}

	// Auto-refresh data every 60 seconds
	setInterval(() => {
		console.log("Auto-refreshing dashboard data...");
		// Add auto-refresh logic here
	}, 60000);
});
