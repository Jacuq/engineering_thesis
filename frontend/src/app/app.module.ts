import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheoryApiService } from './theory-api/theory-api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

import { VirtualGuitarComponent } from './virtual-guitar/virtual-guitar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApiRequestSelectorComponent } from './api-request-selector/api-request-selector.component';
import { FormsModule } from '@angular/forms';
import { GuitarPageComponent } from './guitar-page/guitar-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EarTrainingComponent } from './ear-training/ear-training.component';
import { MatSliderModule } from '@angular/material/slider';
import { HomepageComponent } from './homepage/homepage.component';
import { TheoryQuizComponent } from './theory-quiz/theory-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualGuitarComponent,
    PageNotFoundComponent,
    ApiRequestSelectorComponent,
    GuitarPageComponent,
    NavbarComponent,
    EarTrainingComponent,
    HomepageComponent,
    TheoryQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSelectModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [TheoryApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
