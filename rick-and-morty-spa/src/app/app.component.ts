import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EpisodesListComponent, CharactersListComponent, EpisodeCardComponent, CharacterCardComponent, SidebarComponent, HeaderComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rick-and-morty-spa';
}
