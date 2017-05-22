import { Processo } from './../../models/processo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-processo-view',
  templateUrl: './processo-view.component.html',
  styleUrls: ['./processo-view.component.css']
})
export class ProcessoViewComponent implements OnInit {

  @Input() processo: Processo;

  constructor() { }

  ngOnInit() {

  }

}
