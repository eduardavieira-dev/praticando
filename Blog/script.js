document.addEventListener('DOMContentLoaded', function() {
    const filterLinks = document.querySelectorAll('.filter-link');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    // Função para filtrar posts por categoria
    function filterPostsByCategory(category) {
        const posts = document.querySelectorAll('.caixa-post');
        
        posts.forEach(post => {
            const postCategory = post.querySelector('.categorias').textContent;
            
            if (category === 'all' || postCategory === category) {
                post.style.display = 'flex';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // Função para buscar posts por título e descrição
    function searchPosts(query) {
        const posts = document.querySelectorAll('.caixa-post');
        query = query.toLowerCase();
        
        posts.forEach(post => {
            const title = post.querySelector('.titulo').textContent.toLowerCase();
            const description = post.querySelector('.texto p').textContent.toLowerCase();
            
            if (title.includes(query) || description.includes(query)) {
                post.style.display = 'flex';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // Evento para links de filtro
    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            filterPostsByCategory(category);
        });
    });

    // Evento para botão de busca
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        searchPosts(query);
    });

    // Evento para buscar enquanto digita
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        searchPosts(query);
    });
});
