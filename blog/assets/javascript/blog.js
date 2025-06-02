// Sharknetwork Loader
// Copyright (c) 2025 Sharknetwork (informal collective)
// Copyright (c) 2025 root_shark, glibshark
// Licensed under the AGPL-3.0 License
// See: https://www.gnu.org/licenses/agpl-3.0.html
//
// <script src="assets/javascript/footer.js"></script>

fetch('assets/data/blog.json')
    .then(response => response.json())
    .then(posts => {
        const container = document.getElementById('blog-list');
        posts.forEach(post => {
            const div = document.createElement('div');
            div.className = "p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition";
            div.innerHTML = `
                <a href="render.html#${post.file}" class="text-xl font-semibold text-blue-400 hover:underline">
                    ${post.title}
                </a>
                <p class="text-sm text-gray-400">📅 ${post.date}</p>
            `;
            container.appendChild(div);
        });
    })
    .catch(error => {
    });
