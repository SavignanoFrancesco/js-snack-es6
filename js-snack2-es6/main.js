//jsack2
//partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri scelti dall'utente
//usiamo forEach e/o filter()

$(document).ready(() => {

    //inizializzo un array
    const arr1 = [1,2,3,4,5,6,7,8,9,10];

    //chiedo all'utente di inserire due numeri
    let num1 = userNumber();
    let num2 = userNumber();

    //filtro il primo array
    const arr2 = arr1.filter((element, index) => {

        //e copio solo gli elementi tra gli indici scelti dall'utente(num-1 perchè l'array va da 0 a 9)
        if ((index >= (num1 - 1)) && (index <= (num2 - 1))) {
            return true;
        }

    });

    console.log(arr2);

});


function userNumber(){
    do {
        num = parseInt(prompt('Inserisci un numero'));
        if ((num < 1) || (num > 10) || (isNaN(num))) {
            alert('Inserire un numero da 1 a 10 compresi!');
        }
    } while ((num < 1) || (num > 10) || (isNaN(num)));
    return num;
}
