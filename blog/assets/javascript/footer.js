// Sharknetwork Loader
// Copyright (c) 2025 Sharknetwork (informal collective)
// Copyright (c) 2025 root_shark, glibshark
// Licensed under the AGPL-3.0 License
// See: https://www.gnu.org/licenses/agpl-3.0.html
//
// This script add a footer.
// <script src="assets/javascript/footer.js"></script>

const footer = document.createElement("footer");
footer.className = "mt-16 w-full bg-gray-800 text-gray-400 py-6 px-4 text-center text-sm border-t border-teal-500";
footer.innerHTML = `<p>&copy; <span id="year"></span> root_shark. All rights reserved.</p>`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(footer);

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
