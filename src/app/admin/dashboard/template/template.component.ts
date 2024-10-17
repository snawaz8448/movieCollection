import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

}
