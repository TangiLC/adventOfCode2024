export function sortAndAdd(list1, list2) {
	const startTimer = performance.now();
	console.log("\nSorting data");

	const sortedL1 = list1.sort((a, b) => a - b);
	const sortedL2 = list2.sort((a, b) => a - b);

	let total = 0;
	for (let i = 0; i < sortedL1.length; i++) {
		total += Math.abs(sortedL1[i] - sortedL2[i]);
		if (i % 30 == 0) {
			process.stdout.write(".");
		}
	}
	const endTimer = performance.now();
	let ms = Math.trunc((endTimer - startTimer) * 100) / 100;
	console.log(`\nCalcul terminé avec succès en ${ms}ms`);
	return total;
}
