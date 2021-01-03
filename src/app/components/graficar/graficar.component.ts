import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label ,Color} from 'ng2-charts';

@Component({
  selector: 'app-graficar',
  templateUrl: './graficar.component.html',
  styles: [
  ]
})
export class GraficarComponent {
  
  //Si no rep res, es mostrara els valor que hi  ha per defecte(a la dreta)
  @Input() title : string = 'Sin titulo';
  
  @Input('labels')  doughnutChartLabels: Label[] = ['Label1 ', 'Lbel 2', 'Label 3'];

  @Input('data')  doughnutChartData: MultiDataSet = [  [33, 33, 33] ];
  
  public doughnutChartType: ChartType = 'doughnut';

  public colors : Color[] = [
    {backgroundColor:['#9E120E','#FF5800','#FFB414']}//Una per cada entrra de de d'alt, fila de la matriu
  ];
}
