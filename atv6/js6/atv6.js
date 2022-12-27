const telefonou = prompt("Telefonou para a vítima?");
const local = prompt("Esteve no local do crime?");
const moraPerto = prompt("Mora perto da vítima?");
const devia = prompt("Devia para a vítima?");
const trabalhouCom = prompt("Já trabalhou com a vítima?");

let respostasPositivas = 0;

if (telefonou === "sim") {
  respostasPositivas++;
}

if (local === "sim"){
  respostasPositivas++;
}
if (moraPerto === "sim") {
  respostasPositivas++;
}
if (devia === "sim") {
  respostasPositivas++;
}
if (trabalhouCom === "sim") {
  respostasPositivas++;
}

if (respostasPositivas === 2) {
  console.log(`Suspeita`);
  document.write(`Suspeita`);

}
else if (respostasPositivas >= 3 && respostasPositivas <= 4) {
  console.log(`Cúmplice`);
  document.write(`Cúmplice`);
}
else if (respostasPositivas === 5) {
  console.log(`Assassino`);
  document.write(`Assassino`);

}
else {
  console.log(`Inocente`);
  document.write(`Inocente`);
}
