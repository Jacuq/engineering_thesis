import pytest
# from notes_calc import find_scale
from src.notes_calc import find_scale, find_chord, find_interval


def test_should_get_scale():
    resp = find_scale('C', 'natural_major')
    expected = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']
    for n, e in zip(resp, expected):
        assert n == e


def test_should_get_chord():
    resp = find_chord('D', 'minor_triad')
    expected = ['D', 'F', 'A']
    for n, e in zip(resp, expected):
        assert n == e


def test_should_get_interval():
    resp = find_interval('A#', 'augmented_fifth')
    expected = 'F#'
    assert expected == resp


@pytest.mark.parametrize("input", [("Z", "augmented_fifth"), ("A#", "incorrect_name"), ("Z", "incorrect_name")])
def test_should_not_get_interval(input):
    resp = find_interval(input[0], input[1])
    assert resp is None

@pytest.mark.parametrize("input", [("Z", "minor_triad"), ("A#", "incorrect_name"), ("Z", "incorrect_name")])
def test_should_not_get_chord(input):
    resp = find_chord(input[0], input[1])
    assert resp is None

@pytest.mark.parametrize("input", [("Z", "natural_minor"), ("A#", "incorrect_name"), ("Z", "incorrect_name")])
def test_should_not_get_scale(input):
    resp = find_scale(input[0], input[1])
    assert resp is None

