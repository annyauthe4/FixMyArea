document.addEventListener("DOMContentLoaded", () => {
	// Form elements
	const reportForm = document.getElementById("reportForm") as HTMLFormElement;
	const submitButton = document.getElementById(
		"submitReport"
	) as HTMLButtonElement;
	const saveDraftButton = document.getElementById(
		"saveDraft"
	) as HTMLButtonElement;

	// Input elements
	const titleInput = document.getElementById("issueTitle") as HTMLInputElement;
	const descriptionInput = document.getElementById(
		"description"
	) as HTMLTextAreaElement;
	const locationInput = document.getElementById("location") as HTMLInputElement;
	const categorySelect = document.getElementById(
		"category"
	) as HTMLSelectElement;
	const fileInput = document.getElementById("imageUpload") as HTMLInputElement;
	const uploadArea = document.getElementById("uploadArea") as HTMLElement;
	const uploadedFile = document.getElementById("uploadedFile") as HTMLElement;
	const removeFileBtn = document.getElementById(
		"removeFile"
	) as HTMLButtonElement;
	const imagePreview = document.getElementById(
		"imagePreview"
	) as HTMLImageElement;

	// Character counters
	const titleCount = document.getElementById("titleCount") as HTMLElement;
	const descriptionCount = document.getElementById(
		"descriptionCount"
	) as HTMLElement;
	const locationCount = document.getElementById("locationCount") as HTMLElement;

	// Modal elements
	const successModal = document.getElementById("successModal") as HTMLElement;
	const submitAnotherBtn = document.getElementById(
		"submitAnother"
	) as HTMLButtonElement;
	const viewReportsBtn = document.getElementById(
		"viewReports"
	) as HTMLButtonElement;
	const reportIdSpan = document.getElementById("reportId") as HTMLElement;

	// Character counting functionality
	const updateCharacterCount = (
		input: HTMLInputElement | HTMLTextAreaElement,
		counter: HTMLElement,
		max: number
	) => {
		const count = input.value.length;
		counter.textContent = count.toString();

		if (count > max * 0.9) {
			counter.style.color = "#ef4444";
		} else if (count > max * 0.7) {
			counter.style.color = "#f59e0b";
		} else {
			counter.style.color = "#9ca3af";
		}
	};

	// Set up character counters
	titleInput.addEventListener("input", () =>
		updateCharacterCount(titleInput, titleCount, 100)
	);
	descriptionInput.addEventListener("input", () =>
		updateCharacterCount(descriptionInput, descriptionCount, 1000)
	);
	locationInput.addEventListener("input", () =>
		updateCharacterCount(locationInput, locationCount, 200)
	);

	// File upload functionality
	const handleFileSelect = (file: File) => {
		if (!file) return;

		// Validate file type
		const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
		if (!allowedTypes.includes(file.type)) {
			showError(
				"upload-error",
				"Please select a valid image file (JPG, PNG, WEBP)"
			);
			return;
		}

		// Validate file size (5MB)
		if (file.size > 5 * 1024 * 1024) {
			showError("upload-error", "File size must be less than 5MB");
			return;
		}

		// Show uploaded file
		const fileName = uploadedFile.querySelector(".file-name") as HTMLElement;
		fileName.textContent = file.name;

		// Create preview
		const reader = new FileReader();
		reader.onload = (e) => {
			imagePreview.src = e.target?.result as string;
		};
		reader.readAsDataURL(file);

		uploadArea.style.display = "none";
		uploadedFile.style.display = "block";
		clearError("upload-error");
	};

	// File input change
	fileInput.addEventListener("change", (e) => {
		const target = e.target as HTMLInputElement;
		const file = target.files?.[0];
		if (file) {
			handleFileSelect(file);
		}
	});

	// Drag and drop functionality
	uploadArea.addEventListener("dragover", (e) => {
		e.preventDefault();
		uploadArea.classList.add("dragover");
	});

	uploadArea.addEventListener("dragleave", () => {
		uploadArea.classList.remove("dragover");
	});

	uploadArea.addEventListener("drop", (e) => {
		e.preventDefault();
		uploadArea.classList.remove("dragover");

		const files = e.dataTransfer?.files;
		if (files && files.length > 0) {
			handleFileSelect(files[0]);
		}
	});

	// Remove file
	removeFileBtn.addEventListener("click", () => {
		fileInput.value = "";
		uploadArea.style.display = "block";
		uploadedFile.style.display = "none";
		imagePreview.src = "";
	});

	// Form validation
	const validateForm = (): boolean => {
		let isValid = true;

		// Clear previous errors
		clearAllErrors();

		// Validate title
		if (!titleInput.value.trim()) {
			showError("title-error", "Issue title is required");
			isValid = false;
		} else if (titleInput.value.length > 100) {
			showError("title-error", "Title must be 100 characters or less");
			isValid = false;
		}

		// Validate category
		if (!categorySelect.value) {
			showError("category-error", "Please select a category");
			isValid = false;
		}

		// Validate description
		if (!descriptionInput.value.trim()) {
			showError("description-error", "Description is required");
			isValid = false;
		} else if (descriptionInput.value.length < 20) {
			showError(
				"description-error",
				"Please provide more details (at least 20 characters)"
			);
			isValid = false;
		} else if (descriptionInput.value.length > 1000) {
			showError(
				"description-error",
				"Description must be 1000 characters or less"
			);
			isValid = false;
		}

		// Validate location
		if (!locationInput.value.trim()) {
			showError("location-error", "Location description is required");
			isValid = false;
		} else if (locationInput.value.length > 200) {
			showError("location-error", "Location must be 200 characters or less");
			isValid = false;
		}

		// Validate priority
		const priorityInputs = document.querySelectorAll(
			'input[name="priority"]'
		) as NodeListOf<HTMLInputElement>;
		const prioritySelected = Array.from(priorityInputs).some(
			(input) => input.checked
		);
		if (!prioritySelected) {
			showError("priority-error", "Please select a priority level");
			isValid = false;
		}

		return isValid;
	};

	// Error handling functions
	const showError = (elementId: string, message: string) => {
		const errorElement = document.getElementById(elementId) as HTMLElement;
		if (errorElement) {
			errorElement.textContent = message;
			errorElement.style.display = "block";
		}
	};

	const clearError = (elementId: string) => {
		const errorElement = document.getElementById(elementId) as HTMLElement;
		if (errorElement) {
			errorElement.textContent = "";
			errorElement.style.display = "none";
		}
	};

	const clearAllErrors = () => {
		const errorElements = document.querySelectorAll(".error-message");
		errorElements.forEach((element) => {
			element.textContent = "";
			(element as HTMLElement).style.display = "none";
		});
	};

	// Form submission
	reportForm.addEventListener("submit", async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		// Show loading state
		submitButton.classList.add("loading");
		submitButton.disabled = true;

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// Generate report ID
			const reportId = `2024-${String(Math.floor(Math.random() * 1000)).padStart(
				3,
				"0"
			)}`;
			reportIdSpan.textContent = `#${reportId}`;

			// Show success modal
			successModal.classList.add("active");
			document.body.style.overflow = "hidden";

			// Reset form
			reportForm.reset();
			updateCharacterCount(titleInput, titleCount, 100);
			updateCharacterCount(descriptionInput, descriptionCount, 1000);
			updateCharacterCount(locationInput, locationCount, 200);

			// Reset file upload
			uploadArea.style.display = "block";
			uploadedFile.style.display = "none";
		} catch (error) {
			console.error("Error submitting report:", error);
			alert("There was an error submitting your report. Please try again.");
		} finally {
			// Remove loading state
			submitButton.classList.remove("loading");
			submitButton.disabled = false;
		}
	});

	// Save draft functionality
	saveDraftButton.addEventListener("click", () => {
		const formData = new FormData(reportForm);
		const draftData = Object.fromEntries(formData.entries());

		// Save to localStorage (in real app, save to server)
		localStorage.setItem("reportDraft", JSON.stringify(draftData));

		// Show confirmation
		const originalText = saveDraftButton.innerHTML;
		saveDraftButton.innerHTML = '<i class="fas fa-check"></i> Saved!';
		saveDraftButton.style.backgroundColor = "#16a34a";

		setTimeout(() => {
			saveDraftButton.innerHTML = originalText;
			saveDraftButton.style.backgroundColor = "";
		}, 2000);
	});

	// Load draft on page load
	const loadDraft = () => {
		const draftData = localStorage.getItem("reportDraft");
		if (draftData) {
			try {
				const data = JSON.parse(draftData);

				if (data.issueTitle) titleInput.value = data.issueTitle;
				if (data.category) categorySelect.value = data.category;
				if (data.description) descriptionInput.value = data.description;
				if (data.location) locationInput.value = data.location;
				if (data.priority) {
					const priorityInput = document.querySelector(
						`input[name="priority"][value="${data.priority}"]`
					) as HTMLInputElement;
					if (priorityInput) priorityInput.checked = true;
				}

				// Update character counters
				updateCharacterCount(titleInput, titleCount, 100);
				updateCharacterCount(descriptionInput, descriptionCount, 1000);
				updateCharacterCount(locationInput, locationCount, 200);
			} catch (error) {
				console.error("Error loading draft:", error);
			}
		}
	};

	// Modal actions
	submitAnotherBtn.addEventListener("click", () => {
		successModal.classList.remove("active");
		document.body.style.overflow = "auto";
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

	viewReportsBtn.addEventListener("click", () => {
		// Navigate to reports page
		console.log("Navigate to reports page");
		window.location.href = "/dashboard";
	});

	// Close modal when clicking outside
	successModal.addEventListener("click", (e) => {
		if (e.target === successModal) {
			successModal.classList.remove("active");
			document.body.style.overflow = "auto";
		}
	});

	// Mobile menu functionality
	const mobileMenuBtn = document.getElementById(
		"mobileMenuBtn"
	) as HTMLButtonElement;
	if (mobileMenuBtn) {
		mobileMenuBtn.addEventListener("click", () => {
			console.log("Mobile menu clicked");
			// Add mobile menu logic here
		});
	}

	// Load draft on page load
	loadDraft();

	// Auto-save draft every 30 seconds
	setInterval(() => {
		if (titleInput.value || descriptionInput.value || locationInput.value) {
			const formData = new FormData(reportForm);
			const draftData = Object.fromEntries(formData.entries());
			localStorage.setItem("reportDraft", JSON.stringify(draftData));
		}
	}, 30000);

	// Clear draft after successful submission
	reportForm.addEventListener("submit", () => {
		localStorage.removeItem("reportDraft");
	});
});
