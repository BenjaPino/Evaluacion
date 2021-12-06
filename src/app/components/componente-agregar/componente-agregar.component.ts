import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, IonDatetime, LoadingController, ToastController } from '@ionic/angular';
import { IViajes } from 'src/app/interfaces/iviajes';
import { Usuarios } from 'src/app/interfaces/Usuarios';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-componente-agregar',
  templateUrl: './componente-agregar.component.html',
  styleUrls: ['./componente-agregar.component.scss'],
})
export class ComponenteAgregarComponent implements OnInit {
  iusuarios:Usuarios[]=[];
  constructor(private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController,
    public loadingController: LoadingController,
    private database: FirestoreService,public alertController: AlertController,private auth : AuthService) { }


  
  cancelar(){
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/login'],navigationextras)
  }
    viaje: IViajes = {
    Nombre: '',
    Dia:'',
    Inicio: '',
    Precio: null,
    Final:'',
    ID:''
    
   }


  crearViaje(){
     
    if (this.viaje.Precio>2000 || this.viaje.Nombre==""|| this.viaje.Dia==""|| this.viaje.Inicio==""|| this.viaje.Final=="") {
      this.Error();
      
    } else {
      const id = this.database.getID();
      this.viaje.ID=id;
    this.database.createDoc(this.viaje,'Viajes',id),
    
    this.Agregar();
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/login'],navigationextras)
    }
    
  }
  getUsuarios(){
    this.database.getCollection<Usuarios>('usuarios').subscribe(res => {
      console.log('esta es la lectura',res);
      this.iusuarios=res;
    });
  }
  
  ngOnInit() {
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['/home'])
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
  async Error() {
    const alert = await this.alertController.create({
      header:'TeLlevoAPP',
      message: 'Error al crear usuario, Campos vacios o el precio excedio el limite de 2000',
      buttons: ['OK']
    });

    await alert.present();}

}
