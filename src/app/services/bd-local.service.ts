import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
'@angular/common/http';
import { IViajes } from '../interfaces/iviajes';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class BdLocalService {
  
  viajes : IViajes[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController:ToastController) {
    this.init();
    this.cargarViajes();
  }
  async cargarViajes() {
     const miViajes= await this.storage.get('viajes');
     if (miViajes){
       this.viajes=miViajes;
     }
     
  }
  guardarViajes(nombre:string,precio:string,dia:Date){
    const existe=this.viajes.find(c=>c.Nombre===nombre);
    if(!existe){
      this.viajes.unshift({Nombre:nombre,Precio:precio,Dia:dia});
      this._storage = this.storage;
      this.presentToast('Viaje agregado con exito')
    }
    else{
      this.presentToast('Error al crear el viaje')

    }

  }
async presentToast(mensaje:string) {

    const toast = await this.toastController.create({

      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 2000
    });

    toast.present();

  }
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }
}
