import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFilePathComponent } from 'src/app/pop-ups/user-file-path/user-file-path.component';
import { FileService } from 'src/app/_services/file.service';

export interface UserFilePath {
  path: string;
}

@Component({
  selector: 'app-centera',
  templateUrl: './select-file.component.html',
  styleUrls: ['./select-file.component.sass']
})
export class SelectFileComponent implements OnInit {
  userFilePath: string;
  fileName: string;
  filePath: string;
  fileBase64: string;

  constructor(private fileService: FileService, public matDialog: MatDialog) { }

  ngOnInit() { 
    console.log("Session UserFilePath: " + this.fileService.getUserFilePath());
    if (!this.fileService.hasUserFilePath()) {
      this.popUpSetUserFilePath();
    }
  }

  fileChangeListener($event: any) : void {
    var file:File = $event.target.files[0];
    this.fileName = file.name;
    
    // var myReader:FileReader = new FileReader();
    // myReader.onloadend = (e) => {
    //   this.fileBase64 = myReader.result as string;
    //   console.log("FileName: " + this.fileName);
    //   console.log("FileBase64: " + this.fileBase64.substring(0,100));
    // }
    // myReader.readAsDataURL(file);
  }
  
  onSubmit(): void {
    this.filePath = "C:\\Users\\" + this.fileService.getUserFilePath() + "\\Desktop\\" + this.fileName;
    console.log("FilePath: " + this.filePath);

    this.fileService.openFile(this.filePath)
      .subscribe((response) => {}, 
        (error) => { this.popUpSetUserFilePath() });
  }

  private popUpSetUserFilePath(): void {
    const dialogRef = this.matDialog.open(
      UserFilePathComponent, {
        width: '400px',
        height: '280px',
        data: { userFilePath: this.userFilePath }
      }
    );

    dialogRef.afterClosed().subscribe(
      result => {
        console.log('Dialog closed: userFilePath = ' + result);
        this.fileService.setUserFilePath(result);
      }
    );
  }
}
