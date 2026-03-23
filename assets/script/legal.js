 document.addEventListener('DOMContentLoaded', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const origem = urlParams.get('origem');
            const btnVoltar = document.getElementById('btn-voltar');

            const rotas = {
                'clinicas': { link: '../clinicas/', nome: 'Projeto Elite 20' },
                'micro': { link: '../micro-empresas/', nome: 'Impulso Inicial' },
                'empresas': { link: '../empresas/', nome: 'Acelerador B2B' },
                'parcerias': { link: '../parcerias/', nome: 'Hub de Parcerias' },
                'bio': { link: '../bio/', nome: 'Links Rápidos' }
            };

            if (origem && rotas[origem]) {
                btnVoltar.href = rotas[origem].link;
                btnVoltar.innerText = `← Voltar para ${rotas[origem].nome}`;
            } else {
                btnVoltar.href = '../';
                btnVoltar.innerText = '← Retornar ao Hub Principal';
            }
        });