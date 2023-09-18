import { Component, OnInit } from '@angular/core';
import { BlogService, Post } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  constructor(private blogService: BlogService){}
  
  posts: Post[] = []


  ngOnInit(): void {
      this.getData();
  }

  getData() {
    this.blogService.getPost().subscribe((res:any)=>{
      console.log(res)
      this.posts = res
    })

  }

}
