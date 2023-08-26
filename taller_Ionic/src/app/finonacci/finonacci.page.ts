import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-finonacci',
  templateUrl: './finonacci.page.html',
  styleUrls: ['./finonacci.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FinonacciPage implements OnInit {
  inputNumber: number = 0;
  serieFibonacci: number[] = [];
  generarserieFibonacci() {
    this.serieFibonacci = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i < this.inputNumber; i++) {
      this.serieFibonacci.push(a);
      const temp = a;
      a = b;
      b = temp + b;
    }
  }
  constructor(private navCtrl: NavController) {}
  irHome(){
    this.navCtrl.navigateBack('home');
  }
  ngOnInit() {
  }

}
