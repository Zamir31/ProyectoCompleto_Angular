import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public characters: ICharacter[] = [{
    nameCha: 'Krillin',
    power: 500
  },
  {
    nameCha: 'Goku',
    power: 10000
  },
  {
    nameCha: 'Freezer',
    power: 5000
  }
];

  newCharacter( character: ICharacter): void {
    this.characters.push({
      nameCha: character.nameCha,
      power: character.power
    });
  }

  deleteCharacter( index: number): void {
    this.characters.splice(index, 1);
  }



  constructor() { }
}
