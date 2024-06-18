import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-load-more',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button-load-more.component.html',
  styleUrl: './button-load-more.component.scss'
})
export class ButtonLoadMoreComponent {
  @Input() More: boolean = false;
}
