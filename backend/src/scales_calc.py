from flask import jsonify

sounds_mapping = {'E': 0, 'F': 1, 'F#': 2, 'G': 3, 'G#': 4, 'A': 5, 'A#': 6,
                  'B': 7, 'C': 8, 'C#': 9, 'D': 10, 'D#': 11}

major_natural_pattern = (2, 2, 1, 2, 2, 2, 1)
major_pentatonic_pattern = (2, 2, 3, 2, 3)

# TODO: melodic minor ascending and descending (how to handle?)
minor_natural_pattern = (2, 1, 2, 2, 1, 2, 2)
minor_harmonic_pattern = (2, 1, 2, 2, 1, 3, 1)
minor_pentatonic_pattern = (3, 2, 2, 3, 2)

blues_pattern = (3, 2, 1, 1, 3, 2)
whole_tone_pattern = (2, 2, 2, 2, 2, 2)

# modes
ionian_pattern = major_natural_pattern
dorian_pattern = (2, 1, 2, 2, 2, 1, 2)
phrygian_pattern = (1, 2, 2, 2, 1, 2, 2)
lydian_pattern = (2, 2, 2, 1, 2, 2, 1)
mixolydian_pattern = (2, 2, 1, 2, 2, 1, 2)
aeolian_pattern = (2, 1, 2, 2, 1, 2, 2)
locrian_pattern = (1, 2, 2, 1, 2, 2, 2)


scales_patterns = {'natural_major': minor_natural_pattern, 'natural_minor': minor_natural_pattern,
                   'pentatonic_major': major_pentatonic_pattern, 'harmonic_minor': minor_harmonic_pattern,
                   'pentatonic_minor': minor_pentatonic_pattern, 'blues': blues_pattern,
                   'whole_tone': whole_tone_pattern, 'ionian': ionian_pattern, 'dorian': dorian_pattern,
                   'phrygian': phrygian_pattern, 'lydian': lydian_pattern, 'mixolydian': mixolydian_pattern,
                   'aeolian': aeolian_pattern}

major_triad_pattern = (4, 3)
minor_triad_pattern = (3, 4)
diminished_triad_pattern = (3, 3)
augmented_triad_pattern = (4, 4)

seventh_pattern = (4, 3, 3)
minor_seventh_pattern = (3, 4, 3)
major_seventh_pattern = (4, 3, 4)
diminished_seventh_pattern = (3, 3, 3)
#augmented_seventh_pattern = (3, 3, 4) ? xD

chords_patterns = {'major_triad': major_triad_pattern, 'minor_triad': minor_triad_pattern,
                   'augmented_triad': augmented_triad_pattern, 'diminished_triad': diminished_triad_pattern,
                   'seventh': seventh_pattern, 'minor_seventh': minor_seventh_pattern,
                   'major_seventh': major_seventh_pattern, 'diminished_seventh': diminished_seventh_pattern,
                   }


major_intervals = {'second': 2, 'third': 4, 'sixth': 9, 'seventh': 11}
perfect_intervals = {'fourth': 5, 'fifth': 7, 'eighth': 12}
minor_intervals = {'second': 1, 'third': 3, 'sixth:': 8, 'seventh': 10}


def sound_from_val(val: int) -> str:
    for sound, value in sounds_mapping.items():
        if value is val:
            return sound


def find_scale(root: str, scale_name: str) -> list:
    curr_sound = sounds_mapping.get(root)
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
    curr_sound = sounds_mapping.get(root)
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
    interval_type = interval_name[split_point+1:]

    # find proper dictionary and get or calculate value
    if interval_group == 'augmented':
        if interval_type in perfect_intervals:
            interval = perfect_intervals.get(interval_type) + 1
        elif interval_type in major_intervals:
            interval = major_intervals.get(interval_type) + 1
    elif interval_group == 'diminished':
        if interval_type in perfect_intervals:
            interval = perfect_intervals.get(interval_type) - 1
        elif interval_type in major_intervals:
            interval = minor_intervals.get(interval_type) - 1
    elif interval_group == 'minor':
        interval = minor_intervals.get(interval_type)
    elif interval_group == 'major':
        interval = major_intervals.get(interval_type)
    elif interval_group == 'perfect':
        interval = perfect_intervals.get(interval_type)

    # value not found
    if interval is None:
        return None

    # calculate interval position and cast to note
    interval_val = interval + sounds_mapping[root]
    return sound_from_val(interval_val % 12)
