import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Infirmiere } from 'src/app/shared/models/infirmiere';
import { InfirmiereService } from 'src/app/shared/services/infirmiere.service';

@Component({
  selector: 'app-detail-infirmiere',
  templateUrl: './detail-infirmiere.component.html',
  styleUrls: ['./detail-infirmiere.component.css']
})
export class DetailInfirmiereComponent implements OnInit {
  @Input() id!: number;
  @Input() infirmiere!: Infirmiere;

  constructor(private route: ActivatedRoute,private infirmiereService: InfirmiereService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getOne(this.id);
    console.log("affichage de l'id")
    console.log(this.id);
  }

  private getOne(id:number): void {
    this.infirmiereService.getOne(id).subscribe((infirmiere: Infirmiere)=>{
      this.infirmiere = infirmiere;
      console.log("affichage du patient")
      console.log(this.infirmiere);

    });
  }
}
