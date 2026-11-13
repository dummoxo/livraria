const userArea = document.getElementById("area-usuario");
const mostrarCard = document.getElementById("mostrar-cad-log");
const dados = localStorage.getItem("userLogado");

function exigirLogin() {
    if (!dados) {
        window.location.href = "../login/login.html";
    }
}

const verificarLogin = () => {
    if (dados) {
        const usuarios = JSON.parse(dados);

        userArea.innerHTML = `<li>Bem vindo(a), ${usuarios.nome} <a id="b-sair">Sair</a></li>`;

        const bSair = document.getElementById("b-sair");

        bSair.addEventListener("click", () => {
            localStorage.removeItem("userLogado");
            window.location.reload();
        });

        if (mostrarCard) mostrarCard.innerHTML = "";
    } else {

        userArea.innerHTML = `<a href="../login/login.html">Login</a>`;
        if (mostrarCard) mostrarCard.innerHTML = `<a href="../registrar/registrar.html" class="botao">Registrar</a> <a href="../login/login.html" class="botao">Login</a>`
    }
    
}

verificarLogin();
