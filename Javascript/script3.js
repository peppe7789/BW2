const logo = document.querySelector(".logo");

logo.addEventListener(`click`, function(){
    const url = this.getAttribute('data-url');

    window.location.href = url;

});