import { Component, OnInit , Output, EventEmitter, Input} from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})



export class PostComponent implements OnInit {
  @Input() post:Post;
 @Output() delete = new EventEmitter<Post>();
  postSelected=" postlist[1]"
  constructor() { }


  ngOnInit(): void {
  }

  deletePost = function(post){
    this.delete.emit(post)
  }

}
