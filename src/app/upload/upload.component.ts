import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {

  title: string

  icon: string

  rightContent: string = 'hello'

  constructor() { 
    this.title = "hell world";
  }

  ngOnInit() {
    
  }

  onLeftClick() {
    this.rightContent = 'world'
  }
}
