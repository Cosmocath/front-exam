import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';
import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'





@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.css']
})
export class DetailPatientComponent implements OnInit {
  
  
  @Input() id!: number;
  @Input() patient!: Patient;
  

  constructor(private route: ActivatedRoute,private router: Router,private patientService: PatientService) {
   
   }

  
   

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getOne(this.id);
    console.log("affichage de l'id")
    console.log(this.id);
    
  }

  private getOne(id:number): void {
    this.patientService.getOne(id).subscribe((patient: Patient)=>{
      this.patient = patient;
      console.log("affichage du patient")
      console.log(this.patient);

    });
  }

}
