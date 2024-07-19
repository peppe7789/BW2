const cardAppartamenti = document.querySelectorAll(".cardAppartamenti");

cardAppartamenti.forEach(appartament=>{
    appartament.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
                
        window.location.href = url;
    });
});

const logo = document.querySelector(".logo");

logo.addEventListener(`click`, function(){
    const url = this.getAttribute('data-url');

    window.location.href = url;

});