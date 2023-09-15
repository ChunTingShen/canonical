import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  constructor(private blogService: BlogService){}
  
  title = "hihihi";

  ngOnInit(): void {
      this.getData();
  }

  getData() {
    console.log(
      "In Get Data"
    )
    this.blogService.getPost().subscribe((res)=>{
      console.log(res)
    })
  }

}
