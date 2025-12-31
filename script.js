document.addEventListener("DOMContentLoaded", function() {
    const data = new Date();
    const formatada = data.toLocaleDateString('pt-BR');
    const spanData = document.getElementById('data-hoje');
    if(spanData) spanData.innerText = formatada;
});
function mostrarAba(abaNome) {
    const abas = document.querySelectorAll('.aba-conteudo');
    abas.forEach(aba => aba.style.display = 'none');

    const abaSelecionada = document.getElementById('aba-' + abaNome);
    if (abaSelecionada) {
        abaSelecionada.style.display = 'block';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function enviarInscricaoWhatsApp() {
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

    if (!nome || !nascimento || !idade || !altura || !peso || !calcado || !blusa || !endereco || !bairro || !telefone || !email) {
        alert("⚠️ Atenção: Todos os campos são obrigatórios (exceto o Responsável). Por favor, preencha tudo.");
        return; 
    }

    if (oficina === "Sim" && !qualOficina) {
        alert("⚠️ Você informou que já fez oficina. Por favor, preencha qual foi.");
        return;
    }

    let texto = `*NOVA INSCRIÇÃO - CIRANDA VILA DE EGA*\n\n`;
    texto += `*Nome:* ${nome}\n`;
    
    if(responsavel) {
        texto += `*Responsável:* ${responsavel}\n`;
    }

    texto += `*Idade:* ${idade} anos (Nasc: ${nascimento})\n`;
    texto += `*Medidas:* Altura ${altura} | Peso ${peso} | Pé ${calcado} | Blusa ${blusa}\n`;
    texto += `*Contato:* ${telefone}\n`;
    texto += `*Email:* ${email}\n`;
    texto += `*Endereço:* ${endereco}, ${bairro}\n`;

    if (oficina === "Sim") {
        texto += `*Já fez oficina?* Sim (${qualOficina})\n\n`;
    } else {
        texto += `*Já fez oficina?* Não\n\n`;
    }

    texto += `_Declaro que aceito os termos de inscrição._`;

    const numeroWhatsApp = "5592984693418"; 
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById('hero-mouse');
    const fundo = document.querySelector('.fundo-movimento');

    if (heroSection && fundo) {
        heroSection.addEventListener('mousemove', function(e) {
            const rect = heroSection.getBoundingClientRect();
            
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const moveX = (centerX - x) / 20; 
            const moveY = (centerY - y) / 20;

            fundo.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        });

        heroSection.addEventListener('mouseleave', function() {
            fundo.style.transform = 'scale(1.1) translate(0px, 0px)';
        });
    }
});
