import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
@Component({
  selector: 'app-conjuntos',
  templateUrl: './conjuntos.page.html',
  styleUrls: ['./conjuntos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConjuntosPage implements OnInit {

  setA: number[] = [];
  setB: number[] = [];
  intersection: number[] = [];
  union: number[] = [];
  soloenA: number[] = [];
  soloenB: number[] = [];
  seleccionarOperacion: string = '';

  determinarCaracteristicas(operation: string) {
    if (operation === 'intersection') {
      this.intersection = this.setA.filter(x => this.setB.includes(x));
    } else if (operation === 'union') {
      this.union = Array.from(new Set([...this.setA, ...this.setB]));
    } else if (operation === 'soloenA') {
      this.soloenA = this.setA.filter(x => !this.setB.includes(x));
    } else if (operation === 'soloenB') {
      this.soloenB = this.setB.filter(x => !this.setA.includes(x));
    }
  }

  constructor(private navCtrl: NavController) {}
  irHome(){
    this.navCtrl.navigateBack('home');
  }
  ngOnInit() {
  }
}
