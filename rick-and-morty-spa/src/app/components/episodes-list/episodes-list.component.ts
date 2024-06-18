import { Component, Input, inject } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service'
import { Episode } from '../../interfaces/episode';
import { EpisodeCardComponent } from '../episode-card/episode-card.component';
import { EpisodeDetailsModalComponent } from '../episode-details-modal/episode-details-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ButtonLoadMoreComponent } from '../button-load-more/button-load-more.component';
import { SearchService } from '../../services/search.service';



@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [EpisodeCardComponent, MatDialogModule, ButtonLoadMoreComponent],
  templateUrl: './episodes-list.component.html',
  styleUrl: './episodes-list.component.scss'
})
export class EpisodesListComponent {
  
  episodes: Episode[] =[];  
  readonly dialog = inject(MatDialog);
  currentPage: number = 1;
  MoreEpisodes: boolean = true;
  
  constructor(private episodesService: EpisodesService, private searchService: SearchService) { }

  ngOnInit(){
    this.getEpisodesFromService();
  }


  getEpisodesFromService(): void {
    this.episodesService.getEpisodes(this.currentPage).subscribe((result: any) =>{
      this.episodes = [...this.episodes, ...result.results];
    })
  }

  openEpisodeDetails(id: number): void {
    this.dialog.open(EpisodeDetailsModalComponent, {
      data: { id }
    });
  }

  loadMoreEpisodes(){
    this.episodesService.getEpisodes(++this.currentPage).subscribe((result: any) =>{
      this.episodes = [...this.episodes, ...result.results];
      if(!this.episodes.length){
        this.MoreEpisodes = false;
      }
    })
  }


}
