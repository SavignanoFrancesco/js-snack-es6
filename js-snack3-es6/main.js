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

        //clono l'oggetto utilizzando l'operatore spread e gli aggiungo la proprietà position
        let cloned_obj = {
                ...element,
                posiiton: rndCharacter()
        };

    //pusho l'oggetto clonato con in più la proprietà position nell'array clonato
    return cloned_obj;

    });

    console.log(arr1);
    console.log(cloned_array);


});

function rndCharacter() {
   let rnd_char = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let characters_length = characters.length;
   rnd_char = characters.charAt(Math.floor(Math.random() * characters_length));
   return rnd_char;
}
