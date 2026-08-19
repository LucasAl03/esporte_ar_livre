import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { CorridaComponent } from './component/corrida-component/corrida-component';
import { ListaCorridas } from './component/lista-corridas/lista-corridas';
import { InscricaoCorrida } from './component/inscricao-corrida/inscricao-corrida';
import { AtletaListaComponent } from './component/lista-atleta/lista-atleta';


export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "cadastrarAtleta",
        component: AtletaComponent
    },
    {
        path: "cadastroCorrida",
        component: CorridaComponent
    },
    {
    path: "cadastroCorrida/:id",
    component: CorridaComponent
    },
    {
        path: "listaCorrida",
        component: ListaCorridas
    },
    {
        path: "inscricaoCorrida",
        component: InscricaoCorrida
    },
    {
        path: "listaAtletas",
        component: AtletaListaComponent
    },
    {
        path: "cadastrarAtleta/:id",
        component: AtletaComponent
    }
];
