from models import Animal, Dog, Cat
from storage import save_data, load_data
def main():
    try:
        dog = Dog("Rex", 5, "Brown", "Labrador")
        cat = Cat("Murka", 3, "White", 9)
        animal = Animal("Unknown", 2, "Gray")
        animals = [dog, cat, animal]

        print("Original objects:\n")
        for a in animals:
            print(a)
            print(a.speak())
            print(a.info())
            print("-----")

    except (ValueError, TypeError) as e:
        print("Error creating objects:", e)
        return
    try:
        save_data(animals)

        loaded_animals = load_data()

        print("\nLoaded from JSON:\n")
        for a in loaded_animals:
            print(a)

    except Exception as e:
        print("Unexpected error:", e)

    finally:
        print("\nProgram finished.")
if __name__ == "__main__":
    main()