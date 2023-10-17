/*****************************
* CODING CHALLENGE 2
*/

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, L'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
	et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
	N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen)
4. BONUS : Mary jour aussi au basket, et son équipe a marqué 97, 134 et 105 points.
	Comme avant, imprimez le gagnant en moyenne dans la console.
	INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision. 
5. Changez là aussi les scores pour générer différents gagnants,
	en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus

const johnMatch1 = 89;
const johnMatch2 = 120;
const johnMatch3 = 103;

const mikeMatch1 = 116;
const mikeMatch2 = 94;
const mikeMatch3 = 123;

const marieMatch1 = 97;
const marieMatch2 = 134;
const marieMatch3 = 105;

const moyenneJohn = 100//(johnMatch1 + johnMatch2 + johnMatch3) / 3;
const moyenneMike = 100//(mikeMatch1 + mikeMatch2 + mikeMatch3) / 3;
const moyenneMarie = 102//(marieMatch1 + marieMatch2 + marieMatch3) / 3;
if (moyenneJohn > moyenneMike && moyenneJohn > moyenneMarie) {
    console.log(`L'équipe de John a la plus haute moyenne de point ! Càd : ${moyenneJohn}`);
} else if (moyenneJohn < moyenneMike && moyenneMarie < moyenneMike) {
    console.log(`L'équipe de Mike a la plus haute moyenne de point ! Càd : ${moyenneMike}`);
} else if (moyenneMarie > moyenneJohn && moyenneMarie > moyenneMike){
    console.log(`L'équipe de Marie a la plus haute moyenne de point ! Càd : ${moyenneMarie}`);
} else {
    console.log(`Les 3 équipes sont ex aequo ! Càd : ${moyenneJohn} pour John et ${moyenneMike} pour Mike et ${moyenneMarie} pour Marie`);
}

// avec bonus


