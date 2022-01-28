import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-api-request-selector',
  templateUrl: './api-request-selector.component.html',
  styleUrls: ['./api-request-selector.component.css']
})
export class ApiRequestSelectorComponent implements OnInit {
  
  notes = ['E', 'F', 'F#',' G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
  types = ['chord', 'scale', 'interval'];
  scalesNames = ['Natural Minor', 'Natural Major', 'Pentatonic Major', 'Harmonic Minor','Pentatonic Minor', 'Blues',
    'Whole Tone', 'Ionian', 'Dorian','Phrygian', 'Lydian', 'Mixolydian', 'Aeolian'];
  chordsNames = ['Minor Triad', 'Major Triad','Augmented Triad', 'Diminished Triad',
    'Seventh','Minor Seventh', 'Major Seventh', 'Diminished Seventh'];
  req = "default";


  major_intervals = ['Major Second', 'Major Third', 'Major Sixth', 'Major Seventh']
  perfect_intervals = ['Perfect Fourth', 'Perfect Fifth', 'Perfect Eighth']
  minor_intervals = ['Minor Second', 'Minor Third', 'Minor Sixh', 'Minor Seventh']
  augmented_intervals=  ['Augmented Second', 'Augmented Third', 'Augmented Fourth', 'Augmented Fifth', 'Augmented Sixth', 'Augmented Seventh', 'Augmented Eighth']
  diminshed_intervals=  ['Diminished Second', 'Diminished Third', 'Diminished Fourth', 'Diminished Fifth', 'Diminished Sixth', 'Diminished Seventh', 'Diminished Eighth']

  intervalsNames = []

  @Output() requestSelectedEvent = new EventEmitter<Object>();

  constructor() { 

    this.intervalsNames = this.major_intervals.concat(this.minor_intervals).concat(this.perfect_intervals)
                                              .concat(this.augmented_intervals).concat(this.diminshed_intervals);
  }

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
