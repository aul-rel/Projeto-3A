let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

const carrinhoDiv = document.getElementById('carrinho');
const finalizarBtn = document.getElementById('finalizarBtn');
const limparBtn = document.getElementById('limparBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalAlert = document.getElementById('modalAlert');

function mostrarMensagem(texto) {
modalAlert.textContent = texto;
modalOverlay.classList.add('show');

// Fecha automaticamente depois de 2.5 segundos
setTimeout(() => {
modalOverlay.classList.remove('show');
}, 2500);
}


function atualizarInterface() {
    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = "<p style='font-size:1.3rem; font-weight:bold;'>Seu carrinho está vazio 😞</p>";
        finalizarBtn.disabled = true;
        limparBtn.disabled = true;
    } else {
        finalizarBtn.disabled = false;
        limparBtn.disabled = false;

        let tabela = `
            <table>
                <tr>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço Unitário</th>
                    <th>Subtotal</th>
                    <th>Ação</th>
                </tr>
        `;

        let total = 0;

        carrinho.forEach((item, index) => {
            const subtotal = item.preco * item.quantidade;
            total += subtotal;
            tabela += `
                <tr>
                    <td>${item.nome}</td>
                    <td>
                        <input type="number" min="1" value="${item.quantidade}" id="quantidade-${index}" />
                        <button class="btn" onclick="atualizarQuantidade(${index})">Atualizar</button>
                    </td>
                    <td>R$ ${item.preco.toFixed(2)}</td>
                    <td>R$ ${subtotal.toFixed(2)}</td>
                    <td><button class="btn" onclick="confirmarRemoverItem(${index})">Remover</button></td>
                </tr>
            `;
        });

        tabela += `
            <tr>
                <td colspan="3"><strong>Total</strong></td>
                <td><strong>R$ ${total.toFixed(2)}</strong></td>
                <td></td>
            </tr>
            </table>
        `;

        carrinhoDiv.innerHTML = tabela;
    }
}

function atualizarQuantidade(index) {
    const inputQuantidade = document.getElementById(`quantidade-${index}`);
    let novaQuantidade = parseInt(inputQuantidade.value);

    if (isNaN(novaQuantidade) || novaQuantidade < 1) {
        mostrarMensagem("Quantidade inválida! Insira um número maior que 0.");
        inputQuantidade.value = carrinho[index].quantidade; // reseta para valor antigo
        return;
    }

    carrinho[index].quantidade = novaQuantidade;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarMensagem("Quantidade atualizada!");
    atualizarInterface();
}

function confirmarRemoverItem(index) {
    if (confirm(`Tem certeza que deseja remover "${carrinho[index].nome}" do carrinho?`)) {
        removerItem(index);
    }
}

function removerItem(index) {
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarMensagem("Item removido!");
    atualizarInterface();
}

function confirmarLimparCarrinho() {
    if (confirm("Tem certeza que deseja esvaziar todo o carrinho?")) {
        limparCarrinho();
    }
}

function limparCarrinho() {
    carrinho = [];
    localStorage.removeItem('carrinho');
    mostrarMensagem("Carrinho esvaziado.");
    atualizarInterface();
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        mostrarMensagem("Seu carrinho está vazio!");
        return;
    }
    alert("Pedido realizado com sucesso! 🚀🍔");
    localStorage.removeItem('carrinho');
    window.location.href = "home.html";
}
function mostrarMensagem(texto) {
    const overlay = document.getElementById('modalOverlay');
    const alertBox = document.getElementById('modalAlert');
    alertBox.textContent = texto;
    overlay.classList.add('show');

    setTimeout(() => {
        overlay.classList.remove('show');
    }, 2500);
}

document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') {
        e.target.classList.remove('show');
    }
});

// Inicializa a interface na carga da página
atualizarInterface();
modalOverlay.addEventListener('click', (event) => {
if (event.target === modalOverlay) {  // só fecha se clicou no fundo, não dentro da caixa
modalOverlay.classList.remove('show');
}
});