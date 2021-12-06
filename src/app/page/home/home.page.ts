import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AnimationController, LoadingController, ToastController } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Usuarios } from 'src/app/interfaces/Usuarios';
import { NullTemplateVisitor } from '@angular/compiler';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
   credenciales = {
     correo:null,
     password:null
   }
  constructor( private activeRoute: ActivatedRoute,public toastController: 
    ToastController,private router: Router, private animationCtrl: AnimationController,
    public loadingController: LoadingController,public alertController: AlertController, 
    private database: FirestoreService, private auth: AuthService) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state)
        this.credenciales.correo=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.credenciales.correo)
      }
    )}
    
    
   crearUsuario(){
     
    this.router.navigate(['/registrarusuario'])
   }

   async login(){
     console.log('credenciales', this.credenciales);
     const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(error =>{
       console.log('error');
       this.Error();
     })
     if (res){
       console.log('res ->',res);
       let navigationextras: NavigationExtras={
        state:{dato:this.credenciales.correo} 
      }
      this.router.navigate(['/login'],navigationextras)
       

     }
   }

  recuperar(){
    this.Recuperar();
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/recuperar'],navigationextras)
  }
  ngOnInit() {
  }
  async IniciarSesion() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Iniciando sesion..',
      duration: 300
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async Recuperar() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando..',
      duration: 300
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async Error() {
    const alert = await this.alertController.create({
      header:'TeLlevoAPP',
      message: 'Usuario o contrase;a incorrectos',
      buttons: ['OK']
    });

    await alert.present();}
  
}

