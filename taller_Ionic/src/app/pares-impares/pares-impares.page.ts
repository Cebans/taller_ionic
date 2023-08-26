import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
@Component({
  selector: 'app-pares-impares',
  templateUrl: './pares-impares.page.html',
  styleUrls: ['./pares-impares.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ParesImparesPage implements OnInit {
  inputNumber: number = 0;
  esPar: boolean = false;
  esImpar() {this.esPar = this.inputNumber % 2 === 0; }
  constructor(private navCtrl: NavController) {
    this.inputNumber = 0;
    this.esPar = true;
  }
  irHome(){ this.navCtrl.navigateBack('home'); }  ngOnInit() { }}