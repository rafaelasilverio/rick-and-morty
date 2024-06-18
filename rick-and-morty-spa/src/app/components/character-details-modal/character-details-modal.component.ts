import { Component, Inject } from '@angular/core';
import { Character } from '../../interfaces/character';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharactersService } from '../../services/characters.service';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ButtonLoadMoreComponent } from '../button-load-more/button-load-more.component';

@Component({
  selector: 'app-character-details-modal',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, ButtonLoadMoreComponent],
  templateUrl: './character-details-modal.component.html',
  styleUrl: './character-details-modal.component.scss'
})
export class CharacterDetailsModalComponent {

  character!: Character;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersService.getCharacterDetails(this.data.id).subscribe((character) => {
      this.character = character;
    });
  }
}
