import { Component } from '@angular/core';


export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: "El hombre araña"},
  { id: 12, name: "He-man"},
  { id: 13, name: "Lúpin"},
  { id: 14, name: "Super-man"}
];

@Component({
  styleUrls: ['./app.component.css'],
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  { 
  heroes = HEROES;
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroSelected = new Hero();
  showDetail = false;
  cssSelected = false;
  constructor() {

  }
  public GetListaHeroes()
  {
    return this.heroes;
  }
  public onSelect(var1:Hero)
  {
    this.heroSelected = var1;  
    this.showDetail = true;
  }

}
