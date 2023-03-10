import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas: any[] = [];
  formulario: FormGroup = this.fb.group({
    nombre: [],
    completado: [false]
  })
  tareaEnEdicion: any
  constructor(
    private tareaService: TareasService,
    private fb: FormBuilder
  ){}
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.tareaService.getAll()
    .subscribe((tareas: any) => {
      console.log('tarea', tareas);
      this.tareas = tareas._embedded.tareas;
    })
  }

  save(){
    const values = this.formulario.value;
    let request
    console.log('values', values);
    if(this.tareaEnEdicion){
      request = this.tareaService.update(this.tareaEnEdicion._links.self.href, values)
    
    } else{
      request = this.tareaService.create(values)
    }
    request
    .subscribe({
      next: () => {
        this.getAll();
        this.tareaEnEdicion = null
        this.formulario.setValue({
          nombre: '',
          completado: false
        })
      },
      error: () => {

      }
    })
  }

  edit(tarea: any){
    this.tareaEnEdicion = tarea
    this.formulario.setValue({
      nombre: tarea.nombre,
      completado: tarea.completado
    })
  }

  delete(tarea: any){
    const ok = confirm('¿Esta Seguro de eliminar esta tarea?')
    if(ok){
      this.tareaService.delete(tarea._links.self.href)
    .subscribe(() => {
      this.getAll()
    })
    }
  }
}
