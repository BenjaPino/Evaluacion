import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController,
    public loadingController: LoadingController) { }
  salir(){
    this.Salir();
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/home'],navigationextras)
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

}
