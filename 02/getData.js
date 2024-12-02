import { readFile } from "fs/promises";

export async function getData(path) {
	console.log("Fetching data...");

	try {
        const fileContent = await readFile(path, "utf-8");
        const data = JSON.parse(fileContent)
        return data ;

    } catch (error) {
        console.error("Erreur de récupération des data :", error);
        throw error; 
    }

}