import json
from models import Animal, Dog, Cat
def save_data(animals):
    try:
        data = [a.to_dict() for a in animals]
        with open("data.json", "w") as f:
            json.dump(data, f, indent=4)
        print("Data saved successfully.")

    except Exception as e:
        print("Save error:", e)
def load_data():
    animals = []
    try:
        with open("data.json", "r") as f:
            data = json.load(f)

        for item in data:
            if item["type"] == "Dog":
                animals.append(
                    Dog(item["name"], item["age"], item["color"], item["breed"])
                )
            elif item["type"] == "Cat":
                animals.append(
                    Cat(item["name"], item["age"], item["color"], item["lives"])
                )
            else:
                animals.append(
                    Animal(item["name"], item["age"], item["color"])
                )
    except FileNotFoundError:
        print("File not found!")
    except Exception as e:
        print("Load error:", e)
    return animals