document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const dadosCadastro = {
        nome: nome,
        email: email,
        senha: senha
    };

    localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
});