//jsnack1
//creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso
//stampare a schermo la bici con peso minore utilizzando destructuring e template literal

$(document).ready(function(){

    //inizializzo array di oggetti bikes
    let bikes = [
        {
            nome: 'bici1',
            peso: 40
        },
        {
            nome: 'bici2',
            peso: 20
        },
        {
            nome: 'bici3',
            peso: 25
        }
    ];

    //inizializzo la bici più leggera come il primo elemento dell'array
    let lighter_bike = bikes[0];

    //scorro gli elementi dell'array
    bikes.forEach((bike) => {
        //confronto il peso dell'oggetto corrente con l'oggetto più leggero
        //se il peso dell'oggetto corrente è minore
        if (bike.peso < lighter_bike.peso) {
            //l'oggetto corrente diventa l'oggetto più leggero
            lighter_bike = bike;

        }
    });

    //destrutturo l'oggetto in due variabili contenenti le proprietà
    const {nome, peso} = lighter_bike;
    console.log(nome);
    console.log(peso);
    //stampo su pagina la bici più leggera
    $('.container').append(`
        <h1>La bici più leggera è: </h1>
        <div>${nome} : ${peso}kg</div>
    `);


});
