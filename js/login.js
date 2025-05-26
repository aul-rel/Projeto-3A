document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const dadosCadastro = JSON.parse(localStorage.getItem('dadosCadastro'));

    if (dadosCadastro) {
        if (email === dadosCadastro.email && senha === dadosCadastro.senha) {
            alert('Login realizado com sucesso!');
            localStorage.setItem('logado', 'true'); // Marcar que está logado
            window.location.href = 'areacliente.html';
        } else {
            alert('Email ou senha incorretos. Tente novamente.');
        }
    } else {
        alert('Nenhum cadastro encontrado. Por favor, cadastre-se primeiro.');
        window.location.href = 'cadastro.html';
    }
});
