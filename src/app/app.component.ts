import { Component } from '@angular/core';
import {Post} from './post'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
postList: Post[] =[
    {title:'test post', thought:'test thought'},
    {title:'testtitle2', thought:'test2'},
    {title:'test3', thought: 'test3 thought'}
    
    ];
    newPost:Post;
    isHidden=true;
  onSubmit = function(newPost:Post){
    debugger;
    this.postList.unshift(newPost)
    this.isHidden = !this.isHidden;
    };

    doHidden = function() {
      this.isHidden = !this.isHidden;
    }
    
    // onDelete = function(item: Post){
    //   this.toDoList.splice(this.toDoList.indexOf(item),1)
    // }


  ngOnInit(): void {

console.log(this.postList[0].title)

  }

}
