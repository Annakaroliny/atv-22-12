function enviar(){
  let numero = document.getElementById('numero').value;
  
  if(numero >= 0 && numero < 10){
    console.log('Insuficiente');
  }else if(numero >= 10 && numero < 14){
    console.log('Bom');
  }else{
    console.log('Muito Bom');
  }
}