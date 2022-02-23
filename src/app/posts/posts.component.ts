import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DummyPostItem } from '../interfaces/general';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  data:DummyPostItem={};


  getPostFromInternet(id: number): Observable<DummyPostItem> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`) as Observable<DummyPostItem>
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      this.getPostFromInternet(params.postId).subscribe((postItem) =>{
        this.data=postItem
      } )
    })

  }

}
