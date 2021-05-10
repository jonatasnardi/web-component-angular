import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-buston',
  templateUrl: './buston.component.html',
  styleUrls: ['./buston.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BustonComponent implements OnInit {
  @Input() name = "Itaú";

  constructor() { }

  ngOnInit() {
  }

}
