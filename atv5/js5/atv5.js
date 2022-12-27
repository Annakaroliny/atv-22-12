function calcular(){
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value;

  let imc = peso / (altura * altura);

if (imc < 18.5) {
  document.getElementById('result').innerHTML = 'O IMC é: ' + imc.toFixed(2);
  document.getElementById('msg').innerHTML = 'MAGREZA';  
  
  console.log('O IMC é: ' + imc.toFixed(2));
  console.log("MAGREZA");

} else if (imc >= 18.5 && imc < 24.9) {
  document.getElementById('result').innerHTML = 'O IMC é: ' + imc.toFixed(2);
  document.getElementById('msg').innerHTML = 'NORMAL';

  console.log('O IMC é: ' + imc.toFixed(2));
  console.log("NORMAL");

} else if (imc >= 25 && imc < 29.9) {
  document.getElementById('result').innerHTML = 'O IMC é: ' + imc.toFixed(2);
  document.getElementById('msg').innerHTML = 'SOBREPESO';

  console.log('O IMC é: ' + imc.toFixed(2));
  console.log("SOBREPESO");
  
} else if (imc >= 30 && imc < 39.9) {
  document.getElementById('result').innerHTML = 'O IMC é: ' + imc.toFixed(2);
  document.getElementById('msg').innerHTML = 'OBESIDADE';

  console.log('O IMC é: ' + imc.toFixed(2));
  console.log("OBESIDADE");
  
}else {
  document.getElementById('result').innerHTML = 'O IMC é: ' + imc.toFixed(2);
  document.getElementById('msg').innerHTML = 'OBESIDADE GRAVE';
  console.log('O IMC é: ' + imc.toFixed(2));
  console.log("OBESIDADE GRAVE");
}
}