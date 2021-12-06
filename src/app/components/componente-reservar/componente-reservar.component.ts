import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { IViajes} from 'src/app/interfaces/iviajes'
import { FirestoreService } from 'src/app/services/firestore.service';
@Component({
  selector: 'app-componente-reservar',
  templateUrl: './componente-reservar.component.html',
  styleUrls: ['./componente-reservar.component.scss'],
})
export class ComponenteReservarComponent implements OnInit {
  iviajes:IViajes[]=[];
  constructor(private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController,
    public loadingController: LoadingController, private database: FirestoreService) { }
    
  ngOnInit() {
    this.getViajes();
  }

  getViajes(){
    this.database.getCollection<IViajes>('Viajes').subscribe(res => {
      console.log('esta es la lectura',res);
      this.iviajes=res;
    });
  }


  siguiente(){
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'El viaje se ha reservado',
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
