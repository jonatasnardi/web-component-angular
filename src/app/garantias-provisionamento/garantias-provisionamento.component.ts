import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-garantias-provisionamento',
  templateUrl: './garantias-provisionamento.component.html',
  styleUrls: ['./garantias-provisionamento.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class GarantiasProvisionamentoComponent implements OnInit {
  @Input() name = "Itaú";

  constructor() { }

  ngOnInit() {
  }

}
