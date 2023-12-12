import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiants: Etudiant[] = []; // Tableau d'étudiants

  constructor() {
    this.createEtudiants();
  }

  createEtudiants(): void {
    this.etudiants.push(
      new Etudiant('CHAABI', 'Ziyad', '4E rue largentier', '12345', 'troyes', 'email1@example.com', 'homme', 20, 1),
      new Etudiant('Rarib', 'Rim', '10 passage thibault de champagne', '54321', 'Meaux', 'email2@example.com', 'femme', 22, 2),
      new Etudiant('baka', 'bakaro', '24 rue bougogne', '56321', 'Paris', 'emadil2@example.com', 'autre', 23, 3),
    );
  }

  getEtudiants(): Etudiant[] {
    return this.etudiants;
  }

  getEtudiantsParis(): Etudiant[] {
    return this.etudiants.filter(etudiant => etudiant._ville.toLowerCase() === 'paris');
  }

  getEtudiantsHorsParis(): Etudiant[] {
    return this.etudiants.filter(etudiant => etudiant._ville.toLowerCase() !== 'paris');
  }

}
