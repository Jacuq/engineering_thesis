import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-api-request-selector',
  templateUrl: './api-request-selector.component.html',
  styleUrls: ['./api-request-selector.component.css']
})
export class ApiRequestSelectorComponent implements OnInit {
  
  notes = ['E', 'F', 'F#',' G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
  types = ['chord', 'scale', 'interval'];
  scalesNames = ['Natural Minor', 'Natural Major'];
  chordsNames = ['Minor Triad', 'Major Triad'];
  intervalsNames = ['Perfect Fourth', 'Augmented Fifth'];
  req = "default";

  @Output() requestSelectedEvent = new EventEmitter<Object>();

  constructor() { }

  ngOnInit(): void {
  }
  
  onReqChange(event) {
    this.req = event.value;
  }

  ngPost(data, event){
    event.preventDefault();
    console.log(data);
    this.requestSelectedEvent.emit(data);
  }
}
