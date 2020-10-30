import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriasComponent } from './listador/materias/materias.component';


const routes: Routes = [
  {path: 'videos/:videoID', component:MateriasComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
