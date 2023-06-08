var numero1;
var numero2;
var repeticao = 0;
while (repeticao == 0)
{
numero1 = prompt("digite um numero");
numero2 = prompt("digite outro numero");
numero1 = Number(numero1)
numero2 = Number(numero2)

if (isNaN(numero1) || isNaN(numero2))
{
    alert("você não digitou um numero")
}
else
{
    soma = numero1 + numero2
    alert("a soma de " + numero1 + " + " + numero2 + " é: " + soma)
    i++
}
}
