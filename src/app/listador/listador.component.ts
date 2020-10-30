
import { ProviderAst } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild,AfterViewInit, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {of} from 'rxjs'
import { VideosService } from '../service/videos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listador',
  templateUrl: './listador.component.html',
  styleUrls: ['./listador.component.css']
})

@Injectable({providedIn: 'root'})

export class ListadorComponent implements OnInit {

  public teste: any = {id: 0, titulo: "teste", duracao: "teste"};
  public videos: any;
  public localChecked: any = {};


  constructor(public videosService: VideosService, public router: Router) { }

  public tituloVideo: BehaviorSubject<any> = new BehaviorSubject({});
  ngOnInit() {


       this.videos = this.videosService.getVideos();
     this.localChecked = JSON.parse(window.localStorage.getItem('checked'));
     if(this.localChecked == null){
      window.localStorage.setItem('checked', JSON.stringify(this.teste));
     }


  }


  cursoSelecionado(status, id){
  let aux = {status: status, id: id}
  this.localChecked = JSON.parse(window.localStorage.getItem('checked'));
  if(this.localChecked.id != null){
  if(this.localChecked.id < id && this.localChecked.id != null){
  window.localStorage.setItem('checked', JSON.stringify(aux));
  }
}}

resetar(){
  let aux = {status: false, id: 0}
  if(this.localChecked.id != null){
  window.localStorage.setItem('checked', JSON.stringify(aux));
  location.reload();
  }
}

backAula(){
  this.localChecked = JSON.parse(window.localStorage.getItem('checked'));
  let aux = {status: true, id: this.localChecked.id-1}
  if(this.localChecked.id != null){
  window.localStorage.setItem('checked', JSON.stringify(aux));
  location.reload();
  }
}

}




