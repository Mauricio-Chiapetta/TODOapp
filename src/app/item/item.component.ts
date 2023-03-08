//  • Adiciona a linha do "import" permitindo que o ItemComponent também utilize
// as definições realizadas na classe "Tarefa".
// • Define uma propriedade chamada "emEdicao" que permitirá sinalizar se uma
// Tarefa está em edição ou não.
// • Define uma propriedade chamada "tarefa" que permitirá armazenar a Tarefa
// representada por ItemComponent.

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from "../tarefa";
@Component({
selector: 'app-item',
templateUrl: './item.component.html',
styleUrls: ['./item.component.css']
})
export class ItemComponent {
emEdicao = false;
@Input() tarefa: Tarefa = new Tarefa("", false);
@Output() removeTarefa = new EventEmitter();
}