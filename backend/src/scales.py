
# major scales
major_natural_pattern = (2, 2, 1, 2, 2, 2, 1)
major_pentatonic_pattern = (2, 2, 3, 2, 3)

# minor scales
# TODO: melodic minor ascending and descending (how to handle?)
minor_natural_pattern = (2, 1, 2, 2, 1, 2, 2)
minor_harmonic_pattern = (2, 1, 2, 2, 1, 3, 1)
minor_pentatonic_pattern = (3, 2, 2, 3, 2)

# common scales
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


# map scale names (later used in requests) to appropriate patterns
scales_patterns = {'natural_major': major_natural_pattern, 'natural_minor': minor_natural_pattern,
                   'pentatonic_major': major_pentatonic_pattern, 'harmonic_minor': minor_harmonic_pattern,
                   'pentatonic_minor': minor_pentatonic_pattern, 'blues': blues_pattern,
                   'whole_tone': whole_tone_pattern, 'ionian': ionian_pattern, 'dorian': dorian_pattern,
                   'phrygian': phrygian_pattern, 'lydian': lydian_pattern, 'mixolydian': mixolydian_pattern,
                   'aeolian': aeolian_pattern}