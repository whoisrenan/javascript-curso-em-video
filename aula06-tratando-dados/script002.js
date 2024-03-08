var n1 = Number(prompt("Qual é o primeiro número?")); //prompt sempre retornará string, para isso, precisará converter para número utilizando parseInt(nomeVariavel), que irá forçar o retorno do número a ser inteiro. parseFloat(nomeVariavel), que irá forçar o retorno do número ser real (quebrado). ou somente Number(nomeVariavel), onde o javascript decidirá que tipo de número irá retornar.
var n2 = Number(prompt("Qual é o segundo número?")); //prompt sempre retornará string, para isso, precisará converter para número utilizando parseInt(nomeVariavel), que irá forçar o retorno do número a ser inteiro. parseFloat(nomeVariavel), que irá forçar o retorno do número ser real (quebrado). ou somente Number(nomeVariavel), onde o javascript decidirá que tipo de número irá retornar.

var soma = n1 + n2;
alert(`A soma entre ${n1} + ${n2} é: ${soma}`);
