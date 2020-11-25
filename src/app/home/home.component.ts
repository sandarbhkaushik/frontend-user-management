import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { UserService } from 'src/services/user.service';

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  mobile_no: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['avatar','name', 'email', 'experience','action'];
  rows = [];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(public dialog: MatDialog, public userService: UserService) { 
    this.getAllUser();
  }

  ngOnInit() {
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '300px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(result.event == 'Add'){
          this.addRowData(result.data);
        }else if(result.event == 'Delete'){
          this.deleteRowData(result.data);
        }
      }
     
    });
  }

  addRowData(row_obj){
    // this.rows.push({
    //   name: row_obj.name,
    //   position:  this.rows.length + 1,
    //   email:  row_obj.email,
    //   mobile_no:  row_obj.mobile_no
    // });
    this.table.renderRows();
    
  }
 
  deleteRowData(row_obj){
    // this.rows = this.rows.filter((value,key)=>{
    //   return value.position != row_obj.position;
    // });
  }

  // getAllUser(){
  //     this.userService.getAllUsers().subscribe({ data => {
  //       this.rows= data;
  //     });
  // }

  getAllUser(){
    // this.userService.getAllUsers().subscribe({
    // data => {

    //   this.rows= data;
    // },
    //  });
    }

}
