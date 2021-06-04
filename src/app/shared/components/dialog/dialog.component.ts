import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shrd-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  private _isHidden;

  _lockClickOutside = true;

  @Input()
  set isHidden(isHidden: boolean) {
    this._isHidden = isHidden;

    setTimeout(() => {
      this._lockClickOutside = isHidden;
    });
  }
  get isHidden(): boolean {
    return this._isHidden;
  }

  @Output() actionClicked: EventEmitter<any> = new EventEmitter();
  @Output() outsideClicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleOutsideClick(): void {
    if (!this._lockClickOutside) {
      this.outsideClicked.emit();
    }
  }
}
