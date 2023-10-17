/*
TESTS - PRÉPA 2 : Les restos du cœur
Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
avec un maximum de 2€.
Ecrire le programme JS qui, à partir du montant des achats,
calcule et affiche la somme versée aux restos du cœur.
*/

/* Tester avec des montants d'achat de
- 20€ (pas de remise, pas de montant versé)
- 30€ (remise de 3€, pas de montant versé)
- 60€ (remise de 6€, 0.6€ versés)
- 100€ (remise de 10€, 1€ versés)
- 200€ (remise de 20€, 2€ versés)
- 1000€ (remise de 100€, 2€ versés)
*/

const prix = prompt('Quel est le prix ?');
let remise;
let don;

if (prix > 25) {
    remise = prix * 0.1;
    console.log(`La remise est de ${remise}`);
    if (remise > 5) {
        don = (remise * 0.1)
        if (don > 2) {
            don = 2;
            console.log(`Le don pour les resto du coeur est de ${don}`);
        } else {
            console.log(`Le don pour les resto du coeur est de ${don}`);
        }
    } else {
        console.log('Il n\'y aura pas de don');
    }
} else {
    console.log('Il n\'y aura pas de remise');
}