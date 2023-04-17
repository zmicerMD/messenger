import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

interface ICardsData {
  name: string,
  icon: string,
  lastSeen: Date,
  lastMessages: string[],
}

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  @Input() cardsData?: ICardsData;

  avatar?: string = this.cardsData?.icon;
  avatarAlt? = this.cardsData?.name.slice(0, 1);
}
