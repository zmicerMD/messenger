import {Component, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AdDirective} from "../../../../directives/ad.directive";
import {MessageComponent} from "../../../../standalone/message/message.component";

export interface AdComponent {
  data: any;
}

@Component({
  selector: 'app-messenger-page',
  templateUrl: './messenger-page.component.html',
  styleUrls: ['./messenger-page.component.scss']
})
export class MessengerPageComponent {
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  messageForm = new FormGroup({
      text: new FormControl('')
    }
  );

  constructor(private _renderer2: Renderer2) {
  }


  addComponent() {
    const viewContainerRef = this.adHost.viewContainerRef;
    // viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(MessageComponent);
    if (this.messageForm.value.text) {
      componentRef.instance.message = this.messageForm.value.text;
    }
  }

  submit() {
    console.log(this.messageForm.value.text);
    this.addComponent();
    this.messageForm.reset();
  }
}
