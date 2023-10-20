import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
@Component({
  selector: 'app-num-primos',
  templateUrl: './num-primos.page.html',
  styleUrls: ['./num-primos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NumPrimosPage implements OnInit {
  numeroIngresado: number = 0; 
  numerosPrimos: number[] = [];

  ngOnInit() {
  }

  calcularPrimos() {
    this.numerosPrimos = [];
    for (let i = 2; i < this.numeroIngresado; i++) {
      if (this.esPrimo(i)) {
        this.numerosPrimos.push(i);
      }
    }
  }

  esPrimo(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }
  constructor(private navCtrl: NavController) {}
  irHome(){
    this.navCtrl.navigateBack('home');
  }
}
