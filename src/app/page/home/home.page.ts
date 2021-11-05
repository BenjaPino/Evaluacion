import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AnimationController, LoadingController, ToastController } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
dato:string;
password:string;
token = 'dsa324asdg45';
  constructor( private activeRoute: ActivatedRoute,public toastController: 
    ToastController,private router: Router, private animationCtrl: AnimationController,public loadingController: LoadingController,public alertController: AlertController) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state)
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    )}
   
   async siguiente(){
     if(this.password.length>=5 && this.dato!="" ){
       localStorage.setItem('token',this.token)
    this.IniciarSesion();
    let navigationextras: NavigationExtras={
      state:{dato:this.dato}
    }
    this.router.navigate(['/login'],navigationextras) }
    else{this.Error();}
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
      message: 'Campo nombre vacío y/o contraseña menor a 5 caracteres',
      buttons: ['OK']
    });

    await alert.present();}
  
}

