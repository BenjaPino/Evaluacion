import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController) { }
  salir(){
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/home'],navigationextras)
  }
  ngOnInit() {
  }

}
