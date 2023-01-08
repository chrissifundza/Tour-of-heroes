import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Batman',img:'assets/img/bat.jpg', description:'The Batman is a 2022 American superhero film based on the DC Comics character Batman. Produced by Warner Bros. Pictures, DC Films, 6th & Idaho, and Dylan Clark Productions, and distributed by Warner Bros. Pictures, it is a reboot of the Batman film franchise.' },
      { id: 13, name: 'Captein America',img:'assets/img/captein.jpg', description:'Steve Rogers, a weak, sickly young man eager to fight is repeatedly rejected from the war-until a seemingly "crazy" scientist recruits him in a new experiment to turn the tides. He is transformed into the super soldier the world needs, but no one believes it.'},
      { id: 14, name: 'Spider Man',img:'assets/img/spider.jpg', description:'The moral message of Spiderman might seem just to be the slogan of the film and comic: with great power comes great responsibility.' },
      { id: 15, name: 'Iron Man',img:'assets/img/iron.jpg', description:'2008s Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity.' },
      { id: 16, name: 'Dr Strange',img:'assets/img/strange.jpg', description:'Sometimes You Dont Succeed at First: Without giving too much away, Doctor Strange boasts the ability to travel back in time, so you can already imagine where Im going with this. Sometimes when we make mistakes, we wish we could go back in time and fix them.' },
      { id: 17, name: 'The Flash',img:'assets/img/flash.jpg', description:'In the Flash origin story, student Jay Garrick is experimenting one night in the lab at Midwestern University when he is overcome by hard water fumes and passes out. Reawakening weeks later, he finds that he can move incredibly fast and is even able to pluck a bullet out of the air' },
      { id: 18, name: 'Wonder Women',img:'assets/img/wonder.jpg',description:'Wonder Woman is an Amazon, a race of female warriors in Greek mythology. For the purpose of the Wonder Woman character, it was the Greek gods who gave her her powers. These powers include superhuman strength and speed as well as the ability to fly.' },
      { id: 19, name: 'Captein Marvel',img:'assets/img/marvel.jpg', description:'Captain Marvel is the story of Carol Danvers, a U.S. Air Force Officer who becomes the superhero Captain Marvel. On Earth, Carol is a hot-shot pilot, but when shes flung deep into space, she joins Starforce, an elite military force of the alien Kree empire.' },
      { id: 20, name: 'Xmen',img:'assets/img/Xmen.jpg', description:'The underlying message in the X-Men is that being different is not inherently a bad thing, no matter what society or politics want people to believe. Our differences are a gift, and we owe it to ourselves to use that gift to make the world a better place.' }
    ];
    return {heroes};
  } 

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}