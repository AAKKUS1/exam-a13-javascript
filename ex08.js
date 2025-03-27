function multiplierParDeux(tab) {
	let stock = [];
	for (let i = 0; i < tab.length; i++) {
		stock.push(tab[i] * 2);
	}
	return stock;
}
console.log(multiplierParDeux([1, 2, 3])); // Résultat attendu : [2, 4, 6]
