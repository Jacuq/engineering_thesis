import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {

  soundsType = "acoustic"
  basePath = "../../assets/samples/"
  samplesDirectory;

  constructor() { }


  playNote(string:string, note:string, volume:number)
  {
    let audio = new Audio();
    if(note.length > 1 && note[1] == '#')
      note = note[0] + 's' + note.substring(2);
    audio.src = this.samplesDirectory + string + "/" + note + ".wav";
    audio.volume = volume
    audio.load();
    audio.play();
    return true;
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

