import { ListadorComponent } from './listador.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriasComponent } from './materias/materias.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { VideosService } from '../service/videos.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
  MateriasComponent, ListadorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatProgressBarModule

  ],
  exports: [
    ListadorComponent,
  ],
  providers: [],
  bootstrap: []
})
export class ListadorModule { }
