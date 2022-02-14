import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { DummyPostItem } from '../home-page.component';

@Component({
  selector: 'app-dummy-post-item',
  templateUrl: './dummy-post-item.component.html',
  styleUrls: ['./dummy-post-item.component.scss']
})
export class DummyPostItemComponent implements OnInit {

  @Input()
  model:DummyPostItem={}

  @Output()
  modelChange:EventEmitter<DummyPostItem>=new EventEmitter<DummyPostItem>()

  @Input()
  color='black'

  get myComponentStyle():string{
    return `color:${this.color};`
  }

  toggleEditState(){
    console.log('state edited')
   const obj:any =Object.assign({},this.model)
   obj.isBeingEdited=!obj.isBeingEdited
    this.modelChange.emit(obj)
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.color)
  

  }

}
