// Preenche a data de hoje automaticamente no termo
document.addEventListener("DOMContentLoaded", function() {
    const data = new Date();
    const formatada = data.toLocaleDateString('pt-BR');
    const spanData = document.getElementById('data-hoje');
    if(spanData) spanData.innerText = formatada;
});

// Função para alternar as abas
function mostrarAba(abaNome) {
    // Esconde todas as abas
    const abas = document.querySelectorAll('.aba-conteudo');
    abas.forEach(aba => aba.style.display = 'none');

    // Mostra a aba clicada
    const abaSelecionada = document.getElementById('aba-' + abaNome);
    if (abaSelecionada) {
        abaSelecionada.style.display = 'block';
    }
    
    // Rola para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para enviar inscrição completa pro WhatsApp
function enviarInscricaoWhatsApp() {
    const celularDestino = "5597981087178"; // Seu número
    
    // Coleta dos dados
    const nome = document.getElementById('nome').value;
    const responsavel = document.getElementById('responsavel').value;
    const nascimento = document.getElementById('nascimento').value;
    const idade = document.getElementById('idade').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const calcado = document.getElementById('calcado').value;
    const blusa = document.getElementById('blusa').value;
    const endereco = document.getElementById('endereco').value;
    const bairro = document.getElementById('bairro').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const oficina = document.getElementById('oficina').value;
    const qualOficina = document.getElementById('qual_oficina').value;

    // Validação básica
    if (!nome || !telefone) {
        alert("Por favor, preencha pelo menos o Nome e o Telefone.");
        return;
    }

    // Montagem da mensagem formatada
    let texto = `*NOVA INSCRIÇÃO - CIRANDA VILA DE EGA*\n\n`;
    texto += `*Nome:* ${nome}\n`;
    if(responsavel) texto += `*Responsável:* ${responsavel}\n`;
    texto += `*Idade:* ${idade} anos (Nasc: ${nascimento})\n`;
    texto += `*Medidas:* Altura ${altura} | Peso ${peso} | Pé ${calcado} | Blusa ${blusa}\n`;
    texto += `*Contato:* ${telefone}\n`;
    texto += `*Email:* ${email}\n`;
    texto += `*Endereço:* ${endereco}, ${bairro}\n`;
    texto += `*Já fez oficina?* ${oficina} (${qualOficina})\n\n`;
    texto += `_Declaro que aceito os termos de inscrição._`;

    // Envia
    const linkZap = `https://api.whatsapp.com/send?phone=${celularDestino}&text=${encodeURIComponent(texto)}`;
    window.open(linkZap, '_blank');
}