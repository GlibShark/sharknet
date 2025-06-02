// Sharknetwork Loader
// Copyright (c) 2025 Sharknetwork (informal collective)
// Copyright (c) 2025 root_shark, glibshark
// Licensed under the AGPL-3.0 License
// See: https://www.gnu.org/licenses/agpl-3.0.html
//
// This script add a topbar.
// <script src="assets/javascript/topbar.js"></script>

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = [
    { text: "Home", href: "/" },
  ];

  const topbar = document.createElement("div");
  topbar.className =
    "fixed top-0 left-0 w-full bg-gray-950 bg-opacity-80 text-white flex justify-between items-center px-6 py-3 shadow-lg z-50 backdrop-blur";

  const logo = document.createElement("div");
  logo.className = "text-xl font-bold";
  logo.textContent = "root_shark";

  const linksContainer = document.createElement("div");
  linksContainer.className = "space-x-4";

  navLinks.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.className = "hover:text-teal-400 transition";
    linksContainer.appendChild(a);
  });

  // build
  topbar.appendChild(logo);
  topbar.appendChild(linksContainer);
  document.body.prepend(topbar);
});