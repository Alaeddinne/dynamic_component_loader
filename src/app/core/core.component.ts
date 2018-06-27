import { Component, OnInit, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  @Input() variableInput: any;
  @Output() sendEventOutput: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.variableInput
    this.sendEventOutput.emit() 
  }

}
