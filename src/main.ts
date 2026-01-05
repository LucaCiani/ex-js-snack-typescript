// SNACK-1

// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
// Se è una stringa: stampala in maiuscolo
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”

// 🎯 BONUS
// Se è null: stampa “Il dato è vuoto”
// Se è un array: stampa la sua lunghezza
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.

let datiGenerici: unknown; //Prendi i dati da un API

if (typeof datiGenerici === "string") {
    const data = datiGenerici.toUpperCase();
    console.log(data);
} else if (typeof datiGenerici === "number") {
    const data = datiGenerici * 2;
    console.log(data);
} else if (typeof datiGenerici === "boolean") {
    const data = datiGenerici ? "Sì" : "No";
    console.log(data);
} else if (datiGenerici === null) {
    console.log("Il dato è vuoto");
} else if (Array.isArray(datiGenerici)) {
    console.log(datiGenerici.length);
} else if (datiGenerici instanceof Promise) {
    datiGenerici.then((msg) => console.log(msg));
} else {
    console.log("Tipo non supportato");
}

// SNACK-2

// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])

// 🎯 BONUS
// Il type alias Dipendente, ha anche i seguenti dati:

// emailAziendale → Email assegnata al dipendente (non si può modificare)
// contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.

type Dipendente = {
    nome: string;
    cognome: string;
    annoNascita: number;
    sesso: "m" | "f";
    anniDiServizio: number[];
    readonly emailAziendale: string;
    contratto: "indeterminato" | "determinato" | "freelance";
};
