import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
export interface DummyPostItem {
  userId?: number;
  id?:     number;
  title?:  string;
  body?:   string;
  isBeingEdited?:boolean;
}


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public http:HttpClient) { }
  data:DummyPostItem[]=[]

  getPostsFromInternet():Observable<DummyPostItem[]>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts') as Observable<DummyPostItem[]>
  }

  // updateData(val:any,index:number){
  //   this.data[index]=val;
  //   console.log(this.data)
  // }
  ngOnInit(): void {
    this.getPostsFromInternet().subscribe((posts)=>{
      this.data=posts.map((val)=>{
        val.isBeingEdited=false;
        return val;
      });
      console.log(this.data)
    })
  }

}
