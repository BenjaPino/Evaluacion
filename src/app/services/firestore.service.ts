import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }



  createDoc(data:any, path:string, id:string){
    const collection = this.firestore.collection(path) ;
    return collection.doc(id).set(data);

  }

  getID(){
    return this.firestore.createId();
  }

  creatDoc(){
    this.firestore.collection('Usuarios')
  }
  getDoc<tipo>(path:string, id: string){
    return this.firestore.collection(path).doc<tipo>(id).valueChanges()
    
  }

  getCollection<tipo>(path:string){
    const collection = this.firestore.collection<tipo>(path);
    return collection.valueChanges();
  }
}
