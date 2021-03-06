import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-commentdialog',
  templateUrl: './commentdialog.component.html',
  styleUrls: ['./commentdialog.component.css']
})
export class CommentdialogComponent implements OnInit {

  moviecomments: string;
  constructor(public dialogRef: MatDialogRef<CommentdialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.moviecomments = data.obj.comments;
  }
  ngOnInit() {
  }

  onCancel()
  {
    this.dialogRef.close();
  }

}

