import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MateriasComponent } from './listador/materias/materias.component';


const routes: Routes = [
  {path: 'videos/:videoID', component:MateriasComponent},
  {path: '**', component: AppComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
