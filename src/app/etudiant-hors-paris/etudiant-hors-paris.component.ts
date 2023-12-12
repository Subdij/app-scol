import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { EtudiantService } from '../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrls: ['./etudiant-hors-paris.component.css']
})
export class EtudiantHorsParisComponent implements OnInit {
  etudiantsHorsParis: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiantsHorsParis = this.removeDuplicates(this.etudiantService.getEtudiantsHorsParis());
  }

  removeDuplicates(arr: Etudiant[]): Etudiant[] {
    const uniqueIds = new Set<number>();
    return arr.filter(etudiant => {
      if (uniqueIds.has(etudiant._idCand)) {
        return false;
      }
      uniqueIds.add(etudiant._idCand);
      return true;
    });
  }
}
