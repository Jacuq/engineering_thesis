from random import randint, choice

from .scales import scales_patterns
from .chords import chords_patterns
from .intervals import intervals_dict

# notes mapped to values used later for calculations
notes_mapping = {'E': 0, 'F': 1, 'F#': 2, 'G': 3, 'G#': 4, 'A': 5, 'A#': 6,
                 'B': 7, 'C': 8, 'C#': 9, 'D': 10, 'D#': 11}


def sound_from_val(val: int) -> str:
    for sound, value in notes_mapping.items():
        if value is val:
            return sound


def find_scale(root: str, scale_name: str) -> list:
    curr_sound = notes_mapping.get(root)
    pattern = scales_patterns.get(scale_name)
    if pattern is None:
        return None
    scale = [root]
    for step in pattern:
        curr_sound += step
        sound = sound_from_val(curr_sound % 12)
        scale.append(sound)
    return scale


def find_chord(root: str, chord_name: str) -> list:
    curr_sound = notes_mapping.get(root)
    pattern = chords_patterns.get(chord_name)
    if pattern is None:
        return None
    chord = [root]
    for step in pattern:
        curr_sound += step
        sound = sound_from_val(curr_sound % 12)
        chord.append(sound)
    return chord


def find_interval(root: str, interval_name: str):
    interval: int = None
    split_point = interval_name.find('_')
    interval_group = interval_name[:split_point]
    interval_type = interval_name[split_point + 1:]

    # find proper dictionary and get or calculate value
    if interval_group == 'augmented':
        if interval_type in intervals_dict['perfect']:
            interval = intervals_dict['perfect'].get(interval_type) + 1
        elif interval_type in intervals_dict['major']:
            interval = intervals_dict['major'].get(interval_type) + 1
    elif interval_group == 'diminished':
        if interval_type in intervals_dict['perfect']:
            interval = intervals_dict['perfect'].get(interval_type) - 1
        elif interval_type in intervals_dict['major']:
            interval = intervals_dict['minor'].get(interval_type) - 1
    elif interval_group == 'minor':
        interval = intervals_dict['minor'].get(interval_type)
    elif interval_group == 'major':
        interval = intervals_dict['major'].get(interval_type)
    elif interval_group == 'perfect':
        interval = intervals_dict['perfect'].get(interval_type)

    # value not found
    if interval is None:
        return None

    # calculate interval position and cast to note
    interval_val = interval + notes_mapping[root]
    return sound_from_val(interval_val % 12)


def get_random(obj_type: str):
    random_note = randint(0, 11)
    root = sound_from_val(random_note)
    if obj_type == 'chord':
        name = choice(list(chords_patterns.keys()))
        obj = find_chord(root, name)
    elif obj_type == 'scale':
        name = choice(list(scales_patterns.keys()))
        obj = find_scale(root, name)
    elif obj_type == 'interval':
        random_dict = choice(list(intervals_dict.keys()))
        random_interval = choice(list(intervals_dict[random_dict]))
        name = f'{random_dict}_{random_interval}'
        obj = find_interval(root, name)
    elif obj_type == 'note':
        name = 'note'
        obj = root
    else:
        return None
    result = {"Type": obj_type, "Root": root, "Name": name, "Value": obj}
    return result
