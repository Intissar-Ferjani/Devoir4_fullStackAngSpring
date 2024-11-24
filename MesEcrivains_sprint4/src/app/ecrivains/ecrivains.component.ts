import { Component, model, OnInit } from '@angular/core';
import { Ecrivain } from '../../model/ecrivain.model';
import { EcrivainService } from '../services/ecrivain.service';

@Component({
  selector: 'app-ecrivains',
  templateUrl: './ecrivains.component.html', 
  styleUrl: './ecrivains.component.css'
})
export class EcrivainsComponent implements OnInit {

  ecrivains : Ecrivain [] = [];

  constructor(private ecrivainService: EcrivainService) {}
  
  
  ngOnInit(): void {
    this.chargerEcrivains();
  }

  chargerEcrivains(){
    this.ecrivainService.listeEcrivains().subscribe(ecrivs => {
      console.log(ecrivs);
      this.ecrivains = ecrivs;
    });
  }

  
}
