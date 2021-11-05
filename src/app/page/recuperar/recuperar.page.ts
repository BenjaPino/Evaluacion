import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
email:EmailValidator;
  constructor(private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController,
    public loadingController: LoadingController,public alertController: AlertController) { }
  salir(){
    if (this.email) {
      this.Salir();
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/home'],navigationextras)
    } else {this.Error()}
    
  }
  ngOnInit() {
  }
  async Salir() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Enviando Correo..',
      duration: 500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async Error() {
    const alert = await this.alertController.create({
      message: 'Correo invalido',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);}

}
