import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';

export const routes: Routes = [
    { path: '', component: CharactersListComponent },
    { path: 'characters', component: CharactersListComponent },
    { path: 'episodes', component: EpisodesListComponent },
];
