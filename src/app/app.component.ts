import { Component } from '@angular/core';
import {Post} from './post'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab171AngularSocialPosts';
  post = {title:'test', thought:'testthought'};


  submitPost = function()
  {
    let newPost: Post = {title:this.newTitle, thought: this.newThought};
    this.callParent.emit(newPost);
  }
}


}
