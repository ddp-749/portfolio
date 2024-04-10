document.addEventListener('DOMContentLoaded', function() {
    const sectionLinks = document.querySelectorAll('.section-link');
    const sections = document.querySelectorAll('.section');
    const highlight = document.querySelector('.highlight');

    sectionLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Hide all sections
            sections.forEach(function(section) {
                section.classList.remove('active');
            });

            // Show the clicked section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');

            // Update the highlight position
            const linkRect = link.getBoundingClientRect();
            highlight.style.width = linkRect.width + 'px';
            highlight.style.transform = `translateX(${linkRect.left}px)`;
        });
    });
});

