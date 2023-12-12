import { Injectable } from '@angular/core';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecService {
  private specialites: Specialite[] = [];

  constructor() {
    this.specialites = [
      new Specialite('Front-end', 1),
      new Specialite('chomeur', 2),
    ];
  }

  getSpecialites(): Specialite[] {
    return this.specialites;
  }

}
