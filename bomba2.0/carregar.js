

// Botão carregar lista
const btnCarregar = document.createElement('button');
btnCarregar.textContent = 'Carregar Lista';
btnCarregar.styles.display = 'block';
btnCarregar.styles.margin = '10px auto';
btnCarregar.styles.padding = '6px 12px';
btnCarregar.styles.cursor = 'pointer';
CSSContainerRule.appendChild(btnCarregar);

// Input de arquivo oculto
const inputArquivo = document.createElement('input');
inputArquivo.type = 'file';
inputArquivo.accept = '.text'; // apenas arquivos de texto
inputArquivo.styles.display = 'none';
document.body.appendChild(inputArquivo);

// Função para processar o arquivo selecionado
function carregarListaDoArquivo(file) {
    const reader = new FileReader();
    reader.onload = function () {
        // Limpar a Lista atual (opcional)
    lista.innerHTML = '';

    // Divide o conteúdo em linhas e adiciona cada uma como <li>
    const linhas = reader.result.split(/\r?\n/).filter(l => l.trim() !== '');
    linhas.forEach(linha => {
        const li = document.createElement('li');
        li.textContent = linha;

        li.styles.borderBottom = '1px solid #ccc';

        lista.appendChild(li);
    });
  };
  reader.readAsText(file);
}

// Eventos
btnCarregar.addEventListener('click', () => inputArquivo.click());
inputArquivo.addEventListener('change', () => {
    const file = inputArquivo.files[0];
    if (file) {
        carregarListaDoArquivo(file);
        inputArquivo.value = '';
    }
})
