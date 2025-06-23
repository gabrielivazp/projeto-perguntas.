const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova escolha... QUAL FACULDADE VAI SEGUIR?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo desta nova faze. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "já sabe o que seguir e não tem medo do futuro"
            }
        ]
    },
    {
        enunciado: "Com com isto vocẽ tem algumas coisas para pensar, por que quer seguir na area?",
        alternativas: [
            {
                texto: "Pois isto é uma escolha sincera de minha escolha gosto e paixão.",
                afirmacao: "Conseguiu escoler algo que ama."
            },
            {
                texto: "não sei apenas escolhi por escolher/ não escolhi ainda.",
                afirmacao: "Sentiu mais dificuldade na escolha e esta em duvida."
            }
        ]
    },
    {
        enunciado: "Mas com isto precisa saber qual sua verdadeira paixão para melhor escolha?",
        alternativas: [
            {
                texto: "Jogos (programador) pintar/desenhar (artista plastico, pintor, desenhenhista) cantar (cantor) ciências biologicas (biologia, genética) ent.",
                afirmacao: "sei meus gostos tenho a certeza do que quero."
            },
            {
                texto: "não tenho preferencias",
                afirmacao: "não sei o que seguir não seu meus gotos tenho duvidas"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisa pensar se é realmente o que quer, e se jogar na area de sua paixão?",
        alternativas: [
            {
                texto: "sim tenho certeza, está é minha area favorita vou seguir nela.",
                afirmacao: "tem certeza ."
            },
            {
                texto: "não tenho a certeza mas to na escolha",
                afirmacao: "Acelerou esta pensando!"
            }
        ]
    },
    {
        enunciado: " ama o que deseja fazer. ",
        alternativas: [
            {
                texto: "amo o que decidir fazer, é minha paixão sei que vou me dar muito bem na area.",
                afirmacao: "gostou"
            },
            {
                texto: "não é a principal escolha mas o gosto e tenho um certo interesse.",
                afirmacao: " incertezas. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
