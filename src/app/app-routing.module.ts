import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
const routes: Routes = [
  {path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' },
  {
    path: 'login', canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)  },
  {
    path: 'recuperar',
    loadChildren: () => import('./page/recuperar/recuperar.module').then( m => m.RecuperarPageModule) },
  {
    path: 'agregar',canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./page/agregar/agregar.module').then( m => m.AgregarPageModule) },
  {
    path: 'registrarusuario',
    loadChildren: () => import('./page/registrarusuario/registrarusuario.module').then( m => m.RegistrarusuarioPageModule) },
  {
    path: '**',
    loadChildren: () => import('./page/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },   
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
