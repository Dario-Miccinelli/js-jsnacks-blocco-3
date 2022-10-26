// Snack 1 


var element = document.getElementById("snack1");

element.addEventListener('click', function(){

let array = [];
let sum = 0;

while (sum < 50 ) {
    let num = parseInt(prompt("Inserisci qui il numero, deve essere superiore a 50"));
    sum += num;
    array.push(num);  
    document.getElementById("snack1text").innerHTML = sum;
}


console.log (array);
console.log (sum);

})


// snack 2
// dichiarazioni

var element2 = document.getElementById("snack2");
    var sums = 0;
    var times = 5;

// funzione

element2.addEventListener('click', function(){

    for (i = 0; i < times; i++) {
    let nums =parseInt(prompt("Inserisci 5 volte un numero"));
    document.getElementById("snack2text").innerHTML = sums+=nums;

    }
})