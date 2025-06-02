// Sharknetwork Loader
// Copyright (c) 2025 Sharknetwork (informal collective)
// Copyright (c) 2025 root_shark, glibshark
// Licensed under the AGPL-3.0 License
// See: https://www.gnu.org/licenses/agpl-3.0.html
//
// <script src="assets/javascript/footer.js"></script>

function renderMarkdownFromHash() {
    const hash = location.hash.substring(1);
    const mdContainer = document.getElementById("md-container");

    if (!mdContainer) return;

    if (!hash) {
        mdContainer.innerHTML = `<p class="text-gray-400">If you see this, it can be either a test post or a post that does not exist</p>`;
        return;
    }

    fetch(`assets/markdown/${hash}.md`)
        .then(res => res.ok ? res.text() : Promise.reject("404"))
        .then(md => {
            mdContainer.innerHTML = marked.parse(md);
        })
        .catch(() => {
            mdContainer.innerHTML = `<p class="text-red-500">❌ file <strong>${hash}.md</strong> not found.</p>`;
        });
}

window.addEventListener("DOMContentLoaded", renderMarkdownFromHash);
window.addEventListener("hashchange", renderMarkdownFromHash);
