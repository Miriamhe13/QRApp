import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {

  darkMode = false;

  constructor() { }

  ngOnInit() {
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
