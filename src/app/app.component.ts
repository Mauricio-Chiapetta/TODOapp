import { Component } from '@angular/core';
import { Tarefa } from './tarefa';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TODOapp';
  arrayDeTarefas: Tarefa[] = [];
  constructor() {
    this.READ_tarefas();
  }
  // Para permitir ao usuário inserir novas tarefas
  CREATE_tarefa(descricaoNovaTarefa: string) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);
    this.arrayDeTarefas.unshift(novaTarefa);
  }
  // Considerando que a lista de Tarefas está armazenada no componente Pai
  // (AppComponent), devemos implementar um método que seja capaz de eliminar uma
  // Tarefa do arrayDeTarefas. Segue o código do método que deve ser adicionado em
  // app.component.ts com esse propósito:
  DELETE_tarefa(tarefaAserRemovida: Tarefa) {
    this.arrayDeTarefas.splice(
      this.arrayDeTarefas.indexOf(tarefaAserRemovida),
      1
    );
  }
  READ_tarefas() {
    this.arrayDeTarefas = [
      new Tarefa('Estudar Frameworks WEB', false),
      new Tarefa('Comer Pizza', false),
      new Tarefa('Ajudar meus pais', false),
    ];
  }
}
