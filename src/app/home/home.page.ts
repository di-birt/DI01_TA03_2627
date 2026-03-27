import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
  IonList, IonItem, IonLabel, IonButton, IonInput,
  ToastController
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Elemento } from '../models/elemento.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
    IonList, IonItem, IonLabel, IonButton, IonInput,
    FormsModule
  ],
})
export class HomePage {

  // TODO (Apartado 3 – Two-way Binding): Variable enlazada al campo de búsqueda
  busqueda: string = '';

  // TODO (Apartado 1): Añade al menos 5 elementos a este array
  // Puedes cambiar los campos según tu dominio (películas, libros, países, etc.)
  elementos: Elemento[] = [
    { id: 1, nombre: 'Angular', descripcion: 'Framework SPA de Google', categoria: 'Frontend' },
    { id: 2, nombre: 'Ionic', descripcion: 'Framework para apps híbridas', categoria: 'Mobile' },
    { id: 3, nombre: 'TypeScript', descripcion: 'Superset tipado de JavaScript', categoria: 'Lenguaje' },
    { id: 4, nombre: 'Node.js', descripcion: 'Entorno de ejecución de JS en servidor', categoria: 'Backend' },
    { id: 5, nombre: 'Capacitor', descripcion: 'Puente nativo para apps Ionic', categoria: 'Mobile' },
  ];

  // TODO (Apartado 3 – Property Binding): Devuelve true si hay elementos en la lista
  get hayElementos(): boolean {
    return this.elementos.length > 0;
  }

  // TODO (Apartado 3 – Two-way Binding): Filtra los elementos según this.busqueda
  get elementosFiltrados(): Elemento[] {
    // Si el campo de búsqueda está vacío, mostrar todos los elementos
    if (!this.busqueda.trim()) {
      return this.elementos;
    }
    // Filtrar los elementos cuyo nombre incluya el texto de this.busqueda (ignorando mayúsculas/minúsculas)
    return this.elementos.filter(e =>
      e.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  // TODO Modificar el constructor para inyectar Router y ToastController con inject
  private router = inject(Router);
  private toastController = inject(ToastController);
  //Al hacer uso de inject() no es necesario el constructor, pero lo dejo comentado para que veas cómo sería con inyección tradicional
  //constructor(private router: Router, private toastController: ToastController) {}
  constructor() {};

  // TODO (Apartado 2 – Navegación): Navegar a /detalle con el elemento seleccionado
  verDetalle(elementoHome: Elemento): void {
    // Pista: this.router.navigate(['/detalle'], { state: { elemento } });
    this.router.navigate(['/detalle'], { state: { elementoHome } });
  }

  // TODO (Apartado 1 + 3 – Event Binding): Mostrar un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
    // Consulta la teoría: apartado "ion-toast vs ion-alert"
    const toast = await this.toastController.create({
      message: 'Lista de tecnologías cargada correctamente',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
}
