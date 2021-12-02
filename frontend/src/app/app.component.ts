import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TheoryApiService } from './theory-api/theory-api.service';
import { Scale } from './theory-api/theory.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  scalesSub: Subscription;
  scale: Scale[] = [];
  constructor(private scalesApi: TheoryApiService){

  }

  ngOnInit() {
    // this.scalesSub = this.scalesApi.getScale().subscribe(
    //   res => {
    //     this.scale = res;
    //     console.log(this.scale)
    //   },
    //   console.error
    // );
  }
  
}
