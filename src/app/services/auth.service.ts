import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuarios } from '../interfaces/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth) { }

  login(usuario:string, password:string){
    return this.authfirebase.signInWithEmailAndPassword(usuario,password)
  }

  logout(){
    this.authfirebase.signOut();
  }
  registrarUser(datos:Usuarios){
    return this.authfirebase.createUserWithEmailAndPassword(datos.email,datos.password)
  }
  
  stateUser(){
     return this.authfirebase.authState
  }
}
