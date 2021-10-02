import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.css']
})
export class DetailPatientComponent implements OnInit {
  id!: number;
  @Input() patient!: Patient;

  constructor(private route: ActivatedRoute, private patientService: PatientService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getOne(this.id);

  }

  private getOne(id: number): void {
    this.patientService.getOne(id).subscribe((patient: Patient)=>{
      this.patient = patient;
     
    });
  }

}
