document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const articles = document.querySelectorAll('.article-card');

    // Classes Tailwind pour l'état "Actif" et "Inactif" des boutons
    const activeClasses = ['font-bold', 'text-blue-600', 'border-b-2', 'border-blue-600', '-mb-[18px]'];
    const inactiveClasses = ['font-semibold', 'text-gray-500', 'hover:text-black', 'transition-colors'];

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedCategory = btn.getAttribute('data-category');

            // 1. Réinitialiser et mettre à jour le style de tous les boutons
            filterBtns.forEach(b => {
                b.classList.remove(...activeClasses);
                b.classList.add(...inactiveClasses);
            });
            
            btn.classList.remove(...inactiveClasses);
            btn.classList.add(...activeClasses);

            // 2. Filtrer les articles
            articles.forEach(article => {
                const articleCategory = article.getAttribute('data-category');
                if (selectedCategory === 'tout' || selectedCategory === articleCategory) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
});