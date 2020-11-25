import {OnInit, Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface UsersData {
  name: string;
  position: number;
  email: string;
  mobile_no: string;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  action:string;
  local_data:any;

  constructor( public dialogRef: MatDialogRef<DialogBoxComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {

    this.local_data = {...data};
    this.action = this.local_data.action;
   }

  ngOnInit() {
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
