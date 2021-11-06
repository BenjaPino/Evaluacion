import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';
@Component({
  selector: 'app-componente-agregar',
  templateUrl: './componente-agregar.component.html',
  styleUrls: ['./componente-agregar.component.scss'],
})
export class ComponenteAgregarComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController,
    public loadingController: LoadingController,private bdLocal:BdLocalService) { }
  nombre:string;
  dia:string;
  precio:string;  
  
  cancelar(){
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/login'],navigationextras)
  }
  async guardarViajes(){
    
    localStorage.setItem('nombre',this.nombre);
    localStorage.setItem('dia',this.dia);
    localStorage.setItem('precio',this.precio);
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/login'],navigationextras)
  }
  ngOnInit() {
  }
  salir(){
    this.CerrarSesion();
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/home'],navigationextras)
  }
  async CerrarSesion() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cerrando sesion..',
      duration: 300
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async Agregar() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Agregando hora..',
      duration: 300
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
