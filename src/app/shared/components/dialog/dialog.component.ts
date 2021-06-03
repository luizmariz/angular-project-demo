import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'demo-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() isHidden = true;

  @Output() actionClicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
