import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './services/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'news-and-article-app';
  posts : any
  constructor(private httpClientService : HttpClientService){
  }

  ngOnInit(){
    this.httpClientService
    .get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(data=>{
      console.log(data)
      this.posts = data
    })
  }

  post(){
    let body = {
      title:'Angular Indra Training',
      body:'Angular Indra Training Body'      
    }
    this.httpClientService
    .post('https://jsonplaceholder.typicode.com/posts', body)
    .subscribe(posts=>{
      console.log(posts)
    },
    (error=>{
      console.error(error)
    })
    )
  }

}
