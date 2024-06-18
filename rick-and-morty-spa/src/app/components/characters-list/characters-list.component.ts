import { Component, Input, OnInit, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../interfaces/character';
import { CharacterCardComponent } from '../character-card/character-card.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CharacterDetailsModalComponent } from '../character-details-modal/character-details-modal.component';
import { ButtonLoadMoreComponent } from '../button-load-more/button-load-more.component';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharacterCardComponent, MatDialogModule, ButtonLoadMoreComponent],
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  
  readonly dialog = inject(MatDialog);

  characters : Character[] = [];
  MoreCharacters: boolean = true;
  currentPage: number = 1;

  constructor(private charactersService: CharactersService, private searchService: SearchService) { }

  ngOnInit() {
    this.getCharactersFromService();
  }

  getCharactersFromService(): void {
    this.charactersService.getCharacters(this.currentPage).subscribe((result: any) => {
      this.characters = [...this.characters, ...result.results]
    })
  }

  openCharacterDetails(id: number): void {
    this.dialog.open(CharacterDetailsModalComponent, {
      data: { id }
    });
  }

  loadMoreCharacters(){
    this.charactersService.getCharacters(++this.currentPage).subscribe((result: any) =>{
      this.characters = [...this.characters, ...result.results];
      if(!this.characters.length){
        this.MoreCharacters = false;
      }
    })
  }

}
