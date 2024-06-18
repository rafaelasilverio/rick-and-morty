import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Episode } from '../../interfaces/episode';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-episode-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent {

  @Input() episode!: Episode;
  @Output() viewDetails = new EventEmitter<number>();

  constructor() { }

  onViewDetails() {
    this.viewDetails.emit(this.episode.id);
  }

}
