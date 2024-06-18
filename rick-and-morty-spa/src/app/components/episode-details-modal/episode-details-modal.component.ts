import { Component, Inject } from '@angular/core';
import { Episode } from '../../interfaces/episode';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EpisodesService } from '../../services/episodes.service';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';


@Component({
  selector: 'app-episode-details-modal',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './episode-details-modal.component.html',
  styleUrl: './episode-details-modal.component.scss'
})
export class EpisodeDetailsModalComponent {

  episode!: Episode;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private episodesService: EpisodesService
  ) { }

  ngOnInit(): void {
    this.episodesService.getEpisodeDetails(this.data.id).subscribe((episode) => {
      this.episode = episode;
    });
  }
}
