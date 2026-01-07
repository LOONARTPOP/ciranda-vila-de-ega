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
        alert("⚠️ Atenção: Todos os campos são obrigatórios (exceto o Responsável).");
        return; 
    }
    if (oficina === "Sim" && !qualOficina) {
        alert("⚠️ Preencha qual oficina você participou.");
        return;
    }

    const botao = document.querySelector('.btn-whatsapp-grande');
    const textoOriginal = botao.innerText;
    botao.innerText = "Salvando...";
    botao.disabled = true;

    const dadosParaPlanilha = {
        Nome: nome,
        Responsavel: responsavel,
        Nascimento: nascimento,
        Idade: idade,
        Altura: altura,
        Peso: peso,
        Calcado: calcado,
        Blusa: blusa,
        Endereco: endereco,
        Bairro: bairro,
        Telefone: telefone,
        Email: email,
        Oficina: oficina,
        QualOficina: qualOficina,
        DataInscricao: new Date().toLocaleDateString('pt-BR')
    };

    fetch('salvar_inscricao.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosParaPlanilha),
    })
    .then(response => response.text())
    .then(textoResposta => {
        console.log("Resposta do Servidor:", textoResposta);

        if (textoResposta.includes("erro") || textoResposta.includes("<!DOCTYPE html>")) {
            alert("⚠️ Erro ao salvar na planilha: " + textoResposta + "\n\nO WhatsApp será aberto mesmo assim.");
        }

        const dataHoje = new Date().toLocaleDateString('pt-BR');

        let textoZap = `*📝 NOVA INSCRIÇÃO: CIRANDA VILA DE EGA*\n`;
        textoZap += `*━━━━━━━━━━━━━━━━━━━━━━━━*\n\n`;
        
        textoZap += `*👤 DADOS DO BRINCANTE*\n`;
        textoZap += `• *Nome:* ${nome}\n`;
        if(responsavel) textoZap += `• *Responsável:* ${responsavel}\n`;
        textoZap += `• *Nascimento:* ${nascimento}\n`;
        textoZap += `• *Idade:* ${idade} anos\n\n`;

        textoZap += `*📏 MEDIDAS E CONTATO*\n`;
        textoZap += `• *Peso/Alt:* ${peso} kg / ${altura}m\n`;
        textoZap += `• *Calçado:* nº ${calcado}\n`;
        textoZap += `• *Blusa:* Tam. ${blusa}\n`;
        textoZap += `• *Bairro:* ${bairro}\n`;
        textoZap += `• *WhatsApp:* ${telefone}\n\n`;

        textoZap += `*🎨 HISTÓRICO*\n`;
        textoZap += `• *Oficina:* ${oficina} ${qualOficina ? '('+qualOficina+')' : ''}\n\n`;
        
        textoZap += `*📄 TERMO DE ACEITE*\n`;
        textoZap += `_"Eu, identificado acima, solicito inscrição na Ciranda Vila de Ega e declaro estar ciente e de acordo com as normas e ensaios do grupo."_\n\n`;
        
        textoZap += `✅ *ACEITO EM:* ${dataHoje}\n`;
        textoZap += `*━━━━━━━━━━━━━━━━━━━━━━━━*`;

        const numeroWhatsApp = "5592984693418"; 
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoZap)}`;
        
        window.open(url, '_blank');

        alert("Inscrição salva! Agora envie a mensagem no WhatsApp para finalizar.");
        document.getElementById('form-inscricao').reset();
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert("Erro técnico de conexão. O WhatsApp será aberto manualmente.");
        
        const numeroWhatsApp = "55929xxxx3418"; 
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent("Erro no site, mas segue minha inscrição: " + nome)}`;
        window.open(url, '_blank');
    })
    .finally(() => {
        botao.innerText = textoOriginal;
        botao.disabled = false;
    });
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

