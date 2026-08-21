alert('Olá, Mundo!')

var nasc = 2010;
let nome = "Eric Ravy";
const viva = true
let altura = 1.74;

if (viva){
    let saudacao = "Olá "+ nome +"!";
    let msg = `Altura ${altura}m | Idade ${2026-nasc}`;
    alert(saudacao+"\n"+msg);
}else{
    alert("R.I.P");
}