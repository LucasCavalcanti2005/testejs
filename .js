
function soma(valor1,valor2){
    return valor1 + valor2;
}
function realParaDolar(real,cotacaoDolar){
    return real * cotacaoDolar;
}
var valorReal=7.89;
var cotacao=5.08;
var total=realParaDolar(valorReal,cotacao);
alert("O valor em real é R$: "+valorReal+" o valor em dólar U$ é: "+total);
function alertHello(){
    alert("Olá pessoal");
}
function paraCelsius(valorFahrenheit){
    return (5/9)*(valorFahrenheit-32);
}
var x = paraCelsius(77);
alert("A temperatura é de " + x + " graus celsius");