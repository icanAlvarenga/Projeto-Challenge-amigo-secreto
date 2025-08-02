let listaDeAmigos = [];
//exibe as mensagens na tela 
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
 }
//adiciona um amigo ao array
function adicionarAmigo() {
   let adAmigo = document.getElementById('amigo').value;
    if (adAmigo.length <= 1) {
       exibirTextoNaTela('h1', 'Tente digitar novamente!');
       document.getElementById('amigo').value = [];
       return;
    }
    //verifica se existe nomes repetidos no array
    if (listaDeAmigos.includes(adAmigo)) {
        exibirTextoNaTela('h1', 'Esse nome ja foi adicionado, tente novamente');
    }else{
        listaDeAmigos.push(adAmigo);
        attlista();
    }
    document.getElementById('amigo').value = [];
}

//adiciona os nomes no input para que o usuario veja
function attlista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML ='';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let novoItem = document.createElement('li');
        novoItem.textContent = listaDeAmigos[i];
        lista.appendChild(novoItem);
        
    }   
}

//Sorteia um amigo aleatório
function sortearAmigo() {
    let MsgDresultado = document.getElementById('resultado');
    MsgDresultado.innerHTML = '';
    let numSorteado = Math.floor((Math.random() * listaDeAmigos.length));
    if (listaDeAmigos.length <1) {
        exibirTextoNaTela('h1', 'Sem amigos para sortear!');
    }else{
        MsgDresultado.innerHTML = 'O amigo(a) sorteado foi: ' + listaDeAmigos[numSorteado];
    }
}