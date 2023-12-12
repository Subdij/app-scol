import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiantService.createEtudiants();
    this.etudiants = this.removeDuplicates(this.etudiantService.getEtudiants());
  }

  removeDuplicates(arr: Etudiant[]): Etudiant[] {
    return arr.filter((etudiant, index, self) =>
      index === self.findIndex((e) =>
        e._idCand === etudiant._idCand));
  }
}
