from animal_functions import make_animal_sound, get_animal_legs, describe_animal

def main():
    # Test our animal functions
    print("Welcome to the Animal Kingdom!")
    print("-" * 30)
    
    # Test individual functions
    print(f"Cat sound: {make_animal_sound('cat')}")
    print(f"Spider legs: {get_animal_legs('spider')}")
    
    # Test the description function
    animals = ['dog', 'duck', 'cat']
    for animal in animals:
        print(describe_animal(animal))

if __name__ == "__main__":
    main()
