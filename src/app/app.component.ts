import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { BackDropService } from './shared/backDrop';
import { user } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor( private dataService: DataService, public backDropService: BackDropService ) { }

  headerData = ["Name", "Gender", "Email", "Status", "Edit"];
  usersData: Array<user> | null = null;
  backDrop = this.backDropService.event$;
  ngOnInit(): void {
    this.dataService.GETDATA();

    this.dataService.$users?.subscribe( data => {
      console.log(data);
      this.usersData = data;
    });
  }

  openUserEditor(index: number) {
    this.backDropService.open();
  }

}
