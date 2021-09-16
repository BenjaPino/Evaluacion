import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AnimationController, ToastController } from '@ionic/angular';
import { Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
dato:string;

  constructor( private activeRoute: ActivatedRoute,public toastController: 
    ToastController,private router: Router, private animationCtrl: AnimationController) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state)
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    )}
   
   siguiente(){
    let navigationextras: NavigationExtras={
      state:{dato:this.dato}
    }
    this.router.navigate(['/login'],navigationextras)
  }
  ngOnInit() {
  }

}

