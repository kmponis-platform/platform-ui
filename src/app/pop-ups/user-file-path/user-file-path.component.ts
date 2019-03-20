import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserFilePath } from 'src/app/manage-files/select-file/select-file.component';

@Component({
  selector: 'app-desktop-url',
  templateUrl: './user-file-path.component.html',
  styleUrls: ['./user-file-path.component.sass']
})
export class UserFilePathComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<UserFilePathComponent>,
    @Inject(MAT_DIALOG_DATA) public userFilePath: UserFilePath) { }

  ngOnInit() { }

  cancel(): void {
    this.matDialogRef.close();
  }

}
