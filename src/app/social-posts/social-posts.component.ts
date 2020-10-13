import { Component, OnInit } from '@angular/core';
import{Post} from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
postList:Post[] =[

{title:'test post', thought:'test thought'},
{title:'testtitle2', thought:'test2'}


];

onSubmit = function(item){
this.postList.push({item})
};

onDelete = function(item){
  this.toDoList.splice(this.toDoList.indexOf(item),1);
}


}
