import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'demo-result-panel',
  templateUrl: './result-panel.component.html',
  styleUrls: ['./result-panel.component.scss'],
})
export class ResultPanelComponent implements OnInit {
  @Input() queryString;

  constructor() {}

  ngOnInit(): void {}
}
