import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { CoreComponent } from './core/core.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('divCore', { read: ViewContainerRef }) divCore;
  constructor(private resolver: ComponentFactoryResolver) { }

  private loadComponent(): void {
    // Dynamic load component
    const libRef = this.divCore.createComponent(this.resolver.resolveComponentFactory(CoreComponent));
    libRef.instance.variableInput = "variableToInput"; // input
    libRef.instance.sendEventOutput.subscribe(($event: any) => {
      console.log("variableToOutput", $event)  // output 
    })
  }
}
