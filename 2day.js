let nome = prompt("Qual o seu nome ?");
let idade =  prompt("Qual a sua idade ?");
let linguagem = prompt("Qual linguagem de programação você está estudando ?");
let pergunta =  parseInt(prompt("Você gosta de estudar " + linguagem + " ? Responda [1] para SIM e [2] para NÃO."));

if (pergunta === 1) {
    document.write("Olá " + nome + ". Você tem " + idade + " anos e já está aprendendo " + linguagem + ". " );
    document.write("Que bom você estar gostando da linguagem " + linguagem + ". Continue estudando e você terá muito sucesso.");
}
if (pergunta === 2) {
    document.write("Olá " + nome + ". Você tem " + idade + " anos e já está aprendendo " + linguagem + ". " );
    document.write("Que pena você não gostar da linguagem " + linguagem + ". Já tentou aprender outras linguagens?");
}