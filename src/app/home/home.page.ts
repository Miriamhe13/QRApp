import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  darkMode = false;
  textoQr = "prueba2024";

  constructor() {

  }

  toggleDarkMode(){
    this.darkMode = !this.darkMode;

    document.body.classList.toggle('dark', this.darkMode);

    if(this.darkMode){
      localStorage.setItem('darkModeActivated','true');
      console.log('true');
    }else{
      localStorage.setItem('darkModeActivated','false');
      console.log('false');
    }
  }

}
