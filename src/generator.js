
const dias = [    
    'SEGUNDA-FEIRA(PORTUGUÊS)',
    'TERÇA-FEIRA(MATEMÁTICA)',
    'QUARTA-FEIRA(HISTORIA)',
    'QUINTA-FEIRA(Geografia)',
    'SEXTA-FEIRA(Livre)'
    ];

for (let i = 1; i <= 5; i++) {  
   console.log("*****"+dias[i-1]+"*****");
   console.log("-----CONTAS------"); 

  for (let x = 1; x <= 5; x++) { 
    console.log(geraMultiplicacao());
  }
  for (let x = 1; x <= 5; x++) { 
    console.log(geraDivisao());  
  }

  if(i == 5){
    for (let x = 1; x <= 5; x++) { 
      console.log(geraConversaoCMparaMM());  
    }
    for (let x = 1; x <= 5; x++) { 
      console.log(geraConversaoMMparaCM());  
    }
  }
   
} 


function geraMultiplicacao()
{
  let multiplicador = randomInt(1, 200);
  let numero = randomInt(1000, 9999);

  return numero.toString() + ' X ' + multiplicador.toString();
}

function geraDivisao(){
  let multiplicador = randomInt(1, 200);
  let numero = randomInt(11, 39);
  let dividendo = multiplicador * numero;  
  return dividendo.toString() + ' / ' + numero.toString();

}

function geraConversaoCMparaMM(){
  return randomInt(5,79).toString()+"cm = ?MM";
}

function geraConversaoMMparaCM(){
  return randomInt(15,800).toString()+"MM = ?cm";
}

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}