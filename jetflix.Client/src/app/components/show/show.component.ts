import { Component, Input } from '@angular/core';
import { Show } from '../../models/show.model';
import { Episode } from '../../models/episode.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show',
  standalone: false,
  
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  @Input() show!: Show;
  
  constructor(private router: Router) {}

  navigateToEpisodes() {
    this.router.navigate(['/episodes', this.show.id]);
  }
}

