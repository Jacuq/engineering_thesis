import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScalesApiService } from './scales/scales-api.service';
import { Scale } from './scales/scales.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  scalesSub: Subscription;
  scale: Scale[] = [];
  constructor(private scalesApi: ScalesApiService){

  }

  ngOnInit() {
    this.scalesSub = this.scalesApi.getScale().subscribe(
      res => {
        this.scale = res;
        console.log(this.scale)
      },
      console.error
    );
  }
  
}
