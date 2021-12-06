import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { IViajes } from 'src/app/interfaces/iviajes';
import { Usuarios } from 'src/app/interfaces/Usuarios';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dato:string;
  iusuarios:Usuarios[]=[];
  login: boolean = false;
  automovil:'SI' | 'NO' = null;
  

 
  constructor( private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController,
    public loadingController: LoadingController, private firestore : FirestoreService,
    private auth : AuthService) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    })
    this.auth.stateUser().subscribe(res=>{
      if (res){
        console.log('esta logeado');
        this.login= true;
        this.getDatosUser(res.uid)
      }
      else{
        console.log('no esta logeado');
        this.login= false;
      }
    })
   }
  ngOnInit() {
  }
  agregar(){
    
    let navigationextras: NavigationExtras={
    }
    this.router.navigate(['/agregar'],navigationextras)
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['/home'])
  }

  getDatosUser(uid:string){
    const path = 'usuarios';
    const id = uid;
    this.firestore.getDoc<Usuarios>(path,id).subscribe(res=>{
      console.log('datos ->',res);
      if (res){
        this.automovil = res.auto,
        this.dato = res.Nombre      
      }
    })

  }
  getUsuarios(uid:string){
    const path = 'usuarios';
    const id = uid;
    this.firestore.getCollection<Usuarios>(path).subscribe(res => {
      console.log('esta es la lectura',res);
      this.iusuarios=res;
    });
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
