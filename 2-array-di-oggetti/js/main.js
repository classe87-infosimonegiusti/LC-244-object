const classi = [
    {
       'nome' : 'Classe 87',
       'numero_studenti' : 35,
    },
    {
       'nome' : 'Classe 88',
       'numero_studenti' : 30,
    },
];

const nuovaClasse = {
    'nome': 'Classe 89',
    'numero_studenti': 27
};

classi.push(nuovaClasse);

console.log(classi);

for (var i = 0; i < classi.length; i++) {
    const classeCorrente = classi[i];
    
	console.log('CLASSE: ' + classeCorrente['nome']);

    for (var chiave in classeCorrente) {
        console.log(chiave + ': ' + classeCorrente[chiave]);
    }
}