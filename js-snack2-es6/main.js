//jsack2
//partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri scelti dall'utente
//usiamo forEach e/o filter()

$(document).ready(() => {

    const arr1 = [1,2,3,4,5,6,7,8,9,10];

    let num1 = parseInt(prompt('Inserisci primo numero'));
    let num2 = parseInt(prompt('Inserisci secondo numero'));

    const arr2 = arr1.filter((element, index) => {

        if ((index >= (num1-1)) && (index <= (num2 - 2))) {
            return true;
        }

    });

    console.log(arr2);

});
