document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const fotoInput = document.getElementById('foto');
    const arquivo = fotoInput.files[0];

    if (arquivo) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const fotoBase64 = event.target.result;

            const dadosCadastro = {
                nome: nome,
                email: email,
                senha: senha,
                foto: fotoBase64 // salva a imagem como base64
            };

            localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));

            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html';
        };

        reader.readAsDataURL(arquivo); // converte para base64
    } else {
        alert('Por favor, selecione uma foto.');
    }
});
