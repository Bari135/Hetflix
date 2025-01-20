import { Component , OnInit} from '@angular/core';
import { Episode } from '../../models/episode.model';
import { ActivatedRoute } from '@angular/router';
import { GetShowsService } from '../../services/get-shows.service';

@Component({
  selector: 'app-episodes-page',
  standalone: false,
  
  templateUrl: './episodes-page.component.html',
  styleUrl: './episodes-page.component.css'
})
export class EpisodesPageComponent implements OnInit {
  episodes: Episode[] = [];
  showId!: number;

  constructor(private route: ActivatedRoute, private getShowsService: GetShowsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.showId = +params['id'];
      this.loadEpisodes();
    });
  }

  loadEpisodes() {
    this.getShowsService.getEpisodes(this.showId).subscribe((data: Episode[]) => {
      this.episodes = data;
    });
  }
}
