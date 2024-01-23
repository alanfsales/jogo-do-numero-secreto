function olaMundo(){
    console.log('Olá Mundo!');
}

olaMundo();

function exibeNome(nome){
    console.log(`Olá, ${nome}!`);
}

exibeNome('Alan');

function dobro(numero){
    console.log(numero * 2);
}

dobro(2);

function media(n1, n2, n3){
    console.log((n1+n2+n3)/3);
}

media(10,10,8);

function numeroMaior(n1, n2){
    let maior;

    if(n1 > n2){
        maior = n1;
    }else{
        maior = n2;
    }
    console.log(maior);
}

numeroMaior(9,8);

function multiplicacao(n1){
    console.log(n1*n1);
}

multiplicacao(4);