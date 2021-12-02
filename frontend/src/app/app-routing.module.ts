import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRequestSelectorComponent } from './api-request-selector/api-request-selector.component';
import { GuitarPageComponent } from './guitar-page/guitar-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VirtualGuitarComponent } from './virtual-guitar/virtual-guitar.component';

const routes: Routes = [
  {path: 'test', component: VirtualGuitarComponent, pathMatch: 'full'},
  {path: 'api', component: ApiRequestSelectorComponent, pathMatch: 'full'},
  {path: 'bass', component: GuitarPageComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
