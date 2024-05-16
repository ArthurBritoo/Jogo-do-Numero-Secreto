alert('Bem vindo ao jogo Numero secreto de Britinho');
let numeroMaximo = 100
let numerSecreto = parseInt(Math.random() * (numeroMaximo) + 1) ;
console.log (numerSecreto);
let chute;
let tentativas = 1

// enquanto o numero nao for igual ao numero secreto
while(chute != numerSecreto){
   chute = prompt (`Escolha um numero entre 1 e ${numeroMaximo}`);
//se o chute for igual ao numero secreto
{{if(chute == numerSecreto) {
    break
    
}else {
    if (chute > numerSecreto){
        alert(`Quase! o numero secreto eh menor que o ${chute}`);
    } else {
        alert(`Quase! o numero secreto eh maior que o ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
}}}
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert (`acertou o numero ${numerSecreto} com ${tentativas} ${palavraTentativa}`);
