import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { VideosService } from 'src/app/service/videos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ListadorComponent } from '../listador.component'


@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})


export class MateriasComponent implements OnInit {

  public videoo: ElementRef;



  public existeVideo: boolean = false;
  public video: any;
  public oldVideo: any;
  public url: any;
 public html: any
 public localChecked: any;
      public progress: any = 0;

  constructor(private elRef: ElementRef,
    private ref: ChangeDetectorRef,
    public router: Router,
    public sanitizer: DomSanitizer,
    public videos: VideosService,
    public activatedRoute: ActivatedRoute,
    public listador: ListadorComponent) { }


  ngDoCheck(){

    this.localChecked = JSON.parse(window.localStorage.getItem('checked'));
    if(this.localChecked = null){

       this.router.navigateByUrl("/")
    }

    this.localChecked = JSON.parse(window.localStorage.getItem('checked'));

    if(this.localChecked.id > 0){
      let teste = (this.localChecked.id + 1) / this.videos.getTamanho();
      teste = teste*100
      this.progress = teste;

    }

    const videoID = this.activatedRoute.snapshot.params.videoID
    this.videos.getOneVideo(videoID).subscribe(res => {
      this.video = res;
      this.elRef.nativeElement.querySelector('#videoo').load();
      this.html = this.sanitizer.bypassSecurityTrustHtml('<video preload="auto" controls="ok" ended="vidEnded()" width="100%"  preload="preload" class="videoBlock"  ><source src='+res.link+' class="okok" type="video/mp4"></video>')
    })
  }

  vidEnded(){
    let videoID = this.activatedRoute.snapshot.params.videoID
    console.log(videoID)
    this.listador.cursoSelecionado(true, videoID++)
    this.router.navigateByUrl("/videos/"+ videoID++)
  }

  ngOnInit() {



  }





}
