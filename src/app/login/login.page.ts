import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dato:string;
  constructor( private activeRoute: ActivatedRoute,private router: Router) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    })
   }
   siguiente(){
    let navigationextras: NavigationExtras={
      state:{dato:this.dato}
    }
    this.router.navigate(['/home'],navigationextras)
  }
  ngOnInit() {
  }

}
