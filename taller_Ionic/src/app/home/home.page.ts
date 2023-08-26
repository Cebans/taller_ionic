import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private router:Router) {}

  irFinonacci() {
    this.router.navigateByUrl('finonacci');
  }
  irfactorial() {
    this.router.navigateByUrl('factorial');
  }
  irnumerosprimos() {
    this.router.navigateByUrl('num-primos');
  }
  irparesimpares() {
    this.router.navigateByUrl('pares-impares');
  }
  irConjuntos() {
    this.router.navigateByUrl('conjuntos');
  }

}