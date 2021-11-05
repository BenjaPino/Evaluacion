import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController,
    public loadingController: LoadingController) { }
  cancelar(){
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/login'],navigationextras)
  }
  agregar(){
    this.Agregar();
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
