import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input()message?: string;
  isEditing = false;

}
