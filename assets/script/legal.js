// ==========================================
// MÓDULO DE NAVEGAÇÃO: BOTÃO VOLTAR (HÍBRIDO)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const origem = urlParams.get('origem');
    const btnVoltar = document.getElementById('btn-voltar');

    // Suas rotas originais mantidas
    const rotas = {
        'clinicas': { link: '../promo-clinicas/elite.html', nome: 'Projeto Elite 20' },
        'micro': { link: '../promo-micro/impulso.html', nome: 'Impulso Inicial' },
        'empresas': { link: '../empresas/empresas.html', nome: 'Acelerador B2B' },
        'parcerias': { link: '../parcerias/parcerias.html', nome: 'Hub de Parcerias' },
        'bio': { link: '../bio/bio.html', nome: 'Links Rápidos' }
    };

    if (btnVoltar) {
        if (origem && rotas[origem]) {
            // CENÁRIO 1: O link tem a origem (Ex: privacidade.html?origem=micro)
            // Ele usa a sua rota e formata o botão com a estética Terminal
            btnVoltar.href = rotas[origem].link;
            btnVoltar.innerHTML = `<span class="prompt-arrow"><</span> cd ../${origem}`;
        } else {
            // CENÁRIO 2: O link é puro (privacidade.html)
            // Usa a inteligência do navegador para voltar exatamente de onde o usuário clicou
            btnVoltar.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Verifica se existe um histórico para voltar (evita travar se abriu em aba nova)
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.location.href = '../'; // Fallback de segurança para o Hub
                }
            });
        }
    }
});