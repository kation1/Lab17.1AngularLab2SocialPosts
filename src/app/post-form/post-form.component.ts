import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Post} from '../post';
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

  submitPost = function()
  {
    let newPost: Post = {title:this.newTitle, thought: this.newThought};
    this.callParent.emit(newPost);
  }
}
