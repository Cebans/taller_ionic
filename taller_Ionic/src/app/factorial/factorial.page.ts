import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.page.html',
  styleUrls: ['./factorial.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class factorialPage implements OnInit {
  inputNumber: number = 0;
  resultadoFactorial: number  = 1;
  calcularFactorial() {
    this.resultadoFactorial = 1;
    for (let i = 1; i <= this.inputNumber; i++) {
      this.resultadoFactorial *= i;
    }
  }
  constructor(private navCtrl: NavController) {}
  irHome(){  this.navCtrl.navigateBack('home'); }
  ngOnInit() { }}

