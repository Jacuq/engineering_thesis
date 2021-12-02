import { Component, Injectable, OnInit } from '@angular/core';
import { ApiRequestSelectorComponent } from '../api-request-selector/api-request-selector.component';
import { TheoryApiService } from '../theory-api/theory-api.service';
import { VirtualGuitarComponent } from '../virtual-guitar/virtual-guitar.component';


@Component({
  selector: 'app-guitar-page',
  templateUrl: './guitar-page.component.html',
  styleUrls: ['./guitar-page.component.css']
})
export class GuitarPageComponent implements OnInit {

  virtGuitar;
  apiRequestSelector;
  theoryApi;
  
  currentScale = null;
  currentInterval = null;
  currentChord = null;

  //guitar: VirtualGuitarComponent,
  //selector: ApiRequestSelectorComponent 
  constructor(api: TheoryApiService) { 
    this.theoryApi = api;
  }

  ngOnInit(): void {
  }

  requestSelected(event){
    console.log("parent: ", event);
    let rootNote : string = event.note;
    if (rootNote.includes('#') ){
      rootNote = rootNote[0] + 'S';
    }
    //type (scale, chord, interval)
    let requestType = event.req;
    //name (with space isntead of _)
    let name: string = event.req_name;
    let split: number = name.indexOf(' ');
    name = name.toLowerCase();
    name = name.substr(0, split) + '_' + name.substr(split+1);

    let result;
    switch(requestType){
      case "scale":
        result = this.theoryApi.getScale(rootNote, name);
        this.currentInterval = null;
        this.currentChord = null;
        result.subscribe(
          res => {
            this.currentScale = res;
          },
          console.error
        );
        break;
      case "chord":
        this.currentInterval = null;
        this.currentScale = null;
        result = this.theoryApi.getChord(rootNote, name);
        result.subscribe(
          res => {
            this.currentChord = res;
          },
          console.error
        );
        break;
      case "interval":
        result = this.theoryApi.getInterval(rootNote, name);
        this.currentChord = null;
        this.currentScale = null;
        
        result.subscribe(
          res => {
            this.currentInterval = new Array(2);
            this.currentInterval[1] = event.note; 
            this.currentInterval[0] = res;
          },
          console.error
        );
        break;
    }


    
  }

}
