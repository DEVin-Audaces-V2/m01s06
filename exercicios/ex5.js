async function obterClienteNoBancoDeDados(idCliente) {
  return new Promise((resolve, reject) => {
    const cliente = { nome: 'bruce wayne', id: idCliente };
    resolve(cliente);
  });
}

async function processar() {
  try {
    const cliente = await obterClienteNoBancoDeDados(7);
    console.log(cliente);
  } catch (error) {
    console.error(error);
  }
}

processar();
