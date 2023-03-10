import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(
    private http: HttpClient
  ) { }
  getAll(){
    return this.http.get('http://localhost:8080/api/tareas')
  }

  create(tarea: any){
    return this.http.post('http://localhost:8080/api/tareas', tarea)
  }

  update(id: number, tarea: any){
    return this.http.put('http://localhost:8080/api/tareas/' + id, tarea)
  }
  delete(id: number){
    return this.http.delete('http://localhost:8080/api/tareas/' + id)
  }
}
