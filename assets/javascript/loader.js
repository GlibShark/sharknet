  // Sharknetwork Loader
  // Copyright (c) 2025 Sharknetwork (informal collective)
  // Copyright (c) 2025 root_shark
  // Licensed under the AGPL-3.0 License
  // See: https://www.gnu.org/licenses/agpl-3.0.html
  //
  // This script handles loader. Can load on any website.
  // <script src="assets/javascript/loader.js"></script>

(function () {

  const loader = document.createElement("div");
  loader.id = "global-loader";
  loader.innerHTML = `<div class="spinner"></div>`;
  document.body.appendChild(loader);

  const style = document.createElement("style");
  style.innerHTML = `
    #global-loader {
      position: fixed;
      top: 0; left: 0;
      width: 100vw;
      height: 100vh;
      background-color: #ffffff;
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 0.8s ease, visibility 0.8s ease;
    }

    #global-loader.hidden {
      opacity: 0;
      visibility: hidden;
    }

    .spinner {
      width: 64px;
      height: 64px;
      border: 6px solid #ddd;
      border-top: 6px solid #3498db;
      border-radius: 50%;
      animation: spin 1.2s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
      setTimeout(() => loader.remove(), 800);
    }, 1500); 
  });
})();
