import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css']
})
export class ListePatientsComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
    this.patientService.getAll().subscribe((patients: Patient[]) => {
      this.patients = patients;
    })

  }

}
