const lista = document.getElementById("lista-emprestimos");
exigirLogin();
const usuario = getUsuarioLogado()?.email;

function lerEmprestimos() {
    return JSON.parse(localStorage.getItem("emprestimos")) || [];
}

function renderizar() {
    lista.replaceChildren();

    const meus = lerEmprestimos().filter(e => e.usuario === usuario);

    if (meus.length === 0) {
        lista.textContent = "Você ainda não reservou nenhum livro.";
        return;
    }

    meus.forEach(function (e) {
    const card = document.createElement("article");
    card.className = "card-emprestimo";

    const capa = document.createElement("img");
    capa.className = "capa-mini";
    capa.src = e.img;
    capa.alt = "Capa de " + e.titulo;

    const info = document.createElement("div");
    info.className = "info-emprestimo";

    const titulo = document.createElement("h2");
    titulo.textContent = e.titulo;

    const autor = document.createElement("p");
    autor.textContent = "Autor: " + e.autor;

    const data = document.createElement("p");
    data.textContent = "Reservado em " + new Date(e.data).toLocaleDateString("pt-BR");

    const btn = document.createElement("button");
    btn.className = "botao";
    btn.textContent = "Devolver";
    btn.addEventListener("click", function () {
        devolver(e.id);
    });

    info.append(titulo, autor, data, btn);
    card.append(capa, info);
    lista.appendChild(card);
});
}

function devolver(id) {
    const restantes = lerEmprestimos().filter(e => e.id !== id);
    localStorage.setItem("emprestimos", JSON.stringify(restantes));
    renderizar();
}

renderizar();