// dashboard-script.ts

document.addEventListener("DOMContentLoaded", async () => {
	const API_BASE = "http://localhost:5000/api";
	const token = localStorage.getItem("token");

	const headers = {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json",
	};

	const userJson = localStorage.getItem("user");

	if (!userJson) {
		window.location.href = "./login.html";
		return;
	}

	const user = JSON.parse(userJson);

	if (user.is_admin) {
		window.location.href = "./admin_dashboard.html";
	}

	function updateUserProfile(user: any) {
		document.querySelector(".user-name")!.textContent = user.name;
		document.querySelector(".user-email")!.textContent = user.email;
		document.querySelector(
			".welcome-title"
		)!.textContent = `Welcome back, ${user.name}! 👋`;
	}

	function updateSummaryCards(summary: any) {
		document.querySelector(".summary-card.total .card-number")!.textContent =
			summary.total;
		document.querySelector(".summary-card.resolved .card-number")!.textContent =
			summary.resolved;
		document.querySelector(".summary-card.pending .card-number")!.textContent =
			summary.pending;
		document.querySelector(".summary-card.rejected .card-number")!.textContent =
			summary.rejected;
	}

	function createRecentReportCard(report: any) {
		return `
			<div class="report-card">
				<div class="report-header">
					<h3 class="report-title">${report.title}</h3>
					<span class="status-badge ${report.status.toLowerCase()}">${
			report.status
		}</span>
				</div>
				<div class="report-meta">
					<span class="report-category">
						<i class="fas fa-tag"></i> ${report.category}
					</span>
					<span class="report-date">${report.date}</span>
				</div>
				<button class="view-btn">View Details</button>
			</div>`;
	}

	function updateRecentReports(reports: any[]) {
		const container = document.querySelector(".reports-grid")!;
		container.innerHTML = reports.map(createRecentReportCard).join("");
	}

	function createReportTableRow(report: any) {
		return `
			<tr>
				<td class="report-title-cell">${report.title}</td>
				<td>
					<span class="category-tag">
						<i class="fas fa-tag"></i> ${report.category}
					</span>
				</td>
				<td><span class="status-badge ${report.status.toLowerCase()}">${
			report.status
		}</span></td>
				<td>${report.date}</td>
				<td><button class="table-view-btn">View Details</button></td>
			</tr>`;
	}

	function updateAllReportsTable(reports: any[]) {
		const tbody = document.querySelector(".reports-table tbody")!;
		tbody.innerHTML = reports.map(createReportTableRow).join("");
	}

	async function fetchData() {
		try {
			const [userRes, summaryRes, recentRes, allRes] = await Promise.all([
				fetch(`${API_BASE}/auth/me`, { headers }),
				fetch(`${API_BASE}/reports/summary`, { headers }),
				fetch(`${API_BASE}/reports/recent`, { headers }),
				fetch(`${API_BASE}/reports`, { headers }),
			]);

			if (!userRes.ok || !summaryRes.ok || !recentRes.ok || !allRes.ok) {
				throw new Error("Error fetching dashboard data");
			}

			const user = await userRes.json();
			const summary = await summaryRes.json();
			const recent = await recentRes.json();
			const all = await allRes.json();

			updateUserProfile(user);
			updateSummaryCards(summary);
			updateRecentReports(recent);
			updateAllReportsTable(all);
		} catch (err) {
			console.error("Dashboard fetch error:", err);
		}
	}

	fetchData();

	// Add logout logic
	document.querySelector(".logout-link")?.addEventListener("click", (e) => {
		e.preventDefault();
		if (confirm("Are you sure you want to logout?")) {
			localStorage.removeItem("token");
			window.location.href = "./login.html";
		}
	});

	// Filters (optional)
	const filterSelects = document.querySelectorAll(".filter-select");
	filterSelects.forEach((select) => {
		select.addEventListener("change", async () => {
			const category = (
				document.querySelectorAll(".filter-select")[0] as HTMLSelectElement
			).value;
			const status = (
				document.querySelectorAll(".filter-select")[1] as HTMLSelectElement
			).value;

			try {
				const query = `?category=${encodeURIComponent(
					category
				)}&status=${encodeURIComponent(status)}`;
				const res = await fetch(`${API_BASE}/reports${query}`, { headers });
				if (!res.ok) throw new Error("Failed to filter reports");
				const filtered = await res.json();
				updateAllReportsTable(filtered);
			} catch (err) {
				console.error("Filter error:", err);
			}
		});
	});

	// Auto-refresh every 30s
	setInterval(fetchData, 30000);
});
