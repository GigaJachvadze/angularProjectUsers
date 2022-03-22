import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { user } from 'src/app/user';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() headerData : Array<string> | null = null;
  @Input() data : Array<user> | null = null;
  @Input() editable: boolean | null = null;
  @Output("editEvent") editEmmiter = new EventEmitter<number>();

  maxCharactersInName = 10;

  constructor() { }

  ngOnInit(): void {

  }

  emit(index: number) {
    this.editEmmiter?.emit(index);
  }
}
