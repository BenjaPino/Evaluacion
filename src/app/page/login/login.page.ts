import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dato:string;
  constructor( private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController,
    public loadingController: LoadingController) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    })
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
}
