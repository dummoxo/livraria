const imagens = [
    "../../img/imgs/livro-slide1.jpg",
    "../../img/imgs/livro-slide2.jpg",
    "../../img/imgs/livro-slide3.jpg",
    "../../img/imgs/livro-slide4.jpg",
    "../../img/imgs/livro-slide5.jpg"
];

let atual = 0;
const imagem = document.getElementById("imagem");

document.getElementById("proximo").addEventListener("click", function () {
    atual++;
    if (atual === imagens.length) {
        atual = 0;
    }
    mostrar();
});

document.getElementById("anterior").addEventListener("click", function () {
    atual--;
    if (atual < 0) {
        atual = imagens.length - 1;
    }
    mostrar();
});

function mostrar() {
    imagem.classList.add("sumindo");          // começa a sumir

    setTimeout(function () {
        imagem.src = imagens[atual];          // troca a foto quando já sumiu
        imagem.classList.remove("sumindo");   // aparece de novo
    }, 200);                                  // mesmo tempo do transition
}