import { splitNsName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../addable-heroes.interface';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
  
  public department:Array<IDepartment>=[{name:'Shazam',img:"assets/img/shazam.png"},{name:'Green Lantern',img:"assets/img/green.jpg"},{name:'Arrow',img:"assets/img/arrow.jpg"},{name:'Superman',img:"assets/img/super.jpg"},{name:'Peace Maker',img:"assets/img/peace.jpg"}]

  
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,private scroller: ViewportScroller,) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string,img:string,description:string): void {
    name = name.trim();
    img=img.trim();
    description=description.trim()
    
    if(!img){
      alert("Choose Photo from the select before upload") 
      return;
    }
      
    if (!name){
      alert("Write name of your Hero first") 
    { return; }
  } 
  this.heroService.addHero({ name,img,description } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  goDown2() {
    
    
    this.scroller.scrollToAnchor("add");
  }
}