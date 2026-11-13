
const kevin = JSON.parse(localStorage.getItem("userLogado"));

function lerEmprestimos() {
    return JSON.parse(localStorage.getItem("emprestimos")) || [];
}

function salvarEmprestimos(lista) {
    localStorage.setItem("emprestimos", JSON.stringify(lista));
}

function reservarLivro(botao) {
    const user = kevin;
    if (!user) {
        alert("Faça login para reservar um livro.");
        window.location.href = "../login/login.html";
        return;
    }
    const card = botao.closest("article");   
    const imagem = card.querySelector("img");
    const titulo = card.querySelector("h2").textContent;
    const autor = card.querySelector(".livro-autor").textContent.replace("Autor: ", "");

    const usuario = user?.email;
    const emprestimos = lerEmprestimos();

    const jaReservado = emprestimos.some(e => e.titulo === titulo && e.usuario === usuario);
    if (jaReservado) {
        alert("Você já reservou este livro.");
        return;
    }

    emprestimos.push({
        id: Date.now(),
        titulo: titulo,
        autor: autor,
        img: imagem.getAttribute("src"),          
        usuario: usuario,
        data: new Date().toISOString()
    });
    salvarEmprestimos(emprestimos);

    window.location.href = "../emprestimo/emprestimo.html";
}

document.querySelectorAll(".reservar").forEach(function (botao) {
    botao.addEventListener("click", function () {
        reservarLivro(botao);
    });
});