const perfilDiv = document.getElementById('perfilUsuario');

// Só roda se estiver na página que tem o elemento 'perfilUsuario'
if (perfilDiv) {
    const logado = localStorage.getItem('logado');
    const dadosCadastro = JSON.parse(localStorage.getItem('dadosCadastro'));

    if (logado === 'true' && dadosCadastro) {
        const foto = dadosCadastro.foto || 'img/usuario.png'; // foto padrão
        perfilDiv.innerHTML = `
            <img id="fotoPerfil" src="${foto}" alt="Foto de ${dadosCadastro.nome}" style="width: 80px; height: 80px; border-radius: 50%;">
            <span>Olá, ${dadosCadastro.nome}!</span>
            <br><br>
            <input type="file" id="inputFoto" accept="image/*" style="display: none;">
            <button class="btn-foto" onclick="document.getElementById('inputFoto').click()">Alterar Foto</button>
            <br><br>
            <button class="btn-sair" onclick="logout()">Sair</button>
        `;

        const inputFoto = document.getElementById('inputFoto');
        const fotoPerfil = document.getElementById('fotoPerfil');

        inputFoto.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const fotoBase64 = e.target.result;
                    fotoPerfil.src = fotoBase64;
                    dadosCadastro.foto = fotoBase64;
                    localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
                    alert('Foto atualizada com sucesso!');
                };
                reader.readAsDataURL(file);
            }
        });
    }

    function logout() {
        localStorage.removeItem('logado');
        window.location.href = 'login.html';
    }
}
