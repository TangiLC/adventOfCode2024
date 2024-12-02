import { checkSafeList } from "./checkSafeList.js";
import { secondaryCheck } from "./secondaryCheck.js";
import { getData } from "./getData.js";

async function main() {
	console.log("Démarrage de l'application...");
	
	try {
		const data = await getData("./data.json");
		console.log("success")
		const totalSafe = checkSafeList(data.reports).length;
		console.log("Total Safe:", totalSafe);
		const damperSafe = secondaryCheck(data.reports).length;
		console.log("Damper Safe:", damperSafe);
	} catch (error) {
		console.error("Erreur dans l'execution de l'application :", error);
		throw error;
	}
}

main();
