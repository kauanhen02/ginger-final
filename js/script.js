var itens = [
  { nome: "Rosa Damascena (Óleo Essencial)", cas: "8007-01-0", tipo: "Floral" },
  { nome: "Lavanda (Óleo Essencial)", cas: "8000-28-0", tipo: "Amadeirada" },
  { nome: "Sândalo (Óleo Essencial)", cas: "8006-87-9", tipo: "Amadeirada" },
  { nome: "Vetiver (Óleo Essencial)", cas: "8016-96-4", tipo: "Amadeirada" },
  { nome: "Patchouli (Óleo Essencial)", cas: "8014-09-3", tipo: "Amadeirada" },
  { nome: "Baunilha (Extrato)", cas: "8024-06-4", tipo: "Doce" },
  { nome: "Musk (Sintético)", cas: "N/A", tipo: "Musk" },
  { nome: "Jasmim (Óleo Essencial ou Absoluto)", cas: "8022-96-6", tipo: "Floral" },
  { nome: "Bergamota (Óleo Essencial)", cas: "8007-75-8", tipo: "Cítrica" },
  { nome: "Laranja (Óleo Essencial)", cas: "8008-57-9", tipo: "Cítrica" },
  { nome: "Limão (Óleo Essencial)", cas: "8008-56-8", tipo: "Cítrica" },
  { nome: "Rosa Bulgária (Óleo Essencial ou Absoluto)", cas: "84604-12-6", tipo: "Floral" },
  { nome: "Cedro (Óleo Essencial)", cas: "8000-27-9", tipo: "Amadeirada" },
  { nome: "Incenso (Óleo Essencial)", cas: "8016-36-2", tipo: "Balsâmica" },
  { nome: "Gengibre (Óleo Essencial)", cas: "8007-08-7", tipo: "Picante" },
  { nome: "Ylang-Ylang (Óleo Essencial)", cas: "8006-81-3", tipo: "Floral" },
  { nome: "Pimenta Rosa (Óleo Essencial)", cas: "8006-77-7", tipo: "Picante" },
  { nome: "Gálbano (Óleo Essencial)", cas: "93165-40-3", tipo: "Resinosa" },
  { nome: "Sálvia (Óleo Essencial)", cas: "84082-66-6", tipo: "Herbal" },
  { nome: "Eucalipto (Óleo Essencial)", cas: "8000-48-4", tipo: "Fresca" }
  // Adicione mais itens aqui conforme necessário
];

// Função para adicionar itens à lista
function adicionarItensNaLista() {
  var lista = document.getElementById("minha-lista");

  // Limpa a lista antes de adicionar novos itens
  lista.innerHTML = "";

  // Adiciona os itens da lista ao elemento UL
  for (var i = 0; i < itens.length; i++) {
      var novoItem = document.createElement("tr");
      novoItem.innerHTML = `
          <td>Produto: ${itens[i].nome}<br>CAS#: ${itens[i].cas}</td>
          <td>Tipo da MP: ${itens[i].tipo}</td>
      `;
      lista.appendChild(novoItem);
  }
}

// Chama a função para adicionar os itens na lista
adicionarItensNaLista();

// Função para pesquisar um item na lista
function pesquisarItem() {
  var termoPesquisa = document.getElementById("pesquisaItem").value.toLowerCase();
  var listaRolavel = document.getElementById("lista-rolavel");
  var resultado = document.getElementById("resultadoPesquisa");

  // Limpa o resultado da pesquisa anterior
  resultado.innerHTML = "";

  // Divide o termo de pesquisa em palavras-chave
  var palavrasChave = termoPesquisa.split(" ");

  // Oculta a lista rolável
  listaRolavel.style.display = "none";

  // Verifica se o campo de pesquisa está vazio
  if (termoPesquisa === "") {
      listaRolavel.style.display = "block";
      return; // Se o campo de pesquisa estiver vazio, saia da função sem fazer a pesquisa
  }

  // Percorre os itens da lista em busca das palavras-chave
  for (var i = 0; i < itens.length; i++) {
      var itemTexto = `${itens[i].nome.toLowerCase()} ${itens[i].cas.toLowerCase()} ${itens[i].tipo.toLowerCase()}`;
      var todasPalavrasChavePresentes = true;

      // Verifica se todas as palavras-chave estão presentes no texto do item
      for (var j = 0; j < palavrasChave.length; j++) {
          if (!itemTexto.includes(palavrasChave[j])) {
              todasPalavrasChavePresentes = false;
              break; // Se uma palavra-chave não estiver presente, saia do loop
          }
      }

      // Se todas as palavras-chave estiverem presentes, crie um elemento de resultado
      if (todasPalavrasChavePresentes) {
          var resultadoItem = document.createElement("table");
          resultadoItem.innerHTML = `
          <tbody>
              <tr>
                  <td>Produto: ${itens[i].nome}<br>CAS#: ${itens[i].cas}</td>
                  <td>Tipo da MP: ${itens[i].tipo}</td>
              </tr>
          </tbody>
          `;
          resultado.appendChild(resultadoItem);
      }
  }

  // Se nenhum resultado for encontrado, exibe uma mensagem
  if (resultado.children.length === 0) {
      resultado.innerHTML = "<p>Nenhum resultado encontrado!</p>";
  }
}

// Função para verificar o campo de pesquisa e mostrar a lista se estiver vazio
function verificarCampoPesquisa(event) {
  if (event.key === "Enter") {
      pesquisarItem();
  }

  var termoPesquisa = document.getElementById("pesquisaItem").value.toLowerCase();
  var listaRolavel = document.getElementById("lista-rolavel");
  var resultado = document.getElementById("resultadoPesquisa");

  // Verifica se o campo de pesquisa está vazio
  if (termoPesquisa === "") {
      // Se estiver vazio, exibe todos os itens novamente
      adicionarItensNaLista();
      listaRolavel.style.display = "block";
      resultado.innerHTML = "";
  }
}