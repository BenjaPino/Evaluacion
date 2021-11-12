import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
})
export class NotfoundPage implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController,
    public loadingController: LoadingController) { }

  ngOnInit() {
  }
Volver(){
  this.router.navigate(['/login'])
}
}
