import { Component, OnInit } from '@angular/core';
import { TheoryApiService } from '../theory-api/theory-api.service';

@Component({
  selector: 'app-theory-quiz',
  templateUrl: './theory-quiz.component.html',
  styleUrls: ['./theory-quiz.component.css']
})
export class TheoryQuizComponent implements OnInit {

  theoryApi: TheoryApiService;
  notes = ['E', 'F', 'F#',' G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
  chordsNames = ['Minor Triad', 'Major Triad','Augmented Triad', 'Diminished Triad',
  'Seventh','Minor Seventh', 'Major Seventh', 'Diminished Seventh'];
  
  currentChord = null;
  currentNote = null;
  notesInChord = null;

  score = 0;

  constructor(theoryApi:TheoryApiService) {
    this.theoryApi = theoryApi;
  }

  ngOnInit(): void {
    let chordName = this.chordsNames[Math.floor(Math.random() * this.chordsNames.length)];
    let noteName  = this.notes[Math.floor(Math.random() * this.notes.length)];
    this.currentChord = chordName;
    this.currentNote = noteName;
    this.notesInChord = null;
    
    if (noteName.includes('#') ){
      noteName = noteName[0] + 'S';
    }
    let split: number = chordName.indexOf(' ');
    chordName = chordName.toLowerCase();
    //TODO: substr deprecated name = name.substr(0, 0+split) + '_' + name.substr(split+1, length-split+1); albo cos takiego
    chordName = chordName.substr(0, split) + '_' + chordName.substr(split+1);
    console.log(noteName, chordName)
    this.theoryApi.getChord(noteName, chordName).subscribe(data => {
      this.notesInChord = data;
    });
    
  }

  getChord()
  {

    let chordName = this.chordsNames[Math.floor(Math.random() * this.chordsNames.length)];
    let noteName  = this.notes[Math.floor(Math.random() * this.notes.length)];
    this.currentChord = chordName;
    this.currentNote = noteName;
    this.notesInChord = null;
    
    if (noteName.includes('#') ){
      noteName = noteName[0] + 'S';
    }
    let split: number = chordName.indexOf(' ');
    chordName = chordName.toLowerCase();
    chordName = chordName.substr(0, split) + '_' + chordName.substr(split+1);
    console.log(noteName, chordName)
    this.theoryApi.getChord(noteName, chordName).subscribe(data => {
      this.notesInChord = data;
    });
    
  }

  ngPost(form, $event)
  {
    let n = form.note;
    let c = form.chord;
    this.checkAnswer(c, n);
  }

  checkAnswer(chord, note)
  {
    console.log("chord, currChord: ", chord, this.currentChord)
    console.log("note, currNote: ", note, this.currentNote)
    
    if(this.currentChord == chord && this.currentNote == note)
      this.score += 1;
    else 
      this.score = 0;

    console.log("score: ",this.score);
    this.currentChord = null;
    this.currentNote = null;
    this.notesInChord = null;
    this.getChord();
  }

  reset()
  {
    this.currentChord=null;
    this.currentNote=null;
    this.notesInChord=null;
    this.score = 0;
    this.getChord();
  }
}
