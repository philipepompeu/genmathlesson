const dias = [    
    'SEGUNDA-FEIRA(PORTUGUÊS)',
    'TERÇA-FEIRA(MATEMÁTICA)',
    'QUARTA-FEIRA(HISTORIA)',
    'QUINTA-FEIRA(Geografia)',
    'SEXTA-FEIRA(Livre)'
    ];


const geradorDeMultiplicacao = function geraMultiplicacao()
{
  let multiplicador = randomInt(11, 200);
  let numero = randomInt(1000, 9999);

  return numero.toString() + ' X ' + multiplicador.toString();
}
    
const geradorDeDivisao = function geraDivisao()
{
  let multiplicador = randomInt(1, 200);
  let numero = randomInt(11, 39);
  let dividendo = multiplicador * numero;  
  return dividendo.toString() + ' / ' + numero.toString();

}

const geraConversaoCMparaMM = function geraConversaoCMparaMM(){
  return randomInt(5,79).toString()+"cm = ?MM";
}

const geraConversaoMMparaCM = function geraConversaoMMparaCM(){
  return randomInt(15,800).toString()+"MM = ?cm";
}

const geradorDeContaMonetaria = function geraContaMonetaria()
{
  
  let numeroUm    = randomInt(1,199);
  let numeroDois  = randomInt(1,199);
  let centavoUm   = (randomInt(1,19) * 5).toString();
  let centavoDois = (randomInt(1,19) * 5).toString();

  if (centavoUm.length < 2) {
    centavoUm = "0"+centavoUm;
  }
  if (centavoDois.length < 2) {
    centavoDois = "0"+centavoDois;
  }

  let operacoes = ['-', '+'];
  let operacao = operacoes[randomInt(0,2)];

  let resultado = "R$"+ numeroUm.toString() + ","+ centavoUm;
  resultado+= " "+ operacao + " "
  resultado+= "R$"+ numeroDois.toString() + ","+ centavoDois + " = ?";

  return resultado;

}

for (let i = 1; i <= 5; i++) {  
   console.log("*****"+dias[i-1]+"*****");
   console.log("-----CONTAS------"); 

   execFor(5, null,geradorDeMultiplicacao);
   execFor(5, null,geradorDeDivisao);
   execFor(5, null,geradorDeContaMonetaria);

  if(i == 5)
  {
    execFor(3, "Multiplicar o numero de CM por 10 para descobrir os MM.", geraConversaoCMparaMM);
    execFor(3, "Dividir o numero de MM por 10 para descobrir os CM.", geraConversaoMMparaCM);        
  }
   
}

function execFor(vezes, explicacao, callback){

  for (let x = 1; x <= vezes; x++) {

    if(explicacao && x == 1){
      console.log(explicacao);
    }    
    console.log(callback());  
  }
}

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}


