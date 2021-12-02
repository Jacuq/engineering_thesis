import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { map } from 'rxjs/operators';

import { ApiRequestSelectorComponent } from '../api-request-selector/api-request-selector.component';

@Component({
  selector: 'app-virtual-guitar',
  templateUrl: './virtual-guitar.component.html',
  styleUrls: ['./virtual-guitar.component.css']
})

export class VirtualGuitarComponent implements OnInit {
    
  buttons;

  stringsCount;
  strings;

  notes = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
  values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  notesMap;
  reveresedNotesMap;
  stringsMap;
  stringsArr;


  @Input() currentScale = null;
  @Input() currentChord = null;
  @Input() currentInterval = null;

  constructor() { }

  ngOnInit(): void {
    this.notesMap = new Map();
    this.reveresedNotesMap = new Map();
    for(let i=0; i < this.notes.length; i++)
    {
      this.notesMap.set(this.notes[i], this.values[i]);
      this.notesMap.set(this.values[i], this.notes[i]);
    }

    //load from cfg or pass to constructor? 
    this.stringsCount = 4;
    this.stringsArr = new Array(4);
    this.strings = [0, 5, 10, 3];
    for(let i=0; i<this.stringsCount; ++i)
    {
      this.stringsArr[i] = new Array(12);
      for(let j=0; j<this.notes.length + 2; ++j)
      {
        
        this.stringsArr[i][j] = this.notes[(this.strings[i] + j) % 12];
      }
    }
  }

  onClick(string, note){
    //play sound
    let stringName = string[0];
    console.log("string:", stringName, " note:", note);

  }


  ngOnChanges(changes: SimpleChanges){
    console.log("---CHANGES---");
    console.log("current scale: ", this.currentScale)
    console.log("current interval: ", this.currentInterval)
    console.log("current chord:", this.currentChord);
  }

}
