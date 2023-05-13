import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserData } from '../../models/interfaces/user-data';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  @Input() cardsData?: UserData;

  avatar?: string = this.cardsData?.icon;
  avatarAlt? = this.cardsData?.name.slice(0, 1);
  lastSeen = this.cardsData?.lastSeen ?? new Date().toDateString();
}
