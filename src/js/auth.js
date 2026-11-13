function getUsuarioLogado() {
    try {
        return JSON.parse(localStorage.getItem("userLogado"));
    } catch (e) {
        return null;
    }
}

function sair() {
    localStorage.removeItem("userLogado");
    window.location.href = "../login/login.html";
}

function exigirLogin() {
    if (!getUsuarioLogado()) {
        window.location.href = "../login/login.html";
    }
}

function atualizarTela() {
    const user = getUsuarioLogado();

    
    document.querySelectorAll(".so-deslogado").forEach(function (el) {
        el.style.display = user ? "none" : "";
    });

    
    document.querySelectorAll(".so-logado").forEach(function (el) {
        el.style.display = user ? "" : "none";
    });

   
    const menu = document.querySelector("header nav ul");
    if (user && menu) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = "Sair (" + user.nome + ")";
        link.addEventListener("click", function (e) {
            e.preventDefault();
            sair();
        });
        li.appendChild(link);
        menu.appendChild(li);
    }
}

atualizarTela();