class Animal:
    def __init__(self, name, age, color):
        if not isinstance(name, str):
            raise TypeError("Name must be a string")
        if not isinstance(age, int):
            raise TypeError("Age must be an integer")
        if age < 0:
            raise ValueError("Age cannot be negative")

        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Some sound"

    def info(self):
        return f"{self.name} is {self.age} years old"

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"

    def to_dict(self):
        return {
            "type": self.__class__.__name__,
            "name": self.name,
            "age": self.age,
            "color": self.color
        }
class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        if not isinstance(breed, str):
            raise TypeError("Breed must be a string")
        self.breed = breed

    def speak(self):
        return "Woof"

    def fetch(self):
        return f"{self.name} is fetching!"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, color={self.color}, breed={self.breed})"

    def to_dict(self):
        data = super().to_dict()
        data["breed"] = self.breed
        return data
class Cat(Animal):
    def __init__(self, name, age, color, lives):
        super().__init__(name, age, color)
        if not isinstance(lives, int):
            raise TypeError("Lives must be an integer")
        self.lives = lives

    def speak(self):
        return "Meow"

    def scratch(self):
        return f"{self.name} is scratching!"

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, lives={self.lives})"

    def to_dict(self):
        data = super().to_dict()
        data["lives"] = self.lives
        return data