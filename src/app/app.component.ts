import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from './services/data.service';
import { BackDropService } from './shared/backDrop';
import { user } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor( private dataService: DataService, private backDropService: BackDropService, private toastr: ToastrService, private ref: ChangeDetectorRef ) { }

  headerData = ["Name", "Gender", "Email", "Status", "Edit"];
  usersData: Array<user> | null = null;
  chosenUserIndex: number | null = null;
  backDrop = this.backDropService.event$;

  title = "angularProject"

  ngOnInit(): void {
    this.dataService.GETDATA();

    this.dataService.$users?.subscribe( data => {
      console.log(data);
      this.usersData = [...data];
    });
  }

  openUserEditor(index: number):void {
    this.chosenUserIndex = index;
    this.backDropService.open();
  }

  closeUserEditor(): void {
    this.backDropService.close();
  }

  updateUser(item: {user: user; index: number}): void {
    this.usersData![item.index] = item.user;
    console.log(this.usersData)
    this.toastr.success("User updated successfully", "Successfully", {
      timeOut: 2000,
      progressBar: true
    })
    this.closeUserEditor();
    this.ref.detectChanges();
  }

}
