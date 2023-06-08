// declarações das variaveis
var numero1;
var numero2;
var repeticao = 0;
// Verificar resposta do usuario
while (repeticao == 0)
{
numero1 = prompt("digite um numero");
numero2 = prompt("digite outro numero");
// Transformar resposta do usuario em numero
numero1 = Number(numero1)
numero2 = Number(numero2)
// Caso o usuario não coloque um numero a entrada sera "NaN", ele não saira do looping!
if (isNaN(numero1) || isNaN(numero2))
{
    alert("você não digitou um numero")
}
// Caso ele insira apenas numeros, ira efetuar uma soma e saira do looping!
else
{
    soma = numero1 + numero2
    alert("a soma de " + numero1 + " + " + numero2 + " é: " + soma)
    i++
}
}
