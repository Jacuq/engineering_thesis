import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {

  soundsType = "acoustic"
  basePath = "../../assets/samples/"
  samplesDirectory = this.basePath + "acoustic/my_samples/";

  constructor() { }


  playNote(guitar_string:string, note:string, volume:number)
  {
    let audio = new Audio();
    //change format, file path can't contain '#' symbol
    if(note.length > 1 && note[1] == '#')
      note = note[0] + 's' + note.substring(2);
    audio.src = this.samplesDirectory + guitar_string + "/" + note + ".wav";
    audio.volume = volume
    audio.load();
    audio.play();
  }

  setType(sample_type:string)
  {
    this.soundsType = sample_type; 
    if(this.soundsType == "acoustic")
    {
      this.samplesDirectory = this.basePath + "acoustic/my_samples/"
    }
    else
      this.samplesDirectory = this.basePath + "bass/my_samples/"
  }
}

