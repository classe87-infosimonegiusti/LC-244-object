const alunni = [
    {
        'nome': 'Giacomo', 'cognome': 'Puccini', 'eta': 50
    },
    {
        'nome': 'Mario', 'cognome': 'Rossi', 'eta': 20
    }
];


const nome = prompt('Nome del nuovo studente');
const cognome = prompt('Cognome del nuovo studente');
const eta = parseInt(prompt('Eta del nuovo studente'));

const nuovoStudente = {
    'nome': nome,
    'cognome': cognome,
    'eta': eta
};

alunni.push(nuovoStudente);

console.log(alunni);