function longueursMots(mots) {
	let stock = [];
	for (let i = 0; i < mots.length; i++) {
		stock.push(mots[i].length);
	}
	return stock;
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]
