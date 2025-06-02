function acessarAreaCliente() {
    const logado = localStorage.getItem('usuarioLogado');

    if (logado === 'true') {
        window.location.href = "../pages/areacliente.html";
    } else {
        alert('Por favor, faça login para acessar a área do cliente.');
        window.location.href = "login.html";
    }
}