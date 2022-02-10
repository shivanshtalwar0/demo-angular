import { Component, Input, OnInit } from '@angular/core';
import { DummyPostItem } from '../home-page.component';

@Component({
  selector: 'app-dummy-post-item',
  templateUrl: './dummy-post-item.component.html',
  styleUrls: ['./dummy-post-item.component.scss']
})
export class DummyPostItemComponent implements OnInit {

  @Input()
  data:DummyPostItem={}

  constructor() { }

  ngOnInit(): void {
  }

}
