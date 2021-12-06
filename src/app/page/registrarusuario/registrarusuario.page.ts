import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuarios } from 'src/app/interfaces/Usuarios';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.page.html',
  styleUrls: ['./registrarusuario.page.scss'],
})
export class RegistrarusuarioPage implements OnInit {

  constructor(private router: Router, private auth:AuthService, private firestore: FirestoreService
    ,public alertController: AlertController ) { }
  datos:Usuarios={
    Nombre:null,
    email:null,
    password:null,
    ID:null,
    auto: null,
  }

  ngOnInit() {
  }
  async registrar(){
    console.log('datos', this.datos)
    const res = await this.auth.registrarUser(this.datos).catch(res =>{
      console.log('error');
      this.Error();
    })
    if (res) {
      console.log('usuario creado con exito');
      const path = 'usuarios';
      const id = res.user.uid;
      this.datos.ID=id;
      this.datos.password=null;
      await this.firestore.createDoc(this.datos,path,id)
      this.router.navigate(['/login'])

    }
  }


  iniciarsesion(){
    this.router.navigate(['/login'])
  }
  async Error() {
    const alert = await this.alertController.create({
      header:'TeLlevoAPP',
      message: 'Datos incorrectos',
      buttons: ['OK']
    });

    await alert.present();}
    
  

}
