import { Routes } from '@angular/router';



export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'cadastro',
        loadComponent: () => import("./components/cadastro/cadastro.component").then(m => m.CadastroComponent)
    }

];
