const formRegister = document.getElementById("registerForm");
const msg = document.getElementById("msg-cadastro");

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    try {

        const dados = localStorage.getItem("usuarios");
        const lista = dados ? JSON.parse(dados) : [];

        const nome = document.getElementById("cad-nome").value.trim();
        const email = document.getElementById("cad-email").value.trim().toLowerCase();
        const senha = document.getElementById("cad-senha").value;

        if(nome === ""){
            throw "Nome inválido";
        }
        const posArr = email.indexOf("@") // posicao do @
        const posPonto = email.lastIndexOf("."); 

        if(posArr < 1 || posPonto < posArr + 2 || posPonto + 2 >= email.length){
            throw "Email inválido";
        } else if (lista.find(u => u.email === email)){ // é o nome que damos a cada ficha enquanto ele percorre. Na primeira volta u é a primeira ficha, na segunda é a segunda, e assim por diante.
            throw "Este e-mail já está cadastrado!";
        }

        if(senha.length < 6){
            throw "A senha deve ter pelo menos 6 caracteres";
        }

        const Usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        lista.push(Usuario);

        localStorage.setItem("usuarios", JSON.stringify(lista));

        msg.style.color = "#6fd4a0";
        msg.innerHTML = "Cadastro realizado com sucesso!";
        formRegister.reset();

        setTimeout(() => {
            window.location.href = "../login/login.html";
        }, 2000);

        
    } catch (err) {
        msg.style.color = "#ff9a9c";
        msg.innerHTML = "Erro: " + err;
        console.log(err);
    }
    
})