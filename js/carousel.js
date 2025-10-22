// adicionar botão de voltar e prosseguir.

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }
    static _sequence = 0;
    static _size = 0;
    static _interval = null;

    static _resetInterval() {
        clearInterval(Carousel._interval);
    }

    static _render() {
        const carouselDiv = document.getElementById("carousel");
        const carouselTitleDiv = document.getElementById("carousel-title");

        if (!carouselDiv || !carouselTitleDiv) return;

        const currentItem = carouselArr[Carousel._sequence];

        carouselDiv.innerHTML = `<a href="${currentItem.link}"><img src="img/${currentItem.image}" alt="${currentItem.title}"> </a>`;
        carouselTitleDiv.innerHTML = `<h2>${currentItem.title}</h2>`;
        const img = carouselDiv.querySelector("img");
        if (img) {
            img.style.maxWidth = "100%";
            img.style.width = "45%";
            img.style.height = "auto";
            img.style.display = "block";
            img.style.margin = "0 auto";
        }
        carouselDiv.style.textAlign = "center";

    }

    static Start(arr) {

        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;

                // const btnVoltar = document.getElementById("button_voltar");
                // const btnProsseguir = document.getElementById("button_prosseguir");

                // if (btnVoltar) {
                //     btnVoltar.addEventListener("click", Carousel.Previous);
                // }
                // if (btnProsseguir) {
                //     btnProsseguir.addEventListener("click", Carousel.Next);
                // }

                Carousel._render(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }

        Carousel._render();

        Carousel._sequence++;
    }

    static Previous() {
        console.log('ffdeerf')
        Carousel._sequence-=2;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1; // Vai para o final
        }
        Carousel._render();
    }
}
const seta_direita = document.getElementById('button_prosseguir'); //Captura o ID da seta-direita
const seta_esquerda = document.getElementById('button_voltar'); //Captura o ID da seta-esquerda

//Reinicia o intervalo do Carrossel e passa para a prox img
seta_direita.addEventListener('click', () => {
    Carousel._resetInterval();
    Carousel.Next();
    Carousel._interval = setInterval(function(){ Carousel.Next();},5000); //Volta com o intervalo para continuar o intervalo
});

//Reinicia o intervalo do Carrossel e volta a img anterior
seta_esquerda.addEventListener('click',() => {
    Carousel._resetInterval(); //Limpa o intervalo para não causar desincronismo
    Carousel.Previous();
    Carousel._interval = setInterval(function(){ Carousel.Next();},5000) //Volta com o intervalo para continuar o intervalo
});