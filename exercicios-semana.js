// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), siga os seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)

// Números de cartões válidos para teste:

// 5555666677778884
// 5485755481460022
// 5141331902596939
// 5381579886310193
// 5261400319746371

function validaCC(numero){
	let soma = 0;
	    //2. Escreva os números na ordem inversa;
		for(let i =  numero.length-1; i>=0; i-=2){
			    //1.Retire o último dígito do número. Ele é o verificador (o ultimo digito não entra na equação nesse ponto)
				// 3. Multiplique os dígitos das casas ímpares por 2
				let resultado = Number(numero.charAt(i-1)) * 2;
				if(resultado>9){
					//3.2 e subtraia 9 de todos os resultados maiores que 9;
					resultado=resultado-9;
				}
				// 4. Some todos os números;
				// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
				soma = soma+Number(numero.charAt(i))+resultado;
			}
		// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)	
		return soma%10==0;
}
console.log(validaCC("5555666677778884"));
console.log(validaCC("5485755481460022"));
console.log(validaCC("5141331902596939"));
console.log(validaCC("5381579886310193"));
console.log(validaCC("5261400319746371"));

///////////////////////


// DESAFIO - saudar clientes

// Escreva uma função chamada saudarCliente.
// Essa função deve receber um nome, verificar se ele existe na base de clientes e retornar uma saudação com base em quantas vezes a cliente visitou um estabelecimento. 
// Consulte o objeto baseClientes abaixo. A saudação deve ser diferente, dependendo do nome da reserva.

// Caso 1 - Cliente desconhecida (o nome não está presente no objeto baseClientes)
// console.log(saudarCliente('Chiquinha')) // --> 'Olá, é a primeira vez por aqui?'

// Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)
// console.log(saudarCliente('Clotilde')) // --> 'Bem-vinda, Clotilde! Que bom que voltou!'

// Caso 3 - Cliente repetida: (o valor de 'visitas' é maior que 1)
// console.log(saudarCliente('Florinda')) // --> 'Bem-vinda mais uma vez, Florinda!'

// Notas:
// Sua função não deve alterar o objeto baseClientes para atualizar o número de visitas.
// Não codifique os dados exatos da amostra. Esta é uma má ideia:
// if (nomeCliente === 'Maria') {
//   // etc
// }

const baseClientes = {
  Clotilde: {
    visitas: 1,
  },
  Florinda: {
    visitas: 2,
  },
  Paty: {
    visitas: 3,
  },
}

function saudarCliente(pessoa){	
if(baseClientes[pessoa]==undefined){
return "Olá ".concat(pessoa).concat(", é sua primeira vez por aqui?");
} else 
{
	let qtVisitas = baseClientes[pessoa].visitas;
	if(qtVisitas===1){
	return "Bem-vinda, ".concat(pessoa).concat("!. Que bom que voltou!!");
	}else if(qtVisitas>1){
	return "Bem-vinda mais uma vez, ".concat(pessoa).concat("!.");
	}
}	

}
console.log(saudarCliente("Chiquinha"));
console.log(saudarCliente("Clotilde"));
console.log(saudarCliente("Florinda"));
console.log(saudarCliente("Paty"));