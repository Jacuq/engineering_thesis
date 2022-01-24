import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs/operators';
import { AudioPlayerService } from '../audio-player/audio-player.service';

@Component({
  selector: 'app-ear-training',
  templateUrl: './ear-training.component.html',
  styleUrls: ['./ear-training.component.css']
})
export class EarTrainingComponent implements OnInit {

  audio;
  notes = ['E', 'F', 'F#',' G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
  lastPlayed = null;
  currentScore = 0;
  constructor(audio: AudioPlayerService) {
    this.audio = audio;
  }

  ngOnInit(): void {
  }

  reset(){
    this.currentScore = 0;
    this.playRandom();
  }

  playRandom(){
    let r = Math.floor(Math.random() * this.notes.length);
    this.audio.playNote('A', this.notes[r], 1);
    this.lastPlayed = this.notes[r];
    console.log("played: ", this.lastPlayed)
  }

  playLast(){
    if(this.lastPlayed == null)
      this.playRandom();
    else
      this.audio.playNote('A', this.lastPlayed, 1);
  }

  ngPost(data, event){
    event.preventDefault();
    console.log(data);
    this.checkAnswer(data.note);
  }

  checkAnswer(data){
    console.log("answer", data, "last:", this.lastPlayed);
    if(data == this.lastPlayed)
    {
      this.currentScore += 1;
    }
    else
    {
      this.currentScore = 0;
    }
    this.lastPlayed = null;
  }
}
