import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DummyPostItem } from '../interfaces/general';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public http:HttpClient) { }
  data:DummyPostItem[]=[]

  getPostsFromInternet():Observable<DummyPostItem[]>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/') as Observable<DummyPostItem[]>
  }

  // updateData(val:any,index:number){
  //   this.data[index]=val;
  //   console.log(this.data)
  // }
  ngOnInit(): void {
    this.getPostsFromInternet().subscribe((posts)=>{
      this.data=posts.map((val)=>{
        val.isBeingEdited=false;
        val.imgUrl='https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
        return val;
      });
      console.log(this.data)
    })
  }

}
