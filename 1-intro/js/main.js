const automobile = {
    'colore':'nero',
    marca:'fiat',
    "modello":'punto',
    "anno di produzione": 2023,
};

automobile.cilindrata = 1200;
automobile.colore = "rosso";
automobile["anno di produzione"] = 2019;

automobile.colore = ['rossa', 'gialla'];
automobile.colore.push('verde');

console.log(automobile);





for (let key in automobile) {
    console.log(automobile[key]);
}