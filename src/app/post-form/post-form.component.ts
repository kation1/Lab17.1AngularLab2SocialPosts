import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {Post} from '../post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() callParent = new EventEmitter<Post>();
  newTitle :string;
  newThought :string;
  constructor() { }

  ngOnInit(): void {
  }

  submitPost()
  {
    debugger;
    let newPost: Post = {title: this.newTitle, thought: this.newThought};
   
    this.callParent.emit(newPost);
  }

  
}
