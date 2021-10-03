import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Infirmiere } from 'src/app/shared/models/infirmiere';

@Component({
  selector: 'app-one-infirmiere',
  templateUrl: './one-infirmiere.component.html',
  styleUrls: ['./one-infirmiere.component.css']
})
export class OneInfirmiereComponent implements OnInit {
  @Input() infirmiere!: Infirmiere;
  constructor() { }

  ngOnInit(): void {
  }

}
