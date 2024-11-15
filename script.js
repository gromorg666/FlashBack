document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    // Iterar sobre los artículos y añadirlos al DOM
    articles.forEach(item => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <img src="${item.image}" alt="${item.title}">
            <a href="${item.link}" target="_blank">Leer más</a>
        `;
        content.appendChild(article);
    });
});