var nome = prompt("Qual é o seu nome?");
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras <br>`);
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()} <br>`);
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()} <br>`);
// ___________________________________________________________________
//                         Atividades Práticas:
// Q001: Como é possível guardar o valor digitado em um prompt() dentro de uma variável.
// RESPOSTA: var valor = prompt("Digite qualquer coisa: ")
// document.write(`O valor digitado foi ${valor}`)
// ___________________________________________________________________
// Q002: Como fazer com que um número digitado em um prompt() possa ser usado em cálculos.
// RESPOSTA: var n1 = Number(prompt("Digite um número: "))
// var n2 = Number(prompt("Digite outro número: "))
// var soma = n1 + n2
// document.write(`o número digitado foi ${n1} e ${n2}. A soma entre eles é ${soma} `)
// ___________________________________________________________________
// Q003: Como transformar um texto todo para letras maiúsculas?
// RESPOSTA: var texto = prompt("Digite qualquer coisa para que seu texto seja transformado em letras maiúsculas: ")
// document.write(`O texto em maiúsculas: ${texto.toUpperCase()}`)
// ___________________________________________________________________
// Q004: Como mostrar um número formatado como um valor monetário.
// RESPOSTA: var salario = Number(prompt("Digite o valor do seu sálario: "));
// document.write(
//   `O valor do seu salário é ${salario.toLocaleString("pt-BR", {
//     style: "currency",
//     currency: "BRL",
//   })} reais!`
// );
//  __________________________________________________________________
// Q005: Use o operador ternário para colocar um entre dois valores em uma variável
// var idade = 17;
// var adulto = idade>= 18? "Adulto" : "Adolescente"
// console.log(adulto)
