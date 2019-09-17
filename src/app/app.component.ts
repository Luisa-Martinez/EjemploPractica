
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Bienvenido A Music';
  
  msg:string = '';

  employees = [
    {'canción': 'Eres mi sueño', 'Artista': 'Fonseca', 'Album': 'Ilusion', 'Genero': 'Pop Latino'},
    {'canción': 'i see the victory', 'Artista': 'Elevation','Album': 'i see the victory',  'Genero': 'Rock Gospel'},
    {'canción': 'Principe de paz','Artista': 'Samuel Adrian', 'Album': 'Enpyres', 'Genero': 'Rock Gospel'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteEmployee(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.employees.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editEmployee(i):void {
    
    this.model2.cancion = this.employees[i].canción;
    this.model2.artista = this.employees[i].Artista;
    this.model2.album = this.employees[i].Album;
    this.model2.genero = this.employees[i].Genero;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}
