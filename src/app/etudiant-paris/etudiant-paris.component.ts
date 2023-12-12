import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { EtudiantService } from '../services/etudiant-service.service'; 

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrls: ['./etudiant-paris.component.css']
})
export class EtudiantParisComponent implements OnInit {
  etudiantsParis: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiantsParis = this.removeDuplicates(this.etudiantService.getEtudiantsParis());
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
