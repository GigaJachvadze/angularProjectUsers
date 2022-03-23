import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { user } from 'src/app/user';

@Component({
  selector: 'app-custom-user-modal',
  templateUrl: './custom-user-modal.component.html',
  styleUrls: ['./custom-user-modal.component.scss']
})
export class CustomUserModalComponent implements OnInit {

  constructor() { }

  @Input() user: user | null = null;
  @Input() userIndex: number | null = null;
  @Output("userEvent") userEventEmmiter = new EventEmitter<{user: user; index: number}>();

  ngOnInit(): void {

    this.user = {...this.user!};

  }

  emit() {
    this.userEventEmmiter.emit({user: this.user!, index: this.userIndex!});
  }

}
