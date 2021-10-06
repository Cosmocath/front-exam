import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-patient',
  templateUrl: './one-patient.component.html',
  styleUrls: ['./one-patient.component.css']
})
export class OnePatientComponent implements OnInit {
  @Input() patient!: Patient;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
