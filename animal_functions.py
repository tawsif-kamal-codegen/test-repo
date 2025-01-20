def make_animal_sound(animal):
    sounds = {
        'cat': 'meow',
        'dog': 'woof',
        'cow': 'moo',
        'duck': 'quack'
    }
    return sounds.get(animal.lower(), 'unknown sound')

def get_animal_legs(animal):
    legs = {
        'cat': 4,
        'dog': 4,
        'duck': 2,
        'spider': 8
    }
    return legs.get(animal.lower(), 0)

def describe_animal(animal):
    sound = make_animal_sound(animal)
    legs = get_animal_legs(animal)
    return f"A {animal} makes '{sound}' and has {legs} legs!"
