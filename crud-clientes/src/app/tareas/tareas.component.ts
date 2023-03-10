import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas: any[] = [];
  constructor(
    private tareaService: TareasService
  ){}
  ngOnInit(): void {
    this.tareaService.getAll()
    .subscribe((tareas: any) => {
      console.log('tarea', tareas);
      this.tareas = tareas._embedded.tareas;
    })
    throw new Error('Method not implemented.');
  }
}
