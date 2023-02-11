const obterUsuarios = async (qtd = 4) => {
  const url = `https://randomuser.me/api/?results=${qtd}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener('load', async () => {
  // Obtem lista da api
  const data = await obterUsuarios(10);

  // Obtem ul do html para renderizar os itens
  const lista = document.getElementById('lista');

  // Percorre os dados retornados da api
  data.results.forEach((usuario) => {
    // Cria os elementos para exibir no html
    const item = document.createElement('li');
    const nome = document.createElement('h5');
    const email = document.createElement('p');
    const endereco = document.createElement('p');
    const imagem = document.createElement('img');

    // Desestrutura o objeto criando variáveis
    const { street, city, state, country } = usuario.location;
    const { title, first, last } = usuario.name;

    // Adiciona informações nos itens criados
    nome.innerText = `${title} ${first} ${last}`;
    email.innerText = usuario.email;
    endereco.innerText = `${street.name} ${street.number} ${city} ${state} ${country}`;
    imagem.src = usuario.picture.large;
    imagem.alt = 'Imagem do usuário';

    // Adiciona os itens dentro do li
    item.appendChild(nome);
    item.appendChild(email);
    item.appendChild(endereco);
    item.appendChild(imagem);

    // Adiciona li dentro da ul
    lista.appendChild(item);
  });
});
