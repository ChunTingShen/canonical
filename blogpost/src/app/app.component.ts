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
    console.log(
      "In Get Data"
    )
    this.blogService.getPost().subscribe((res:any)=>{
      console.log(res)
      this.posts = res
    })

  }

}
