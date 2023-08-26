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
  inputNumber: number = 0;
  esPrimo: boolean = false;
  revisarPrimo() {
    if (this.inputNumber <= 1) {
      this.esPrimo = false;
      return;
    }
    this.esPrimo = true;
    for (let i = 2; i <= Math.sqrt(this.inputNumber); i++) {
      if (this.inputNumber % i === 0) {
        this.esPrimo = false;
        break;
      }
    }
  }
  constructor(private navCtrl: NavController) {}
  irHome(){
    this.navCtrl.navigateBack('home');
  }
  ngOnInit() {
  }
}