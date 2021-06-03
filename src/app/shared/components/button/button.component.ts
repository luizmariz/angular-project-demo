import {
  Attribute,
  Component,
  EventEmitter,
  OnInit,
  Optional,
  Output,
} from '@angular/core';

@Component({
  selector: 'demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter();

  constructor(@Optional() @Attribute('text') public text) {
    this.text = this.text === '';
  }

  ngOnInit(): void {}
}
