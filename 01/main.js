import { createLists } from "./createLists.js";
import { similarityScore } from "./similarityScore.js";
import { sortAndAdd } from "./sortAndAdd.js";

async function main() {
	console.log("Démarrage de l'application...");

	try {
		const { list1, list2 } = await createLists();
		const total = sortAndAdd(list1, list2);
		console.log("Total Diff =", total);

		const similar = similarityScore(list1, list2);
		console.log("Total Simil=", similar);
	} catch (error) {
		console.error("Erreur dans l'application :", error);
	}
}

main();
