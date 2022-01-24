import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { map } from 'rxjs/operators';

import { ApiRequestSelectorComponent } from '../api-request-selector/api-request-selector.component';
import { AudioPlayerService } from '../audio-player/audio-player.service';

@Component({
  selector: 'app-virtual-guitar',
  templateUrl: './virtual-guitar.component.html',
  styleUrls: ['./virtual-guitar.component.css']
})

export class VirtualGuitarComponent implements OnInit {
    
  buttons;

  stringsCount;
  strings;

  audio;

  notes = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
  values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  notesMap;
  reveresedNotesMap;
  stringsMap;
  stringsArr;


  @Input() currentScale = null;
  @Input() currentChord = null;
  @Input() currentInterval = null;
  @Input() guitarType:string = null;
  @Input() currentVolume:number = null;

  constructor(audio: AudioPlayerService) {
    this.audio = audio;
   }

  ngOnInit(): void {
    this.notesMap = new Map();
    this.reveresedNotesMap = new Map();
    for(let i=0; i < this.notes.length; i++)
    {
      this.notesMap.set(this.notes[i], this.values[i]);
      this.notesMap.set(this.values[i], this.notes[i]);
    }

    //load from cfg or pass to constructor?
    if(this.guitarType == "acoustic")
    {
      this.stringsCount = 6;
      this.stringsArr = new Array(6);
      this.strings = [0, 7, 3, 10, 5, 0]
    }
    else
    {
      this.stringsCount = 4;
      this.stringsArr = new Array(4);
      this.strings = [3, 10, 5, 0];
    }
    this.audio.setType(this.guitarType);
    for(let i=0; i<this.stringsCount; ++i)
    {
      this.stringsArr[i] = new Array(12);
      for(let j=0; j<this.notes.length + 2; ++j)
      {
        
        this.stringsArr[i][j] = this.notes[(this.strings[i] + j) % 12];
      }
    }
  }

  onClick(string, note, fret){
    //play sound
    let stringName = string[0];
    console.log("string:", stringName, " note:", note, "fret:", fret);
    if(fret>11)
      note = note + "_H"
    this.audio.playNote(stringName, note, this.currentVolume);
  }


  ngOnChanges(changes: SimpleChanges){
    console.log("---CHANGES---");
    console.log("current scale: ", this.currentScale)
    console.log("current interval: ", this.currentInterval)
    console.log("current chord:", this.currentChord);
  }

}
