export function similarityScore(list1, list2) {
	const startTimer = performance.now();
	process.stdout.write("\nSearching similarities");
	let totalSimilarity = 0;
	for (let i = 0; i < list1.length; i++) {
		let item = list1[i];
		let occurrence = 0;
		for (let j = 0; j < list2.length; j++) {
			if (list2[j] == item) {
				occurrence++;
			}
		}
		if (i % 20 == 0) {
			process.stdout.write(".");
		}
		totalSimilarity += item * occurrence;
	}
	const endTimer = performance.now();
	let ms = Math.trunc((endTimer - startTimer) * 100) / 100;
	console.log(`\nRecherche terminé avec succès en ${ms}ms`);
	return totalSimilarity;
}
