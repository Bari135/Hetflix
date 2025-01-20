import { Component, Input } from '@angular/core';
import { Episode } from '../../models/episode.model';


@Component({
  selector: 'app-episode',
  standalone: false,
  
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent {
  @Input() episode!: Episode;
}
