import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1 = '';
  num2 = '';
  resultado: number = 0;
  operacion: string = 'suma'; // Inicializamos la operación en 'suma'

  calcular() {
    const n1 = parseInt(this.num1);
    const n2 = parseInt(this.num2);

    switch (this.operacion) {
      case 'suma':
        this.resultado = n1 + n2;
        break;
      case 'resta':
        this.resultado = n1 - n2;
        break;
      case 'multiplicacion':
        this.resultado = n1 * n2;
        break;
      case 'division':
        if (n2 !== 0) {
          this.resultado = n1 / n2;
        } else {
        
          this.resultado = NaN;
        }
        break;
      default:
        this.resultado = 0; 
    }
  }
}


