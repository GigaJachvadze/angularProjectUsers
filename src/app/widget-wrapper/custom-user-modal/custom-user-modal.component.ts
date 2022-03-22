import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-user-modal',
  templateUrl: './custom-user-modal.component.html',
  styleUrls: ['./custom-user-modal.component.scss']
})
export class CustomUserModalComponent implements OnInit {

  constructor() { }

  @Input()

  ngOnInit(): void {
  }

}
