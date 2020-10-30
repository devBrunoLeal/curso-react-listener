import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideosService } from './service/videos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendario-facul';

  constructor(public router: Router, public videos: VideosService){

  }


  ngOnInit(){

      let link = location.href


}
