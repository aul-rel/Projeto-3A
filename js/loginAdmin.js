document.getElementById('formLoginAdmin').addEventListener('submit', function(e) {
    e.preventDefault();
	
	const adminEmail = "aurellio@admin.com.br"
	const adminSenha = "senha"
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
	
    if (email == adminEmail && senha == adminSenha){
		window.location.href = "../pages/areaadmin.html"
	} else {
    	alert('Email ou senha incorretos. Tente novamente.');
	}
    
});