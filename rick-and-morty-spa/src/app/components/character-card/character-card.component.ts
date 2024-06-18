import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {

  @Input() character!: Character;
  @Output() viewDetails = new EventEmitter<number>();

  onViewDetails() {
    this.viewDetails.emit(this.character.id);
  }
}
