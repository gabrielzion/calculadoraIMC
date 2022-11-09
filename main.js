// Pegar o formulário e a div onde sai o resultado calculado
const form = document.querySelector('#formulario');
const resultado = document.querySelector('.resultado');

// Função para formulário
function resultadoFormulario(event) {

  event.preventDefault();
  
  // Pegar os valores dos inputs
  const inputPeso = document.querySelector('#peso').value;
  const inputAltura = document.querySelector('#altura').value;

  // Com os valores dos inputs obtidos, calcular para obter o resultado do IMC
  const imcTotal = (inputPeso / (inputAltura * inputAltura)).toFixed(2);
  
  // Caso IMC seja menor que 18,49:
   if (imcTotal >= 0.00 && imcTotal <= 18.49){
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Isso significa que você é muito magro.</p>`
  }
  // Se o IMC do usuário estiver entre 18,5 e 24,9:
   else if (imcTotal >= 18.50 && imcTotal <= 24.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Seu IMC é considerado "Normal".</p>`
  }
  // Se o IMC do usuário estiver entre 25,00 e 29,9:
   else if (imcTotal >= 25.00 && imcTotal <= 29.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Isso significa que sua classificação é "Sobrepeso".</p>`
  }
  // Se o IMC do usuário estiver entre 30,00 e 39,9:
   else if (imcTotal >= 30.00 && imcTotal <= 39.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Você é considerado "Obeso".</p>`
  } 
  // Se o IMC do usuário for maior que 40,00:
   else if (imcTotal >= 40.00) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Sua classificação é "Obesidade grave". </p>`
  }
  // Caso o IMC do usuário não seja nenhum apresentado anteriormente (normalmente costuma ser zero), execute essa linha:
   else {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> 0 </strong> - Algo está errado... </p>`
  }
} 

// Quando pressionar o botão, execute a função "resultadoFormulario"
form.addEventListener('submit', resultadoFormulario)
