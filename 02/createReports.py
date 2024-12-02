import json

def text_to_json(input_file="./data.txt", output_file="./data.json"):
    try:
        with open(input_file, "r") as file:
            lines = file.readlines()

        data = []
        for line in lines:
            numbers = list(map(int, line.strip().split()))
            data.append(numbers)

        with open(output_file, "w") as json_file:
            json.dump(data, json_file, indent=4)
        
        print(f"Les données ont été écrites dans le fichier '{output_file}'.")
    
    except Exception as e:
        print(f"Une erreur s'est produite : {e}")

text_to_json()
