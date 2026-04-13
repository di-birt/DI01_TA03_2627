import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';
import { Elemento } from '../models/elemento.model';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.page.html',
  styleUrls: ['detalle.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonList, IonItem, IonLabel
  ],
})
export class DetallePage implements OnInit {

  // TODO (Apartado 3 – Interpolación): Usar {{ elementoDetalle.nombre }} en el HTML
  elementoDetalle: Elemento | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Recuperar el elemento pasado desde la página anterior mediante el estado de navegación
    // Pista: history.state
    const state = history.state;
    if (state?.elementoHome) {
      this.elementoDetalle = state.elementoHome;
    }
  }
}
