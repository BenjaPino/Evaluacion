import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
dato:string;

  constructor(public toastController: ToastController,private router: Router) {}

  siguiente(){
    let navigationextras: NavigationExtras={
      state:{dato:this.dato}
    }
    this.router.navigate(['/login'],navigationextras)
  }

}

