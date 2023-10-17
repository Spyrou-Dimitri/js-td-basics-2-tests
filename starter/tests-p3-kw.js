/*
TESTS - PRÉPA 3 : kw
Ecrire un programme JS qui calcule le coût d’une consommation électrique.
L’utilisateur entre le nombre de KW consommés.
Les 30 premiers KW sont à 25 centimes le KW
Les 31 à 50èmes KW sont à 20 centimes le KW
Les 51 à 70èmes KW sont à 15 centimes le KW
Les KW suivants sont à 10 centimes le KW
*/
/*const kwIntroduit = prompt('Combien de Kw avez vous consommer ?');
kwConsomme = parseInt(kwIntroduit);
let costOver70;
let costUnder30;
let between31and50;
let costBetween31and50;
let between51and70;
let costBetween51and70;
let over70;

switch (kwConsomme){
    case kwConsomme <= 30:
        costUnder30 = kwConsomme * 25;
        console.log(`Le prix en centime sera de ${costUnder30}`);
    case kwConsomme >= 31 && kwConsomme <= 50:
        between31and50 = kwConsomme % 30;
        costBetween31and50 = (between31and50 * 20) + costUnder30;
        console.log(`Le prix en centime sera de ${costBetween31and50}`);
    case kwConsomme >= 51 && kwConsomme <= 70:
        between51and70 = kwConsomme % 50;
        costBetween51and70 = (between51and70 * 15) + costUnder30 + costBetween31and50;
        console.log(`Le prix en centime sera de ${costBetween51and70}`);
    case kwConsomme > 70:
        over70 = kwConsomme % 70;
        costOver70 = (over70 % 70) + costUnder30 + costBetween31and50 + costBetween51and70;
        console.log(`Le prix en centime sera de ${costOver70}`);
        break;

} */

const ristourne1 = 0.25;
const ristourne2 = 0.20;
const ristourne3 = 0.15;
const ristourne4 = 0.10;
let cout;

let kwConso = prompt('Quel est le nombre de kw consomme ?');
if (kwConso <=30){
    cout = kwConso * ristourne1;
    console.log(`Vous allez payer ${cout} centime`);
    } else if (kwConso >= 31 && kwConso <= 50) {
    cout = 30 * ristourne1 + (kwConso - 30) *ristourne2;
    console.log(`Vous allez payer ${cout} centime`);
    } else if (kwConso >= 51 && kwConso <= 70) {
    cout = 30 * ristourne1 + 20 * ristourne2 + (kwConso - 50) * ristourne3;
    console.log(`Vous allez payer ${cout} centime`);
    } else if (kwConso > 70) {
    cout = 30 * ristourne1 + 20 * ristourne2 + 20 * ristourne3 + (kwConso - 70) * ristourne4;
    console.log(`Vous allez payer ${cout} centime`);
}


/*
Valeurs de test :
- 30 KW => 750 centimes = 7.5 €
- 31 KW => 30 * 25 + 1 * 20 = 770 centimes = 7.7 €
- 40 KW => 30 * 25 + 10 * 20 = 750 + 200 = 950 centimes = 9.5 €
- 50 KW => 30 * 25 + 20 * 20 = 750 + 400 = 1150 centimes = 11.5 €
- 51 KW => 30 * 25 + 20 * 20 + 1 * 15 = 750 + 400 + 15 = 1165 centimes = 11.65 €
- 60 KW => 30 * 25 + 20 * 20 + 10 * 15 = 750 + 400 + 150 = 1300 centimes = 13 €
- 70 KW => 30 * 25 + 20 * 20 + 20 * 15 = 750 + 400 + 300 = 1450 centimes = 14.5 €
- 71 KW => 30 * 25 + 20 * 20 + 20 * 15 + 1 * 10 = 750 + 400 + 300 + 10 = 1460 centimes = 14.6 €
- 80 KW => 30 * 25 + 20 * 20 + 20 * 15 + 10 * 10 = 750 + 400 + 300 + 100 = 1550 centimes = 15.5 €
*/