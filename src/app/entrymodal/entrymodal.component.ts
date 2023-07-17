import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-entry-modal',
  templateUrl: './entrymodal.component.html',
  styleUrls: ['./entrymodal.component.css']
})
export class EntrymodalComponent {
  @Input() header: string = '';
  @Input() visible: boolean = false;

  hideModal() {
    this.visible = false;
  }
}
