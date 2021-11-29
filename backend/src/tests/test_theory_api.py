import pytest
# from notes_calc import find_scale
from src.notes_calc import find_scale, find_chord, find_interval


# can be used to setup UT env
# @pytest.fixture
# def idk():
#     pass


def test_get_scale():
    resp = find_scale('C', 'natural_major')
    expected = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']
    for n, e in zip(resp, expected):
        assert n == e


def test_get_chord():
    resp = find_chord('D', 'minor_triad')
    expected = ['D', 'F', 'A']
    for n, e in zip(resp, expected):
        assert n == e


def test_get_interval():
    resp = find_interval('A#', 'augmented_fifth')
    expected = 'F#'
    assert expected == resp
