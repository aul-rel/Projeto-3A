window.onload = function () {
    const usuario = JSON.parse(localStorage.getItem('dadosCadastro'));

    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");

    const togglePassword = document.getElementById("togglePassword");
    const btnEditar = document.getElementById("btnEditar");
    const btnSalvar = document.getElementById("btnSalvar");
    const btnCancelar = document.getElementById("btnCancelar");
    const form = document.getElementById("form-dados");

    const inputs = [nomeInput, emailInput, senhaInput];

    // Carregar dados do usuário
    if (usuario) {
        nomeInput.value = usuario.nome || '';
        emailInput.value = usuario.email || '';
        senhaInput.value = usuario.senha || '';
        document.querySelector(".card-title").textContent = `Olá ${usuario.nome}`;
    }

    // Mostrar/ocultar senha
    togglePassword.addEventListener("click", function (e) {
        e.preventDefault();
        const type = senhaInput.getAttribute("type") === "password" ? "text" : "password";
        senhaInput.setAttribute("type", type);
    });

    // Habilitar edição
    btnEditar.addEventListener("click", function () {
        inputs.forEach(input => input.removeAttribute("readonly"));
        btnEditar.style.display = 'none';
        btnSalvar.style.display = 'inline-block';
        btnCancelar.style.display = 'inline-block';
    });

    // Cancelar edição
    btnCancelar.addEventListener("click", function () {
        if (usuario) {
            nomeInput.value = usuario.nome || '';
            emailInput.value = usuario.email || '';
            senhaInput.value = usuario.senha || '';
        }
        inputs.forEach(input => input.setAttribute("readonly", true));
        btnEditar.style.display = 'inline-block';
        btnSalvar.style.display = 'none';
        btnCancelar.style.display = 'none';
    });

    // Salvar dados
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const novosDados = {
            nome: nomeInput.value,
            email: emailInput.value,
            senha: senhaInput.value
        };

        localStorage.setItem('dadosCadastro', JSON.stringify(novosDados));

        inputs.forEach(input => input.setAttribute("readonly", true));
        btnEditar.style.display = 'inline-block';
        btnSalvar.style.display = 'none';
        btnCancelar.style.display = 'none';

        document.querySelector(".card-title").textContent = `Olá ${novosDados.nome}`;

        alert("Dados atualizados com sucesso!");
    });

    // Impede que o usuário digite se não estiver em modo de edição
    inputs.forEach(input => {
        input.addEventListener("focus", function () {
            if (input.hasAttribute("readonly")) input.blur();
        });
    });
};
