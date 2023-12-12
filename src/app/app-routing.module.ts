import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpecialiteComponent } from './components/specialite/specialite.component'; 
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { EtudiantParisComponent } from './etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './etudiant-hors-paris/etudiant-hors-paris.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'specialite', component: SpecialiteComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'etudiant-paris', component: EtudiantParisComponent },
  { path: 'etudiant-hors-paris', component: EtudiantHorsParisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
