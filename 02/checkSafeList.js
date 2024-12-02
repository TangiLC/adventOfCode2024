export function checkSafeList(list) {
	const startTimer = performance.now();
	console.log(`\nChecking data among ${list.length} reports`);
	let safeArr = [];

	for (let i = 0; i < list.length; i++) {
		let arrToCheck = list[i];

		let increasingOrder = null;
		let isSafe = true;

		for (let j = 0; j < arrToCheck.length; j++) {
			const diff = arrToCheck[j + 1] - arrToCheck[j];
			if (diff === 0) {
				isSafe = false;
				break;
			}
			if (Math.abs(diff) > 3) {
				isSafe = false;
				break;
			}
			if (increasingOrder === null && diff !== 0) {
				increasingOrder = diff > 0;
			}
			if ((increasingOrder && diff < 0) || (!increasingOrder && diff > 0)) {
				isSafe = false;
				break;
			}
		}
		if (isSafe) {
			safeArr.push(arrToCheck);
		}
		if (i % 30 === 0) {
			process.stdout.write(".");
		}
	}

	const endTimer = performance.now();
	let ms = Math.trunc((endTimer - startTimer) * 100) / 100;
	console.log(`\nCalcul terminé avec succès en ${ms}ms`);
	return safeArr;
}
