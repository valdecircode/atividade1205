//alert("Seja Bem vindo!");
//prompt("digite seu nome");
//document.write("Iniciando em JavaScript");
//exibe uma caixa para digitar o nome
//prompt("Digite seu nome");
//exibe uma caixa com 2 botoes oK e Cancelar
//resp=confirm("Será que vai chover?");
//alert("Um retorno de carro\bem no meio desta lina");
//alert("\"Isto não saiu como deveria!\" disse ela");
//alert("esta linha tem tabulação\taqui");

/*var a,b;
a=5;
b="5 Kg de açucar";
document.write("O valor da variavel A é:" +a);
document.write("<p>" + "O valor da variavel B é:" +b+ "<p>");
document.write("<p>" + "O valor da variavel A dividido por 2 é:" + a/2 +"</p>");
document.write("<p>" + "O valor da variavel B dividido por 2 é:" + b/2 +"</p>");
*/

/*var a, inteiro, flutuante;
a="45.78 Kg de açucar";
inteiro=parseInt(a);
flutuante=parseFloat(a);
document.write("O valor da variavel A é:" +a);
document.write("<p>" + " O valor numerico inteiro da variavel é:" + inteiro+"</p>");
document.write("<p>" + "O valor da variavel A dividido por 2 é" + inteiro /2+"</p>");
document.write("<p>" + " O valor da variavel decimal da variavel é " + flutuante+ "</p>");
*/


/*document.write("<p><b>"+ "Usado o método toUpperCase" + "</p></b>");
A = new String ("Olá pessoal!");
b = new String ("Seja bem vindos ao Javascript");
document.write(A.toUpperCase());
document.write(b.toUpperCase());
document.write("<p><b>" + "Você poderá usar:" + "</p></b>");
document.write("<p>" + A.toUpperCase() + b.toUpperCase()+ "</P>");
document.write("<p><b>" + "Usando o método tolowerCase" + "</p></br>");

document.write(A.toUpperCase());
document.write(b.toUpperCase());
document.write("<p><b>"+ "você poderá usar: " + "</p></b>");
document.write("<p>" +A.toUpperCase() + b.toUpperCase()+ "</p>");
*/

/*
hoje=new Date();
xDia= hoje.getDay();// o getDay é responsavel para mostar o dia da semana da matriz
diaSemana= new Array(7);
diaSemana[0]="domingo";
diaSemana[1]="Segunda-feira";
diaSemana[2]="Terca-feira";
diaSemana[3]="Quarta-feira";
diaSemana[4]="Quinta-feira";
diaSemana[5]="Sexta-feira";
diaSemana[6]="Sabado";
document.write("o número da semana é:"+ " " + (xDia +1));
document.write("<p><b>"+"hoje é:"+ diaSemana[xDia]);
*/



hoje=new Date();
xDia=hoje.getDay();
diadaSemana= new Array();
pratododia= new Array();
precodoprato= new Array();


diadaSemana[0]="Segunda-feira";
diadaSemana[1]="Segunda-feira";
diadaSemana[2]="Terca-feira";
diadaSemana[3]="Quarta-feira";
diadaSemana[4]="Quinta-feira";
diadaSemana[5]="Sexta-feira";


pratododia[0]="arroz";
pratododia[1]="macarrao";
pratododia[2]="feijoada";
pratododia[3]="carne com arroz";
pratododia[4]="arroz com batata";
pratododia[5]="arroz";



precodoprato[0]="10 reais";
precodoprato[1]="11 reais";
precodoprato[2]="12 reais";
precodoprato[3]="15 reais";
precodoprato[4]="16 reais";
precodoprato[5]="13 reais";

document.write(" o Prato do dia  é:"+ " " + [xDia +1]);
document.write("<p><b>"+"hoje é:"+ diadaSemana[xDia]);
document.write("<p><b>"+"Prato do Dia: "+ pratododia[xDia]);
document.write("<p><b>"+"Valor:"+ precodoprato[xDia]);

