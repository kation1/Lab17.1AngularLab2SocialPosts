import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Post} from '../post';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
  }

  submitPost = function(post)
  {
    this.submitted.emit(post)
  }
}
