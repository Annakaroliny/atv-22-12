function enviar() {
  // Lê os valores dos campos do formulário
  let marca = document.getElementById('marca').value;
  let modelo = document.getElementById('modelo').value;
  let ano = document.getElementById('ano').value;
  let cor = document.getElementById('cor').value;
  let preco = document.getElementById('preco').value;
  let status = document.getElementById('status').value;

  const carro = {
    marca: marca,
    modelo: modelo,
    ano: ano,
    cor: cor,
    preco: preco,
    status: status
  };

  console.log(carro);
}
