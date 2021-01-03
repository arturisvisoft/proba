import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  
  public labels1: string[] = ['Cause I`m', 'TNT', 'Im dinyamite'];
  public data1  = [
    [350, 450, 100],
  ];
  public labels2: string[] = ['Nachos I`m', 'TNT', 'Im dinyamite'];
  public data2  = [
    [350, 0, 1000],
  ];
  public labels3: string[] = [' Waca', 'Waca', 'Mole'];
  public data3  = [
    [0, 0, 100],
  ];

}
