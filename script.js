const kilometri= prompt ('Quanti km vuoi percorrere?');
const userAge= prompt ('Quanti anni hai?');
let costoalkm= 0.21;
let costocomplessivo= costoalkm * kilometri;
let costoscontato;

if (userAge < 18) {
    costoscontato= ((20 * costocomplessivo) / 100).toFixed(2);
} else if (userAge > 60) {
    costoscontato= ((40 * costocomplessivo) / 100).toFixed(2);
} else {
    costoscontato=costocomplessivo.toFixed(2);
}


document.getElementById('kilometri') .innerHTML = kilometri;
document.getElementById('userAge') .innerHTML = userAge;
document.getElementById('costototale') .innerHTML = costoscontato;

console.log(kilometri);
console.log(userAge);
console.log(costoalkm);
console.log(costocomplessivo);
console.log(costoscontato);

