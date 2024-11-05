import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { Product } from '../../models/prodotto';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css'
})
export class ProdottiVetrinaComponent implements OnInit {
  prodotti: Product[] = [];

  // dependency injection
  //MECCANISMO CHE HA ANGULAR PER DARE A CHi NE HA BISOGNO 
  //LA STESSA ISTANZA DI UN OGGETTO IN MODO TALE CHE SIA 
  //CONDIVISA IN TUTTO IL PROGETTO
  constructor(private prodottiService: ProdottiService) {
    
  } 
  
  ngOnInit(): void {
    this.prodotti = this.prodottiService.getProdotti();    
  }

}
