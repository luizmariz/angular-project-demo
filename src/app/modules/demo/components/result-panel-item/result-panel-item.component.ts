import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'demo-result-panel-item',
  templateUrl: './result-panel-item.component.html',
  styleUrls: ['./result-panel-item.component.scss'],
})
export class ResultPanelItemComponent implements OnInit {
  _isCollapsed = true;

  @Input() imgUrl;
  @Input() title;
  @Input() description;

  @Output() showMoreClicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  togglePanelItem() {
    this._isCollapsed = !this._isCollapsed;
  }
}
