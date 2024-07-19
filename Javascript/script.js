const cardSingola = document.querySelectorAll(".cardSingola");

cardSingola.forEach(card=>{
    card.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
                
        window.location.href = url;
    });
});