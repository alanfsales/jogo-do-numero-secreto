function imc(altura, peso) {
    return peso/(altura * altura);
}

console.log(imc(1.7, 55));

function fatorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * fatorial(num - 1));
    }
}
console.log(fatorial(5));

function convertDolarReal(dolar) {
    return dolar * 4.8;
}

console.log('R$ ' + convertDolarReal(1));

function perimetroAreaRetangulo(largura, altura) {
    let perimetro = (largura + altura) / 2;
    let area = largura + altura;
    let resposta = `Perimetro Ret: ${perimetro}. Area: ${area}.`;
    return resposta;
}

let texto = document.querySelector('h1');
texto.innerHTML = perimetroAreaRetangulo(5,3);

function perimetroAreaCirculo(raio) {
    let perimetro = 2 * 3.14 * raio;
    let area = 3.14 * (raio * raio);
    let resposta = `Perimetro Circ: ${perimetro}. Area: ${area}.`;
    return resposta;
}

let texto1 = document.querySelector('p');
texto1.innerHTML = perimetroAreaCirculo(5);

function tabuada(numero) {
    let i = 1;
    while(i <= 10){
        console.log(numero + ' x ' + i + ' = ' + i * numero);   
        i++;   
    }
}

tabuada(6);
  