import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementarComponent } from './incrementar/incrementar.component';
import {FormsModule } from '@angular/forms';
import { GraficarComponent } from './graficar/graficar.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [IncrementarComponent, GraficarComponent],
  exports:[
    IncrementarComponent,
    GraficarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
  ]
})
export class ComponentsModule{ 
 
}
