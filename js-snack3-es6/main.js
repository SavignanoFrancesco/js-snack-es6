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




    //scorro l'array iniziale per copiarne ogni oggetto
    const cloned_array = arr1.map((element, index) => {

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

    //aggiungo la proprietà position ad ogni oggetto di cloned_array
    cloned_array.forEach((element, index) => {

        //assegno una lettera casuale alla proprietà position
        element.position = (() => {
            let rnd_char = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let characters_length = characters.length;
            rnd_char = characters.charAt(Math.floor(Math.random() * characters_length));
            return rnd_char;
        })();

    });

    console.log(arr1);
    console.log(cloned_array);


});

// function rndCharacter() {
//    let rnd_char = '';
//    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//    let characters_length = characters.length;
//    rnd_char = characters.charAt(Math.floor(Math.random() * characters_length));
//    return rnd_char;
// }
