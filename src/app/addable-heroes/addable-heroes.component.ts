import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../addable-heroes.interface';

@Component({
  selector: 'app-addable-heroes',
  templateUrl: './addable-heroes.component.html',
  styleUrls: ['./addable-heroes.component.less']
})
export class AddableHeroesComponent implements OnInit {

  public department:Array<IDepartment>=[{name:'Shazam',img:"assets/img/shazam.png"},{name:'Green Lateh',img:"assets/img/green.jpg"}]


  constructor() { }

  ngOnInit(): void {
    
  }

}
