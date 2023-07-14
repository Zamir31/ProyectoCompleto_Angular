import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ICharacter } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Output()
  public characterSelect : EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList : ICharacter[] = [];

  onDelete( index: number): void {
    this.characterSelect.emit(index);
  }

  deleteCharacter( num: number): void {
    // this.characterList.splice(num, 1);
  }
}
