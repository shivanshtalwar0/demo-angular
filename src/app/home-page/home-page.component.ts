import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
export interface DummyPostItem {
  userId?: number;
  id?:     number;
  title?:  string;
  body?:   string;
}


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private http:HttpClient) { }
  data:DummyPostItem[]=[]

  getPostsFromInternet():Observable<DummyPostItem[]>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts') as Observable<DummyPostItem[]>
  }

  ngOnInit(): void {
    this.getPostsFromInternet().subscribe((posts)=>{
      this.data=posts;
    })
  }

}
