import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  formulaire: FormGroup;

  constructor(private fb: FormBuilder, private postService: PatientService) {
    this.formulaire = this.fb.group({
      nom: new FormControl(),
      prenom: new FormControl(),
      dateDeNaissance:new FormControl(),
      numeroSecuriteSociale: new FormControl

   })

  }

  ngOnInit(): void {}

  addOne():void{
      this.postService.addOne(this.formulaire.value).subscribe((newPatient: Patient) => {
        console.log(newPatient);
        this.formulaire.reset();
      });
    
    console.log(this.formulaire);
  }
  }


