//jsack3
//partendo da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array copiato la proprietà position che contiene una lettera casuale
//

$(document).ready(() => {

    const arr1 = [
        {
            nome: 'mario',
            cognome: 'rossi'
        },
        {
            nome: 'marco',
            cognome: 'bianchi'
        },
        {
            nome: 'anna',
            cognome: 'verdi'
        },
        {
            nome: 'gianna',
            cognome: 'neri'
        }
    ];


    console.log(arr1);

    //scorro l'array iniziale per copiarne ogni oggetto
    const arr2 = arr1.map((element, index) => {

        //inizializzo l'oggetto copiato
        let cloned_obj = {};
        //scorro l'oggetto in posizione i
        for(var key in element){
            //copio l'oggetto originale in un oggetto copia
            cloned_obj[key] = element[key];
        }
        //pusho l'oggetto copiato nel nuovo array
        return cloned_obj
    });

    //aggiungo la proprietà position ad ogni oggetto di arr2
    arr2.forEach((element, index) => {
        element.position = 'a';
    });

    console.log(arr2);


});
