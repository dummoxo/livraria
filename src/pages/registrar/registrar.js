const formLogin = document.getElementById('loginForm');
const formRegister = document.getElementById('registerForm');

function lerUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

function salvarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function mostrarMensagem(idElemento, mensagem) {
    document.getElementById(idElemento).textContent = mensagem;
}

formRegister.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("cad-nome").value.trim();
    const email = document.getElementById("cad-email").value.trim().toLowerCase();
    const senha = document.getElementById("cad-senha").value;

    const usuarios = lerUsuarios();

    const usuarioExistente = usuarios.some(u => u.email === email);

    if (usuarioExistente) {
        mostrarMensagem("msg-cadastro", "Email já cadastrado!");
        return;
    }

    usuarios.push({ nome, email, senha });
    salvarUsuarios(usuarios);

    mostrarMensagem("msg-cadastro", "Cadastro realizado com sucesso!");
    formRegister.reset();
});



