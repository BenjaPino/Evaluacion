import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';
@Component({
  selector: 'app-componente-reservar',
  templateUrl: './componente-reservar.component.html',
  styleUrls: ['./componente-reservar.component.scss'],
})
export class ComponenteReservarComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController,
    public loadingController: LoadingController,private bdLocal:BdLocalService) { }
    ionViewWillEnter(){
      this.getViajes();
    }
  ngOnInit() {}
  siguiente(){
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Gracias por reservar un viaje, el viaje sera a las 17:00 Hrs con un coste de $1000.',
      duration: 2300,
      position: 'middle'
    });
    toast.present();
  }
  salir(){
    this.CerrarSesion();
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/home'],navigationextras)
  }
  programarhora(){
    this.Programarhora();
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/agregar'],navigationextras)
  }
  getViajes(){
    this.bdLocal.cargarViajes();
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
  async Programarhora() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando..',
      duration: 300
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
