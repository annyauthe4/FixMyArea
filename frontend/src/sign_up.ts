// signup.ts

document.addEventListener("DOMContentLoaded", () => {
	function setupPasswordToggle(inputId: string, toggleId: string) {
		const passwordInput = document.getElementById(inputId) as HTMLInputElement;
		const toggleButton = document.getElementById(toggleId) as HTMLButtonElement;

		if (passwordInput && toggleButton) {
			toggleButton.addEventListener("click", () => {
				const icon = toggleButton.querySelector("i");
				if (passwordInput.type === "password") {
					passwordInput.type = "text";
					if (icon) icon.classList.replace("fa-eye", "fa-eye-slash");
				} else {
					passwordInput.type = "password";
					if (icon) icon.classList.replace("fa-eye-slash", "fa-eye");
				}
			});
		}
	}

	// Call these after DOM is ready
	setupPasswordToggle("password", "passwordToggle");
	setupPasswordToggle("confirmPassword", "confirmPasswordToggle");
});

const form = document.getElementById("signupForm") as HTMLFormElement;

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	// Collect form data
	const name = (
		document.getElementById("fullName") as HTMLInputElement
	).value.trim();
	const email = (
		document.getElementById("email") as HTMLInputElement
	).value.trim();
	const phone = (
		document.getElementById("phone") as HTMLInputElement
	).value.trim();
	const password = (document.getElementById("password") as HTMLInputElement)
		.value;
	const confirmPassword = (
		document.getElementById("confirmPassword") as HTMLInputElement
	).value;

	// Basic validation
	if (password !== confirmPassword) {
		alert("Passwords do not match.");
		return;
	}

	try {
		const response = await fetch("http://localhost:5000/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				phone,
				password,
			}),
		});

		const data = await response.json();

		if (response.ok) {
			alert("Account created successfully!");
			window.location.href = "./login.html";
		} else {
			alert(data.error || "Something went wrong.");
		}
	} catch (error) {
		console.error("Signup error:", error);
		alert("Network error. Please try again.");
	}
});
