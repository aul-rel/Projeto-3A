const perfilDiv = document.getElementById('perfilUsuario');

if (perfilDiv) {
    const logado = localStorage.getItem('logado');
    const dadosCadastro = JSON.parse(localStorage.getItem('dadosCadastro'));

    if (logado === 'true' && dadosCadastro) {
        const foto = dadosCadastro.foto || 'img/usuario.png';
        perfilDiv.innerHTML = `
            <img src="${foto}" alt="Foto de ${dadosCadastro.nome}" style="width:40px; height:40px; border-radius:50%; vertical-align: middle;">
            <span>Olá, ${dadosCadastro.nome}!</span>
            <button onclick="logout()" style="margin-left: 10px;">Sair</button>
        `;
    }

    function logout() {
        localStorage.removeItem('logado');
        window.location.href = 'login.html';
    }
}
