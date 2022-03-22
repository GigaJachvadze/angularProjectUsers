import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { statusPipe } from '../pipes/statusPipe';
import { FormsModule } from '@angular/forms';
import { CustomUserModalComponent } from './custom-user-modal/custom-user-modal.component';



@NgModule({
  declarations: [
    CustomTableComponent,
    statusPipe,
    CustomUserModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CustomTableComponent,
    CustomUserModalComponent
  ]
})
export class WidgetWrapperModule { }
