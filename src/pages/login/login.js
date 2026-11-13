const formLogin = document.getElementById("loginForm");
const msg = document.getElementById("msg-login");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
        const dados = localStorage.getItem("usuarios");
        const usuarios = dados ? JSON.parse(dados) : [];

        const email = document.getElementById("login-email").value.trim().toLowerCase();
        const senha = document.getElementById("login-senha").value;
        const user = usuarios.find(u => u.email === email && u.senha === senha);
        
        if (user) {
            msg.style.color = "#6fd4a0";
            msg.innerHTML = `Seja bem vindo(a), ${user.nome}`;

            localStorage.setItem("userLogado", JSON.stringify(user))

            setTimeout(() => {
                window.location.href = "../index/index.html"
            }, 2000);
        } else {
            throw "Email ou senha inválido"
        }
    } catch(err){
        msg.style.color = "#ff9a9c";
        msg.innerHTML = "Erro: " + err;
    }
})