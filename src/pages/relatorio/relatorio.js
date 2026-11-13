const dados = localStorage.getItem('emprestimos');
const emprestimos = JSON.parse(dados) || [];

console.log(emprestimos);

const total = document.getElementById('total-emprestimos');
total.textContent = "Total de empréstimos: " + emprestimos.length;