import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRequestSelectorComponent } from './api-request-selector/api-request-selector.component';
import { EarTrainingComponent } from './ear-training/ear-training.component';
import { GuitarPageComponent } from './guitar-page/guitar-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TheoryQuizComponent } from './theory-quiz/theory-quiz.component';
import { VirtualGuitarComponent } from './virtual-guitar/virtual-guitar.component';

const routes: Routes = [
  {path: 'test', component: VirtualGuitarComponent, pathMatch: 'full'},
  {path: 'api', component: ApiRequestSelectorComponent, pathMatch: 'full'},
  {path: 'bass', component: GuitarPageComponent, pathMatch: 'full'},
  {path: 'acoustic', component: GuitarPageComponent, pathMatch: 'full'},
  {path: 'earTraining', component: EarTrainingComponent, pathMatch: 'full'},
  {path: 'practice', component: TheoryQuizComponent, pathMatch: 'full'},
  {path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
