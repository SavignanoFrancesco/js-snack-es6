//jsnack1
//creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso
//stampare a schermo la bici con peso minore utilizzando destructuring e template literal

$(document).ready(function(){

    //inizializzo array di oggetti bikes
    let bikes = [
        {
            nome: 'bici1',
            peso: 15
        },
        {
            nome: 'bici2',
            peso: 25
        },
        {
            nome: 'bici3',
            peso: 20
        }
    ];

    //inizializzo il peso corrente come peso del primo oggetto
    let current_weight = bikes[0].peso;
    //indice della bici più leggera
    let lighter_bike = 0;

    //scorro gli elementi dell'array
    bikes.forEach((bike, index) => {
        //confronto il peso corrente con il peso dell'oggetto corrente
        //se il peso dell'oggetto corrente è minore
        if (current_weight > bike.peso) {

            //il peso dell'oggetto corrente diventa il peso corrente
            current_weight = bike.peso;
            //salvo l'indice di questo ooggetto nell'array
            lighter_bike = index;

        }
    });

    //destrutturo l'array prelevando l'oggetto con l'indice salvato in precedenza
    const {nome, peso} = bikes[lighter_bike];
    console.log(nome);
    console.log(peso);
    //stampo su pagina la bici più leggera e il suo peso
    $('.container').append(`
        <h1>La bici più leggera è: </h1>
        <div>${nome} : ${peso}kg</div>
    `);


});
