import { Component, OnInit } from '@angular/core';
import { Infirmiere } from 'src/app/shared/models/infirmiere';
import { InfirmiereService } from 'src/app/shared/services/infirmiere.service';

@Component({
  selector: 'app-liste-infirmieres',
  templateUrl: './liste-infirmieres.component.html',
  styleUrls: ['./liste-infirmieres.component.css']
})
export class ListeInfirmieresComponent implements OnInit {
  infirmieres: Infirmiere[] = [];

  constructor(private infirmiereService : InfirmiereService) { }

  ngOnInit(): void {
    this.infirmiereService.getAll().subscribe((infirmieres: Infirmiere[]) => {
      this.infirmieres = infirmieres;
    })


}}
