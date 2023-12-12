import { Component, OnInit } from '@angular/core';
import { Specialite } from '../../models/specialite';
import { SpecService } from '../../services/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {
  specialites: Specialite[] = [];

  constructor(private specService: SpecService) { }

  ngOnInit() {
    this.specialites = this.specService.getSpecialites();
  }
}
