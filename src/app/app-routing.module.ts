import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospedeComponent } from './hospede/hospede.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
     { path: "hospede", component: HospedeComponent   },
     { path: "reserva" , component: ReservaComponent    },
     { path: ""        , component: HomeComponent      }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
