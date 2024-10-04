import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  darkMode = localStorage.getItem("darkModeActivated") == "true";

  constructor() {

  }

  ngOnInit() {
    this.loadDarkMode();
    this.profesor();
  }
  loadDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
  }
  //presion boton darkmode
  toggleDarkMode() {
    this.darkMode = !this.darkMode;


    if (this.darkMode) {
      localStorage.setItem('darkModeActivated', 'true');
      document.body.setAttribute('theme', 'darkMode'); // Asegúrate de que este atributo se establece correctamente
    } else {
      localStorage.setItem('darkModeActivated', 'false');
      document.body.removeAttribute('theme'); // Remueve el atributo en modo claro
    }
    this.loadDarkMode();
  }


  profesor() {
    jQuery("#form-alumno").fadeOut();
    jQuery("#form-profesor").fadeIn();
  }

  alumno() {
    jQuery("#form-profesor").fadeOut();
    jQuery("#form-alumno").fadeIn();
  }

}
