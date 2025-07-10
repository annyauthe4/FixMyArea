document.addEventListener("DOMContentLoaded", () => {
	const loginForm = document.querySelector("#loginForm") as HTMLFormElement;
	const emailInput = document.querySelector("#email") as HTMLInputElement;
	const passwordInput = document.querySelector("#password") as HTMLInputElement;
	const togglePassword = document.querySelector(
		"#togglePassword"
	) as HTMLElement;
	const errorMessage = document.querySelector("#errorMessage") as HTMLElement;

	if (!loginForm || !emailInput || !passwordInput || !errorMessage) {
		console.error("Login form elements not found.");
		return;
	}

	// Show error helper
	const displayError = (msg: string) => {
		errorMessage.textContent = msg;
		errorMessage.style.display = "block";
	};

	// Toggle password visibility
	if (togglePassword) {
		togglePassword.addEventListener("click", () => {
			const type =
				passwordInput.getAttribute("type") === "password" ? "text" : "password";
			passwordInput.setAttribute("type", type);
			togglePassword.classList.toggle("fa-eye");
			togglePassword.classList.toggle("fa-eye-slash");
		});
	}

	// Handle login submit
	loginForm.addEventListener("submit", async (e) => {
		e.preventDefault();

		const email = emailInput.value.trim();
		const password = passwordInput.value.trim();

		// Clear previous error
		errorMessage.textContent = "";
		errorMessage.style.display = "none";

		if (!email || !password) {
			displayError("Please enter both email and password.");
			return;
		}

		try {
			const response = await fetch("http://localhost:5000/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			let data;
			try {
				data = await response.json();
			} catch (err) {
				displayError("Invalid server response.");
				return;
			}

			if (!response.ok) {
				const message = data.message || data.error || "Login failed.";
				displayError(message);
				return;
			}

			const token = data.access_token;
			const user = data.user;

			if (!token || !user) {
				displayError("Unexpected server response.");
				return;
			}

			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(user));

			// Redirect based on user type
			if (user.is_admin) {
				window.location.href = "./admin_dashboard.html";
			} else {
				window.location.href = "./user_dashboard.html";
			}
		} catch (error) {
			console.error("Network error:", error);
			displayError("Unable to connect to the server. Please try again.");
		}
	});
});
