export function secondaryCheck(list) {
	const startTimer = performance.now();
	console.log(`\nDouble Checking data among ${list.length} reports`);
	let safeArr = [];

	for (let i = 0; i < list.length; i++) {
		const arrToCheck = list[i];
		if (validateReport(arrToCheck)) {
			safeArr.push(arrToCheck);
			continue;
		}

		const fixedArr = tryFixReport(arrToCheck);
		if (fixedArr) {
			process.stdout.write("*");
			safeArr.push(fixedArr);
		}

		if (i % 20 === 0) {
			process.stdout.write(".");
		}
	}

	const endTimer = performance.now();
	let ms = Math.trunc((endTimer - startTimer) * 100) / 100;
	console.log(`\nCalcul terminé avec succès en ${ms}ms`);
	return safeArr;
}

function validateReport(arr) {
	if (arr.length < 2) return false;

	let increasingOrder = null;
	for (let j = 0; j < arr.length - 1; j++) {
		const diff = arr[j + 1] - arr[j];

		if (diff === 0 || Math.abs(diff) > 3) return false;

		if (increasingOrder === null && diff !== 0) {
			increasingOrder = diff > 0;
		}

		if ((increasingOrder && diff < 0) || (!increasingOrder && diff > 0)) {
			return false;
		}
	}
	return true;
}

function tryFixReport(arr) {
	for (let i = 0; i < arr.length; i++) {
		const fixedArr = arr.filter((_, idx) => idx !== i);
		if (validateReport(fixedArr)) {
			return fixedArr;
		}
	}
	return null;
}
