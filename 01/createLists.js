import { readFile } from "fs/promises";

export async function createLists() {
    process.stdout.write("\nCreating Lists");

    let list1 = [];
    let list2 = [];

    try {
        // Lire le fichier JSON
        const fileContent = await readFile("./data.json", "utf-8");
        const data = JSON.parse(fileContent);

        // Diviser data en list1 et list2
        for (let i = 0; i < data.data.length - 1; i += 2) {
            list1.push(data.data[i]);
            list2.push(data.data[i + 1]);
            if (i%50==0){process.stdout.write(".");}
        }

        return { list1, list2 };
    } catch (error) {
        console.error("Erreur dans createLists :", error);
        throw error; 
    }
}
