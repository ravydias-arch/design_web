let vezes = Number(prompt('Digite o número de vezes '));
for(let i = 1; i <=vezes; i++){
    if (vezes >100){
        alert("Você digitou um valor muito alto");
        break;
    }
    alert(`Contei ${i} vezes`);
    if (i % 2 != 0){
        continue;
    }
    alert(`${i} é par`);
}