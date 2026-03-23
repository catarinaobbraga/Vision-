const botoesAbas = document.querySelectorAll('.aba-btn');
const conteudoAbas = document.querySelectorAll('.aba-conteudo');

botoesAbas.forEach((botao) => {
    botao.addEventListener('click', () => {
        const aba = botao.dataset.aba;

        botoesAbas.forEach((b) => b.classList.remove('ativo'));
        conteudoAbas.forEach((c) => c.classList.remove('ativo'));

        botao.classList.add('ativo');
        document.getElementById('aba-$(aba)').classList.add('ativo');
    });
    });
    const fotoPerfil = document.getElementById("fotoPerfil");
    const fotoPreview = document.getElementById("foto-preview");